const request = require("request");
const cheerio = require("cheerio");
const chalk = require('chalk');
let url =
  "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
request(url, cb);

function cb(error, response, body) {
  if (error) {
    console.log("error: ", error);
  } else {
    // console.log("response: ", response && response.statusCode);
    extractHTML(body);
  }
}

function extractHTML(html) {
  let selectorTool = cheerio.load(html);

  let allTables = selectorTool(".table tbody");
  // console.log(allTables.length);

  for (let i = 0; i < 4; i++) {
    let allTablesRows_arr = selectorTool(allTables[i]).find("tr");
    // console.log(allTableRows_arr.length);

    for (let j = 0; j < allTablesRows_arr.length; j++) {
      let link = selectorTool(allTablesRows_arr[j]).find("a").attr("href");
      // https://www.espncricinfo.com/
      // console.log(link);

      if (link) {
        let fullLink = "https://www.espncricinfo.com" + link;
        // console.log(fullLink);
        getBirthday(fullLink);
      }
    }
  }
}

function getBirthday(link) {
  request(link, cb);
  function cb(error, response, body) {
    if (error) {
      console.log("error: ", error);
    } else {
      // console.log("response: ", response && response.statusCode);
      extractBirthday(body);
    }
  }
}

function extractBirthday(html) {
  let selectorTool = cheerio.load(html);
  let playerData_arr = selectorTool(".player-card-description.gray-900");
  // console.log(selectorTool(playerData_arr).text());
  // console.log(playerData_arr.length);
  let playerName = selectorTool(playerData_arr[0]).text();
  // console.log(playerName);
  // console.log(selectorTool(playerData_arr[1]).text());
  let dobArr = selectorTool(playerData_arr[1]).text().split(",");
  // console.log(dobArr);

  let dob = "";
  for (let i = 0; i < 2; i++) {
    if (dobArr.length != 1) {
      dob += dobArr[i];
    }
  }

  console.log(chalk.blue("Name of player: ", playerName));
  console.log(chalk.yellow("Date of Birth: ", dob));
  console.log();
}
