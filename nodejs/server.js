
var http = require('http');


// create a server object
http.createServer(function(req,res) {
  res.write("hello world!,nodejs ");
  res.end();
  
}).listen(3001,()=>{console.log("server is running on port 3001");});// the server object listens on port 




