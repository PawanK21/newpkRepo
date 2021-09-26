const request = require('request');
// request -> object
request('http://www.pepcoding.com', cb);//print the HTML for the google homepage
const cheerio = require('cheerio');
request('https://www.worldometers.info/coronavirus/', cb);

function cb(err, response, html) {
  // console.log('error', err);
  // console.log('statusCode', response && response.statusCode); //print the reponse status code if the response4 was received

  // console.log('body', body);

  if(err) {
    console.log('error', error);//print the error if one occured
  }
  else {
    extractHTML(html);
  }

};

function extractHTML(html) {
  let selectorTool = cheerio.load(html);
  let statsArr = selectorTool('.col-md-8');

  //console.log(statsArr);
  // console.log(statsArr.length);
  for(let i =0; i<statsArr.length; i++) {
    let data = selectorTool(statsArr[i]).text();
    console.log(data);
  }
}