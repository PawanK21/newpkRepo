let fs = require('fs');
let path = require('path');

let content = fs.readFileSync('f1.txt', 'utf-8'); // 'utf-8' help us to understand unicode text
// console.log(content);
// console.log(`${content}`);

// fs.writeFileSync('abc.txt', "Hakunama tata");
// fs.appendFileSync('abc.txt', ' timon and pumba'); // 'abc.txt' file will create and 'timon and pumba' will be written in the 'abc.txt' file
// fs.unlinkSync('abc.txt'); // it will delete the 'abc.txt' file 

// *************Directories ***************  
// ***** to make the folder ****** 
// fs.mkdirSync('pathModule');

// ******** to delete the folder *******
// fs.rmdirSync('pathModule');

//******* */ to check the file exists or not ? *******
let existornot = fs.existsSync('fs1.js');
// console.log(existornot);

// ****** statusObj is file/folder *******
let statusObj = fs.lstatSync("f1.txt");
// console.log(statusObj);
// console.log(statusObj.isFile());
// console.log(statusObj.isDirectory());

// ******* to read the 'files' of any 'folder' *********
let fileArr = fs.readdirSync('D:/js tutorial/pp14/fileOrganizer/dir');
// console.log(fileArr);


// ***** fs.copyFileSync(srcPath, destPath) *****
let srcPath = 'D:/js tutorial/pp14/fileOrganizer/fsModule/f1.txt';
let destPath = 'D:/js tutorial/pp14/fileOrganizer/fsModule/f2.txt';

let toBeCopiedFileName = path.basename(destPath);
let dest = path.join('D:/js tutorial/pp14/fileOrganizer/dir', 'abc.txt')
console.log(dest);
fs.copyFileSync(destPath, dest);

// will continue at 2:40:46 ...