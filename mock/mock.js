var http = require('http'); 
var express = require('express');
var router = express.Router();
var app = express();
var mocks = [require('./mocks/test'),require('./mocks/test.1')];

// respond with "hello world" when a GET request is made to the homepage
// app.get('/a', function(req, res) {
//   res.send('hello world');
// }); 
app.use('/rest', mocks);

var hostname = '127.0.0.1';  
var port = 3000;  
http.createServer(app).listen(port,hostname,function(){
    console.log('Server running at http://%s:%s', hostname, port);  
});