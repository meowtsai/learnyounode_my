const a = require('./mymodule.js');
const path = process.argv[2];
const file_type = process.argv[3];


a(path, file_type , function(err, data){
  if (err) {
    console.log("errors:" + err);
    return;
  }
  data.forEach((item) =>{
      console.log(item);
  });

})
