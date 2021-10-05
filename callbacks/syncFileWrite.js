// program to write 8 files syncronously using async function and callback function

let fs = require("fs");

function callback(filenumber) {
  console.log(filenumber, "file written succesfuly..");
  if (filenumber == 8) {
    return;
  }

  writeFile(filenumber + 1);
}

function writeFile(filenumber) {
  let numberOfLines = ganerateRandomNumber();
  let string = "";
  for (let i = 0; i < numberOfLines; i++) {
    string += ganerateRandomNumber() + (i != numberOfLines - 1 ? "\n" : "");
  }

  fs.writeFile(
    filenumber + ".txt",
    string,
    callback.bind(this, filenumber)
  );
}

writeFile(1);

function ganerateRandomNumber() {
  return Math.ceil(Math.random() * 100);
}
