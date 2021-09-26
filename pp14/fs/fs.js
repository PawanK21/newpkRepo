
// Import 'fs' using require() method
const fs = require("fs");

// fs.readFileSync(path, data, optional)
   /* optional-> encoding (utf-8) bydefault
              -> mode and
              -> flag
 */
// console.log(fs.readFileSync("a.txt", "utf-8"));
// console.log(fs.existsSync("a.txt"));
// console.log(fs.existsSync("b.txt"));

// fs.writeFileSync(path, data);
// fs.writeFileSync("a.txt", "how are you ?");
// fs.writeFileSync("b.txt", "hello my name is pawan");


// console.log(process.argv);
// console.log(process.argv[2].split(" "));

// process.argv[2].split(" ");

// To append a.txt data into b.txt file
let file1name = process.argv[2];
let file2name = process.argv[4];

// console.log(file1name);
// console.log(file2name);
let file1data = fs.readFileSync(file1name, "utf-8");
let file2data = fs.readFileSync(file2name, "utf-8");
console.log(file1data + "\n" + file2data);