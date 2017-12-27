const http = require("http");
const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];
//const url = "http://tencent.rooster-designs2.com/data/querycmpjson.php";
let myArray = [];

myGet(url1,1);
myGet(url2,2);
myGet(url3,3);

let intX = 0;
function myCheck(data, num)
{
  myArray[num-1] = data;
  intX++;

  if (intX == 3)
  {
    myArray.forEach((item) => {
        console.log(item);
    });

  }
}

function myGet(url, num) {
  http.get(url, function(res){
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk;  });
    res.on('end', () => {
      try {
        myCheck(rawData,num);

        //console.log("num=" + num);
      } catch (e) {
        console.error(e.message);
      }
    });}
  ).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
  });

}
