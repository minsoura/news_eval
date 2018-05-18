var express = require('express');
var request = require('request');
var qs = require('querystring');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');

// create server
var app = express();

// allow CORS request
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'static')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var zmq = require('zeromq');

app.get('/proxy/sa/:searchTerm', (req, res) => {
  var requester = zmq.socket('req');
  var QUERY =   req.params.searchTerm; // not using 'escape function';
  requester.connect("tcp://192.168.182.195:5555");
  requester.send(QUERY.toString());
  requester.on("message", function(reply){
    console.log("receiver: ", reply.toString());
    res.send(reply.toString());
  });
});


app.listen(11111, function() {
  console.log("Server Running at lcoalhost:11111");
});
