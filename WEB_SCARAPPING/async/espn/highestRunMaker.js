let request = require("request");
let cheerio = require("cheerio");

let url =
  "https://www.espncricinfo.com/series/county-championship-2021-1244186/glamorgan-vs-gloucestershire-division-2-1271402/full-scorecard";
request(url, function (error, response, body) {
  if (error) {
    console.log("error: ", error);
  } else {
    // console.log(response && response.statusCode);// statusCode: 200 OR 402
    extractHTML(body);
  }
});
function extractHTML(html) {
  let selectorTool = cheerio.load(html);
  let batsmanTableArr = selectorTool(
    ".card.content-block.match-scorecard-table .table.batsman"
  );
  // console.log(batsmanTableArr.length);

  let playerName = "";
  let maxRuns = -1;
  let  maxRunsPlyr = -1;
  let maxRunsPlyrName = '';
  let obj = {};
  for (let i of batsmanTableArr) {
    let batsmanTable = selectorTool(i).html();
    // console.log(batsmanTable);

    let allBatsmanRows_arr = selectorTool(batsmanTable).find("tbody>tr");
    // console.log(allBatsmanRows_arr.length);
    for (let j of allBatsmanRows_arr) {
      // travelling on rows
      let allColsOfEachPlayer_arr = selectorTool(j).find("td"); // all rows one - by- one
      // console.log(allColsOfEachPlayer_arr.length);

      if (allColsOfEachPlayer_arr.length != 1) {
        let currPlayerName = selectorTool(allColsOfEachPlayer_arr[0]).text();
        let currMaxRuns = selectorTool(allColsOfEachPlayer_arr[2]).text();

        obj[currPlayerName] = currMaxRuns;
        // console.log(currPlayerName); // 0th column of each row
        // console.log(currMaxRuns);

        if (parseInt(currMaxRuns) > maxRuns) {
          maxRuns = parseInt(currMaxRuns);
          playerName = currPlayerName;
          console.log(maxRuns);
        }
      }
    }
  }

  console.log("Highest Run maker player: ", playerName);
  console.log("Highest Runs: ", maxRuns);
  console.log(obj);

  // Accessing using object
  for(let key of Object.keys(obj)) {
    if(parseInt(obj[key]) > maxRunsPlyr) {
      maxRunsPlyr = parseInt(obj[key]);
      maxRunsPlyrName = key;
    }
  }

  console.log(maxRunsPlyrName);
  console.log(maxRunsPlyr);
}
