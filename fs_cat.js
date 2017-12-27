
const fs = require("fs");
//const filename = "./index.html";
const filename = process.argv[2];
let buf = fs.readFileSync(filename, "utf8");
let arr = buf.split('\n');
console.log(arr.length-1);
