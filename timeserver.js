var net = require('net')
const port = process.argv[2];

var server = net.createServer(function (socket) {
  // socket handling logic
  let date = new Date();
  let year = date.getFullYear();
  let month = (date.getMonth()==12? 1 :date.getMonth()+1);
  let day = ('0' + date.getDate()).slice(-2);
  let hour =('0' + date.getHours()).slice(-2);
  let min = ('0' + date.getMinutes()).slice(-2);

  data = `${year}-${month}-${day} ${hour}:${min}`
  socket.write(data);
  socket.end("\n");
})
server.listen(port)
