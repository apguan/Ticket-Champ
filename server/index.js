var express = require('express');
var mysql = require('mysql');
var request = require('request');
var dbModel = require('./models/dbModels.js');
var seatGeekAPI = require('./controllers/seatgeekController.js');
var ticketMasterAPI = require('./controllers/ticketMasterController.js');

var app = express();
app.use(express.static(__dirname + '/../client/dist'));

app.post('/event', function(req, res) {
  var body = '';
  req.on('data', function(chunk) {
    data += chunk
  })
  req.on('end', function() {
    var userInput = body;
    console.log('Post Request ', userInput);
  })
})

app.get('/home', function(req, res) {
  console.log('Get Request Recieved!')
});


var port = 8080;

app.listen(port, function() {
  console.log('Listening on port ' + port + '!');
})