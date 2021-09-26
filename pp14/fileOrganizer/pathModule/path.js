let path = require('path');
let fs = require('fs');

let inputArr = process.argv.slice(2);
// console.log(inputArr);

let fileName = inputArr[0];
let content = inputArr[1];

// console.log('fileName', fileName);
// console.log('content', content);

// *** To access the path of the current directory ***
let currentPath = process.cwd();
// console.log(currentPath);  // ouput: D:\js tutorial\pp14\fileOrganizer\pathModule

// *** To join two file paths ***
let joinedPath = path.join(currentPath, 'directoryName', 'fileName.txt');
// console.log(joinedPath);// ouput: D:\js tutorial\pp14\fileOrganizer\pathModule\directoryName\fileName.txt

// *** To print the base name of the current file ***
let file = path.basename('D:/js tutorial/pp14/fileOrganizer/pathModule/path.js');
// console.log(file);

let extName = path.extname('D:/js tutorial/pp14/fileOrganizer/pathModule/path.js');
console.log(extName);