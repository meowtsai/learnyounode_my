const fs = require("fs");

module.exports = function(path, file_type, callback) {
  let return_list=[];

  fs.readdir(path, function(err, data){
    if (err) {
      return  callback(err);
    }
    data.forEach((item) =>{
      let x = item.split('.');
      if ((x[x.length-1] == file_type) && (x.length != 1))
      {
        return_list.push(item);
      }
    });
    return callback(null, return_list);
  });
}
