const cheerio = require('cheerio');
const request = require('request');

const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard";
request(url, cb);

function cb(err, res, html) {
  if(err) {
    console.log('ERROR: ', err);
  }
  else {
    extractHTML(html);
  }
}

function extractHTML(html) {
  let $ = cheerio.load(html);

  // let scoreArr = $('.table.batsman .thead-light.bg-light.total .text-right.font-weight-bold');
  // // console.log(typeof($(scoreArr).text()));
  // console.log(typeof($(scoreArr[0]).text()));

  // let team1_Score = $(scoreArr[0]).text();
  // let team2_Score = $(scoreArr[1]).text();
  // let winningTeamScore = '';
  // if(team1_Score > team2_Score) {
  //   winningTeamScore = team1_Score;
  // }
  // else {
  //   winningTeamScore = team2_Score;
  // }
  // console.log(winningTeamScore); 



//********By Sir*********** */
const losingTeam = $(".team-gray .name-link p").text();
const bothTeamsObject = $(".name-link p");
const bothTeamScoreObject = $(
  ".match-info.match-info-MATCH.match-info-MATCH-half-width .score"
);

  const winningTeamNameScoreArray = 
  losingTeam == $(bothTeamsObject[0]).text() 
  ? [$(bothTeamsObject[1]).text(), $(bothTeamScoreObject[1]).text()] 
  : [$(bothTeamsObject[0]).text(), $(bothTeamScoreObject[0]).text()];

  console.log(winningTeamNameScoreArray);
}