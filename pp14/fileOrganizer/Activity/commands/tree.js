// folderpath -> file/folder traverse
// unhen print kra do
//simple
// -> assignment recursion

let fs = require('fs');
let path = require('path');
// "|__"
// "|--"
function treeFn(srcpath) {
  // console.log(srcpath);
  // let baseName = path.basename(srcpath);
  // console.log(baseName);
  // console.log("")
  let content = fs.readdirSync(srcpath); // all files of the 'Files' folder
  console.log(content); // array of the files of the 'Files'
  let allEntities = "";
  for(let i = 0; i<content.length; i++){
    allEntities += '\n\t |-- ' + content[i];
    // console.log(content[i]);
  }
  console.log(allEntities); // string tree of the all files in 'Files' folder
}

module.exports  = {
  treeFn: treeFn
}