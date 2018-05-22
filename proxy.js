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

// allow CORS request



// navbar request
app.get('/proxy/mongo/:searchTerm', (req, res) => {
  var QUERY =   req.params.searchTerm; // not using 'escape function';

  console.log(QUERY);
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://192.168.182.195:3004/test'";

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("news_eval");
    dbo.collection("companies_of_ints").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result.name);
      db.close();
      res.send(result + result);
    });
  });
});





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


app.listen(10101, function() {
  console.log("Server Running at localhost:9999");
});
