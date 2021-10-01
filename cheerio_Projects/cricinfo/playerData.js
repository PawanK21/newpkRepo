const cheerio = require('cheerio');
const chalk = require('chalk');
const request = require('request');

let url = 'https://www.espncricinfo.com/series/county-championship-2021-1244186/glamorgan-vs-gloucestershire-division-2-1271402/full-scorecard';
request(url, cb);

function cb(err, res, body) {
  const $ = cheerio.load(body);
  let tableRows = $('.table.batsman tbody tr');
  // console.log(tableRows.length);

  let playerList = [];
  let dataArray = ['name', 'wct??', 'runs', 'bols', 'fours', 'sixes', 'SR'];

  for(let i = 0; i<tableRows.length; i++) {
    
    let tableRowData = $(tableRows[i]).find('td');
    let temp = {};
    if(tableRowData.length > 4) {
      // console.log(tableRowData.length);

      let count = 0;
      for(let j = 0; j < tableRowData.length; j++) {
      
        let innerText = tableRowData[j];
        if(j != 4) {
          temp[dataArray[count]] = $(innerText).text();
          count++;
        }
      }
      console.log(temp);
      playerList.push(temp);
    }
  }
  console.log(playerList);
}