const request = require('request');
const cheerio = require('cheerio');
const chalk = require('chalk');
const fs = require('fs');

request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard', requestCallBack);

 let batsmanProfileUrls = [];

function requestCallBack(err, res, html) {
  // fs.writeFileSync("temp.html", html);
  const $ = cheerio.load(html);
  const batsmanAnchorTags = $(".batsman-cell a");
 
  for(let i =0; i<batsmanAnchorTags.length; i++) {
    batsmanProfileUrls.push({
      name: $(batsmanAnchorTags[i]).text(),
      url: "https://www.espncricinfo.com" + $(batsmanAnchorTags[i]).attr('href')
    })
  }
  // console.log(batsmanProfileUrls);
  for(let obj in batsmanProfileUrls) {
    request(batsmanProfileUrls[obj].url, fatchDateOfBirth.bind(this, obj)); // request -> is the asynchronous method
  }
  
}
let count = 0;
function fatchDateOfBirth(index, err, res, html) {
  count++;
  const $ = cheerio.load(html);
  const playerDateOfBirth = $($('h5.player-card-description.gray-900')[1]).text();
  // console.log(playerDateOfBirth);
  // console.log(index);
  batsmanProfileUrls[index]['DOB'] = playerDateOfBirth.split(',')[0].split(' ')[1]+ " "+ playerDateOfBirth.split(',')[0].split(' ')[0] + " " + playerDateOfBirth.split(',')[1];
  if(count == batsmanProfileUrls.length) {
    // console.log(batsmanProfileUrls);
    console.log(`${chalk.green('Name') + "            :           " + chalk.yellow('DOB')}`);
    console.log(chalk.redBright('----------------------------------'));
    for(let obj of batsmanProfileUrls) {
      console.log(chalk.green(obj.name) + chalk.blue(" : ") + chalk.yellow(obj.DOB));
    }
  }
}

