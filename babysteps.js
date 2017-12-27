// print process.argv
let arr = [];
arr = ['node'];
arr.push(process.argv[1]);
//arr.push("D:Projeceps.js");
let _sum = 0;
process.argv.forEach((val, index) => {

  if (index>=2)
  {
    _sum += Number(val);
    arr.push(val);
  }

  //console.log(`${index}: ${val}`);
});

arr.push(String(_sum));

console.log(_sum);
