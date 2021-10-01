const request = require("request");
const cheerio = require("cheerio");
const fs = require('fs');
request(
  "https://github.com/topics",
  requestCallback
);

let gitTopics = [];
function requestCallback(err, res, html) {
  const $ = cheerio.load(html);

  let topicUrlAnchorTags= $('.no-underline.d-flex.flex-column.flex-justify-center');
 
  // let topicUrls = [];
  for(let i =0 ; i < topicUrlAnchorTags.length; i++) {
   //  topicUrls.push( 
   //    "https://www.github.com" + $(topicUrlAnchorTags[i]).attr('href'));
   let topicUrl = 
   "https://www.github.com" + $(topicUrlAnchorTags[i]).attr('href');

   
   gitTopics.push({
     "topicUrl": topicUrl,
     "repos": []
   })

   request(topicUrl, fetchRepo.bind(this, i));
  }
  // console.log(topicUrls);
}

let topicCount = 0;
let repoCount = 0;
let totalRepo = 0;

function fetchRepo(index, err, res, html) {
  topicCount++;
  const $ = cheerio.load(html);
  
  let repoAnchorTags = $('.wb-break-word.text-bold');

  totalRepo += repoAnchorTags.length < 8 ? repoAnchorTags.length : 8;
  for(let i = 0; i < 8 && i < repoAnchorTags.length; i++) {
    let repoUrl = "https://www.github.com" + $(repoAnchorTags[i]).attr('href');
    gitTopics[index].repos.push({
      "repoUrl": repoUrl,
      "issues": []
    })

    request(repoUrl + "/issues", fetchIssues.bind(this, index, i));
  }

  // if(topicCount == 3) {
  //   fs.writeFileSync('temp.json', JSON.stringify(gitTopics));
  // }
}


function fetchIssues(topicIndex, repoIndex, err, res, html) {
  repoCount++;
  const $ = cheerio.load(html);
  let issuesAnchorTags = $('.Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title');
  for(let i = 0; i<8 && i<issuesAnchorTags.length; i++) {
    let issuesUrl = "https://www.github.com" + $(issuesAnchorTags[i]).attr('href');
    let isssuesName = $(issuesAnchorTags[i]).text();

    gitTopics[topicIndex].repos[repoIndex].issues.push({
      "issueUrl": issuesUrl,
      "issueName": isssuesName
    })
  }

  if(topicCount == 3 && repoCount == totalRepo) {
    fs.writeFileSync('temp.json', JSON.stringify(gitTopics));
  }
}
