// program to write 8 files asyncronously  ? or parllely write 8 files ?

let fs = require("fs");

function callback(filenumber) {
    console.log(filenumber, "file written succesfuly..");
}

function writeFile(filenumber) {
    if(filenumber == 9) {
        return;
    }
    let numberOfLines = ganerateRandomNumber();
    let string = "";
    for(let i = 0; i<numberOfLines; i++) {
        string += ganerateRandomNumber() + ((i != numberOfLines - 1) ? "\n" : "");
    }
    fs.writeFile("new"+ filenumber + ".txt", string, callback.bind(this, filenumber));
    writeFile(filenumber + 1);
}
writeFile(1);

function ganerateRandomNumber() {
    return Math.ceil(Math.random() * 100);
}
