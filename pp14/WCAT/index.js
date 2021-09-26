#!/usr/bin/env node


const fs = require("fs");
// console.log(process.argv);
let arguments = process.argv.slice(2);
console.log(arguments);

// fs.writeFileSync("c.txt", "Hello World !");
// fs.writeFileSync("c.txt", "hello world !");


let flags =[];
let filenames = [];
let secondaryArguments = [];
for(let i of arguments){
  if(i[0] == '-') {
    flags.push(i);
  }else if(i[0] == "$"){
    secondaryArguments.push(i.slice(1));
  } else {
    filenames.push(i);
  }
}

// if(flags.length == 0 && filenames.length != 0){
//   for(let file of filenames){
//     console.log(fs.readFileSync(file, "utf-8"));
//   }
// } else {
//   for(let flag of flags){
//     if(flag == "-rs"){   // '-rs' : remove spaces
//       for(let file of filenames){
//         let fileData = fs.readFileSync(file, "utf-8");
//         // let fileDataArray = fileData.split(" ").join("");
//         // console.log(fileDataArray);
//         console.log(fileData.split(" ").join(""));
//       }
//     }
//   }
// }


// // // OPTIMIZED WAY
for(let file of filenames){
  let fileData = fs.readFileSync(file, "utf-8");
  // console.log(fileData);
  for(let flag of flags){
    if(flag == "-rs"){ // '-rs': remove spaces
      // fileData = fileData.split(" ").join("");
      fileData = removeAll(fileData, " ");
    }
    if(flag == "-rn"){// '-rn': remove new line character
      // fileData = fileData.split("\r\n").join("");
      fileData = removeAll(fileData, "\r\n");
    }
    if(flag == "-rsc"){// '-rsc': remove special character
      // let tempString = "";
      // for(let character of fileData) {
      //   if(character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90 || character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122){
      //     tempString += character;
      //   }
      // }
      // fileData = tempString;
      for(let secondaryArgument of secondaryArguments){
        fileData = removeAll(fileData, secondaryArgument);
      }
    }
    // if(flag == "-w"){
    //   fileData = `${fileData +" "+ "objects"}`;
    //   fs.writeFileSync('c.txt', fileData);
    // }
    if(flag == "-s"){
      addSequence(fileData);
    }
    if(flag == "-sn"){
      addSequenceTnel(fileData);
    }
    if(flag == "-rel") {
      let ans = removeExtraLine(fileData);
      for(let i of ans){
        console.log(i);
      }
    }

  }
  // console.log(fileData);
}

function removeExtraLine(fileData) {
  let fileDataArr = fileData.split("\r\n");
  let data  = [];
  for(let i of fileDataArr) {
    if(i != "") {
      data.push(i);
    }
  }
  return data;
}

function removeAll(string, removeallData){
  return string.split(removeallData).join("");
}

function addSequence(fileData) {
  let i = 1;
  let numFileDataArr = fileData.split("\r\n");
  for(let j of numFileDataArr) {
    console.log(i++ +". " + j);
  }
}

function addSequenceTnel(fileData) {
  let i = 1;
  let numFileDataArr = fileData.split("\r\n");
  for(let j of numFileDataArr) {
    if(j !== "") {
      console.log(i + ". " + j);
      i++;
    }
  }
}



// let inappfile = filenames.pop(); // a.txt
// // console.log(inappfile);
// // console.log(filenames);
// let inappfileData = undefined;
// for(let file of filenames){
//   inappfileData = fs.readFileSync(inappfile, "utf-8"); // a.txt data  
//   //  console.log(inappfileData);
//   let fileData = fs.readFileSync(file, "utf-8"); // first b.txt then, c.txt file data
//   //  console.log(fileData);
//   for(let flag of flags){
//     if(flag == '-w'){
//       inappfileData = inappfileData + " " + fileData;
//       fs.writeFileSync("inappfle", inappfileData);
//     }
//   }
//   console.log(inappfileData);
// }
// console.log(inappfileData);// appfileData




// console.log(process.argv.slice(2));
// let cntline = 0;
// let cntword = 0;
// //count line function
// function countLine(fileData){
//    cntline = fileData.split("\n").length;
//    return cntline;
// }

// count word function
// let countWord = (fileData) => {
//   let lsd = fileData.split("\n");
//   for(let d of lsd) {
//     cntword += d.split(" ").length;
//   }
//   return cntword;
// }

// let fileData = fs.readFileSync("a.txt", "utf-8");
// console.log(countLine(fileData));
// console.log(countWord(fileData));

// // To check the number of files in the 
// let folderPath = "D:/c++ programs";
// let cnt = 0;
// fs.readdirSync(folderPath).forEach((file) => {
//   cnt++;
// })
// console.log(cnt);
