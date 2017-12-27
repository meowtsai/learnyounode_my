
const fs = require("fs");
//const filename = "./index.html";
const filename = process.argv[2];

fs.readFile(filename, "utf8", function(err, data) {
    if (err) throw err;
    let result = data.split('\n').length - 1;
    console.log(result);
});
