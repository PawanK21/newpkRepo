const request = require("request");
const cheerio = require("cheerio");
const xlsx = require("xlsx");
const exceljs = require("exceljs");

request(
  "https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results",
  requestCallBack
);

function requestCallBack(err, res, html) {
  const $ = cheerio.load(html);
  const allMatchesAnchorTags = $('[data-hover = "Scorecard"]');

  // console.log(allMatchesAnchorTags.length);
  for (let i = 0; i < allMatchesAnchorTags.length; i++) {
    //allMatchesAnchorTags.length;
    let url =
      "https://www.espncricinfo.com/" + $(allMatchesAnchorTags[i]).attr("href");

    let arrayForID = url.split("-");
    let matchId = arrayForID[arrayForID.length - 2].substring(0, 7);
    // console.log(matchId);

    request(url, subMatchCallback.bind(this, i, matchId));
    // console.log(url);
  }
}
let batsmanDataList = [];
let bowlersDataList = [];
let matchesTable = [];
let count = 0;
let cnt = 0;

function subMatchCallback(idx, matchId, err, res, html) {
  const $ = cheerio.load(html);
  let tables = $(".Collapsible__contentInner tbody");
  // console.log(tables.length);

  // console.log(matchId);

  let tablesObject = [];
  cnt++;
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
    "medan_Over",
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
    let table_rows = $(tables[i]).find("tr");
    // console.log(table.length);
    for (let j = 0; j < table_rows.length; j++) {
      let tableData = $(table_rows[j]).find("td");
      let temp = {};
      let count = 0;

      if (i % 2 == 0) {
        // batsman tables
        let hasRowData = $(tableData[0]).hasClass("batsman-cell");
        // console.log(tableData.length);
        if (hasRowData) {
          for (let k = 0; k < tableData.length; k++) {
            let innerText = tableData[k];
            if (k != 4) {
              temp[batsmanDataArray[count]] = $(innerText).text();
              count++;
            }
          }
          tablesObject.push(temp);
        }

        // console.log(temp);
      } else {
        // bowlers table
        let hasRowData = $(tableData[0]).hasClass("text-nowrap");
        if (hasRowData) {
          for (let k = 0; k < tableData.length; k++) {
            let innerText = tableData[k];

            if (k == 4) continue;
            temp[bowlersDataArray[count]] = $(innerText).text();
            count++;
          }
          tablesObject.push(temp);
        }
        // console.log(temp);
      }
    }
  }
  // console.log("\n\n");
  // if (batsmanDataList.length != 0) {
  //   console.log(batsmanDataList);
  // }
  // console.log(tablesObject);
  // console.log("\n\n");
  // if (bowlersDataList.length != 0) {
  //   console.log(bowlersDataList);
  // }

  // matchesTable.push(tablesObject);

  // if(count == 60) {
  //   console.log(matchesTable);
  // }
  // console.log(cnt);

  const uploadIntoExcel = () => {
    let titleOfSheet = `${"match" + "_" + matchId + " - " + cnt}`;
    const workSheet = xlsx.utils.json_to_sheet(tablesObject);
    // const workBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workBook, workSheet, titleOfSheet);
    // Generate buffer
    xlsx.write(workBook, { bookType: "xlsx", type: "buffer" });
    xlsx.writeFile(workBook, "cricInfo_IPL_seriesData.xlsx");
  };
  // uploadIntoExcel();
}
