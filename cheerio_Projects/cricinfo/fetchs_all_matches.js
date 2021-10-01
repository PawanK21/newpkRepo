const request = require("request");
const cheerio = require("cheerio");
const xlsx = require("xlsx");
const exceljs = require("exceljs");
const writeXlsxFile = require("write-excel-file");

let cricUrl =
  "https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results";

request(cricUrl, requestCallBack);

function requestCallBack(err, res, body) {
  const $ = cheerio.load(body);
  const allMatchesAnchorTags = $('[data-hover = "Scorecard"]');

  // console.log(allMatchesAnchorTags.length);
  for (let i = 0; i < allMatchesAnchorTags.length; i++) {
    //allMatchesAnchorTags.length;
    let url =
      "https://www.espncricinfo.com/" + $(allMatchesAnchorTags[i]).attr("href");

    let arrayForID = url.split("-");
    let matchId = arrayForID[arrayForID.length - 2].substring(0, 7);
    // console.log(matchId);

    request(url, subMatchCallback.bind(this, matchId));
    // console.log(url);
  }
}
// let batsmanDataList = [];
// let bowlersDataList = [];
// let matchesTable = [];
let count = 0;
// let titlesArray = [];

let newWb = xlsx.utils.book_new();

function subMatchCallback(matchId, err, res, html) {
  const $ = cheerio.load(html);
  let tables = $(".Collapsible__contentInner tbody");
  // console.log(tables.length);

  // console.log(matchId);

  // cnt++;
  let batsmanDataArray = [
    "Name",
    "Wicket_taken_by",
    "Runs",
    "Bols",
    "Fours",
    "Sixes",
    "SR",
  ];
  let bowlersDataArray = [
    "Name",
    "Overs",
    "Medan_Over",
    "Runs",
    "Wickets",
    "ECON",
    "Fours",
    "Sixes",
    "WD",
    "NB",
  ];

  for (let i = 0; i < tables.length; i++) {
    count++;
    let titleOfSheet = `${matchId + "_Table -" + count}`;
    let table_rows = $(tables[i]).find("tr");
    // console.log(table.length);
    let tablesObject = [];

    for (let j = 0; j < table_rows.length; j++) {
      // cnt++;
      let tableData = $(table_rows[j]).find("td");
      let temp = {};
      let cnt = 0;

      if (i % 2 == 0) {
        // batsman tables
        let hasRowData = $(tableData[0]).hasClass("batsman-cell");
        // console.log(tableData.length);
        if (hasRowData) {
          for (let k = 0; k < tableData.length; k++) {
            let innerText = tableData[k];
            if (k != 4) {
              temp[batsmanDataArray[cnt]] = $(innerText).text();
              cnt++;
            }
          }
          tablesObject.push(temp);
          // batsmanDataList.push(temp);
        }

        // console.log(temp);
      } else {
        // bowlers table
        let hasRowData = $(tableData[0]).hasClass("text-nowrap");
        if (hasRowData) {
          for (let k = 0; k < tableData.length; k++) {
            let innerText = tableData[k];

            if (k == 4) continue;
            temp[bowlersDataArray[cnt]] = $(innerText).text();
            cnt++;
          }
          tablesObject.push(temp);
          // bowlersDataList.push(temp);
        }
        // console.log(temp);
      }
    }

    let newWs = xlsx.utils.json_to_sheet(tablesObject);
    xlsx.utils.book_append_sheet(newWb, newWs, titleOfSheet);
    xlsx.writeFile(newWb, "cricInfo_IPL_seriesData.xlsx");
  }
}

