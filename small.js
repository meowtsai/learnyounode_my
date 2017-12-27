let date = new Date();

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
//
// console.log(date.getMinutes());


let year = date.getFullYear();
let month = (date.getMonth()==12? 1 :date.getMonth()+1);
let day = ('0' + date.getDate()).slice(-2);
let hour =('0' + date.getHours()).slice(-2);
let min = ('0' + date.getMinutes()).slice(-2);

console.log( `${year}-${month}-${day} ${hour}:${min}`);


//let stringA = "abcd";
//console.log(('0' + stringA).slice(-2));
