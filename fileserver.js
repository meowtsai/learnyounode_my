const fs = require("fs");
var http = require('http')
const port = process.argv[2];
const file_path = process.argv[3];

var server = http.createServer(function (req, res) {
       let rstream = fs.createReadStream(file_path);
       rstream.pipe(res);
     })
     server.listen(port)
