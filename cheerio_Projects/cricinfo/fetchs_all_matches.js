const request = require("request");
const cheerio = require("cheerio");
const xlsx = require("xlsx");
// const exceljs = require("exceljs");
// const writeXlsxFile = require("write-excel-file");

let cricUrl =
"https://www.espncricinfo.com/series/ipl-2019-1165643/match-results"; //"https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results";

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











// const request = require("request");
// const cheerio = require("cheerio");
// const xlsx = require("xlsx");
// request(
//   "https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results",
//   requestCallBack
// );

// function requestCallBack(err, res, html) {
//   const $ = cheerio.load(html);
//   const allMatchesAnchorTags = $('[data-hover = "Scorecard"]');

//   // console.log(allMatchesAnchorTags.length);
//   for (let i = 0; i < allMatchesAnchorTags.length; i++) {
//     //allMatchesAnchorTags.length;
//     let url =
//       "https://www.espncricinfo.com/" + $(allMatchesAnchorTags[i]).attr("href");

//     let arrayForID = url.split("-");
//     let matchId = arrayForID[arrayForID.length - 2].substring(0, 7);
//     // console.log(matchId);

//     request(url, subMatchCallback.bind(this, matchId));
//     // console.log(url);
//   }
// }

// let newWb = xlsx.utils.book_new();
// let count = 0;
// function subMatchCallback(matchId, err, res, html) {
//   const $ = cheerio.load(html);
//   let tables = $(".Collapsible__contentInner tbody");
//   // let batsmanProfileUrls = [];
//   // let bowlerProfileUrls=[];
//   // let tableobject = [];

//   for (let i = 0; i < tables.length; i++) {

//     count++;
//     let titleOfSheet = `${matchId + "_Table -" + count}`;
//     let table_rows = $(tables[i]).find("tr");

//     // console.log(table.length);
//     let tableobject = [];

//     for (let j = 0; j < table_rows.length; j++) {
//       let allCols = $(table_rows[j]).find("td");
//       if (i % 2 == 0) {
//         let hastheclass = $(allCols[0]).hasClass("batsman-cell");
//         if (hastheclass == true) {
//           tableobject.push({
//             name: $(allCols[0]).text(),
//             wickets_taken_by: $(allCols[1]).text(),
//             runs: $(allCols[2]).text(),
//             balls: $(allCols[3]).text(),
//             fours: $(allCols[5]).text(),
//             sixes: $(allCols[6]).text(),
//             SR: $(allCols[7]).text(),
//           });
//         }
//         // tableobject.push(batsmanProfileUrls);
//       } else {
//         let hastheclass = $(allCols[0]).hasClass("text-nowrap");
//         if (hastheclass == true) {
//           tableobject.push({
//             name: $(allCols[0]).text(),
//             overs: $(allCols[1]).text(),
//             median_over: $(allCols[2]).text(),
//             runs: $(allCols[3]).text(),
//             wickets: $(allCols[5]).text(),
//             econ: $(allCols[6]).text(),
//             Fours: $(allCols[7]).text(),
//             Sixes: $(allCols[8]).text(),
//             WD: $(allCols[9]).text(),
//           });
//         }
//         // tableobject.push(bowlerProfileUrls);
//       }
//     }

//     let newWs = xlsx.utils.json_to_sheet(tableobject);
//     xlsx.utils.book_append_sheet(newWb, newWs, titleOfSheet);
//     xlsx.writeFile(newWb, "New_cricInfo_IPL_seriesData.xlsx");
//   }
// }

