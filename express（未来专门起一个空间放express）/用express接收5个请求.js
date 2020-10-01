var url = require('url');
var querystring = require('querystring');
var express = require('express');
var app = express();
var util = require('util');
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
app.use(bodyParser.json());//post json支持
app.use(bodyParser.urlencoded({//post FormUrlencoded支持
  extended:true
}));

//跨域头部
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

app.get('/testGet', function (req, res) {
  var params = url.parse(req.url, true).query;
  console.log(params);
  res.send(JSON.stringify(params));
})

app.post('/testPostJson', function (req, res) {
  console.log(req.body)
  res.end(JSON.stringify(req.body));
})

app.post('/testPostFormUrlencoded', function (req, res) {
  console.log(req.body)
  res.end(JSON.stringify(req.body));
})

app.post('/testPostFormData',multipartMiddleware, function (req, res) {
  console.log(req.body)
  res.end(JSON.stringify(req.body));
})

var server = app.listen(8081, function () {
  
  var host = server.address().address
  var port = server.address().port
  
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
  
})
