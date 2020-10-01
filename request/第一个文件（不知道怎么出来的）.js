var http = require('http');
var url = require('url');

var port = 10011;

const server = http.createServer((req, res)=>{
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  
  var params = url.parse(req.url, true);
  console.log(req,'req')
  console.log(params,'params')
  res.end(`
       <head>
        <meta charset="UTF-8">
        <title>Title1</title>
       </head>
    `)
})
let i=0
server.listen(port, function () {
  console.log(i++,'i');
  // console.log('server is listening on port ' + port);
})
