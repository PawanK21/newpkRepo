let request = require("request");
const cheerio = require("cheerio");
const { jar } = require("request");
const url =
  "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
request(url, cb);

function cb(err, res, html) {
  if (err) {
    console.log("error", err);
  } else {
    extractHTML(html);
  }
}

function extractHTML(html) {
  let selectorTool = cheerio.load(html);
  let bowlerTableArr = selectorTool(
    ".card.content-block.match-scorecard-table .table.bowler"
  );
  // console.log(bowlerTableArr.length);

  let hwtPlayer = "";
  let maxNumOfWct = 0;
  for (let bt of bowlerTableArr) {
    let bowlerTable = selectorTool(bt).html();
    // console.log(bowlerTable);
    let allBowlersArr = selectorTool(bowlerTable).find("tbody>tr");
    // console.log(allBowlersArr.length);

    for (let bolr of allBowlersArr) {
      let allColsOfEachPlayer_arr = selectorTool(bolr).find("td");
      // console.log(allColsOfEachPlayer_arr.length);

      if (allColsOfEachPlayer_arr.length != 1) {
        let playerName = selectorTool(allColsOfEachPlayer_arr[0]).text();
        let numOfWct = selectorTool(allColsOfEachPlayer_arr[4]).text();
        // console.log(playerName);
        // console.log(numOfWct);

        if(parseInt(numOfWct) > maxNumOfWct) {
          maxNumOfWct = parseInt(numOfWct);
          hwtPlayer = playerName;
        }
      }
    }
  }
  console.log(hwtPlayer);
  console.log(maxNumOfWct);
}
