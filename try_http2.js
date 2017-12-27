const http = require("http");
const url = process.argv[2];
//const url = "http://tencent.rooster-designs2.com/data/querycmpjson.php";

http.get(url, function(res){
  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk;  });
  res.on('end', () => {
    try {
      //const parsedData = JSON.parse(rawData);
      console.log(rawData.length);
      console.log(rawData);
    } catch (e) {
      console.error(e.message);
    }
  });}
).on('error', (e) => {
console.error(`Got error: ${e.message}`);
});
