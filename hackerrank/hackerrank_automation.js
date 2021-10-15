let minimist = require("minimist");
let fs = require("fs");
let puppeteer = require("puppeteer");

let args = minimist(process.argv);
let configJSON = fs.readFileSync(args.config, "utf-8");
let config = JSON.parse(configJSON);
console.log(config);


