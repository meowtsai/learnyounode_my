
const fs = require("fs");
//const filename = "./index.html";
const path = process.argv[2];
const file_type = process.argv[3];
// no such file or directory, scandir 'D:\\Projects\\mytest\\node_proj\\learnyounode\\Projectsmytestnode_projlearnyounode'


fs.readdir(path, function(err, data){
  if (err) {
    console.log("errors:" + err);
    return;
  }
  data.forEach((item) =>{
    let x = item.split('.');
    if ((x[x.length-1] == file_type) && (x.length != 1))
    {
      console.log(item);
    }
  });

})
