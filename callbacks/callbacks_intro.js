const fs = require("fs");

function callBacks(i) {
    console.log(i + "file wirtten successfully");
}
fs.writeFile("temp.txt", "temp", callBacks.bind(this, 1));
fs.writeFile("temp1.txt", "tmepHello", callBacks.bind(this, 2));