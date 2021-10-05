// program to write 8 files asyncronously  ? or parllely write 8 files ?

let fs = require("fs");

function callback(filenumber, err, data) {
    console.log(filenumber, "file written succesfuly..");
    let arrayOfData = data.split("\n");
    // console.log(arrayOfData);
    for(let val of arrayOfData) {
        answer += parseInt(val);
    }

    readFile(filenumber + 1);
}

let answer = 0;
function readFile(filenumber, err, data) {
    if(filenumber == 9) {
        console.log(answer);
        return;
    }
    
    fs.readFile(filenumber + ".txt", "utf-8", callback.bind(this, filenumber));
}
readFile(1);


