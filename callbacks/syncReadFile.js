// program to read 8 files syncronously using async function and callback function and return the sum of all 8 files

let fs = require("fs");

let answer = 0;
function callback(filenumber, err, data) {
  console.log(filenumber, "file written succesfuly..");

  let arrayOfFilesData = data.split("\n");
  //   console.log(arrayOfFilesData);
  for (let val of arrayOfFilesData) {
    answer += parseInt(val);
  }
  if (filenumber == 8) {
      console.log(answer);
    return;
  }
  readFile(filenumber + 1);
}

function readFile(filenumber) {
  fs.readFile(filenumber + ".txt", "utf-8", callback.bind(this, filenumber));
}

readFile(1);


