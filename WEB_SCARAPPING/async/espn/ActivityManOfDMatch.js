let request = require('request');
const cheerio = require('cheerio');
const { jar } = require('request');
const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard';
request(url, cb);

function cb(err, res, html) {
  if(err) {
    console.log('error', err);
  }
  else {
    extractHTML(html);
  }
}

function extractHTML(html) {
  let selectorTool = cheerio.load(html);
  let statArr = selectorTool('.text-nowrap>a[data-hover = "Trent Boult"]');
  let statArr1 = selectorTool('.cursor-pointer'); 
  // for(let i =0 ; i<statArr.length; i++){
  //   let data = selectorTool(statArr[i]).text();
  //   console.log(data);
  // }

  let lbc = selectorTool(statArr[0]).text();

  console.log(lbc);
  console.log(selectorTool(statArr1[8]).text());
}
