var express = require('express');
var mysql = require('mysql');
var path = require('path');
var request = require('request');
var dbModel = require('./models/dbModels.js');
var seatGeekAPI = require('./controllers/seatgeekController.js');
var ticketMasterAPI = require('./controllers/ticketMasterController.js');

var port = process.env.PORT || 5000;

var app = express();
// console.log('WHERE IS THIS SHIT', __dirname + '../client/dist/')
app.use(express.static(path.join(__dirname, '../client/dist/')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"))
})
// app.use('/', express.static())

app.post('/event', function(req, res) {
  var body = '';
  req.on('data', function(chunk) {
    body += chunk
  })
  req.on('end', function() {
    var userInput = body;
    console.log('Post Request ', userInput);
  })
})

app.get('/home', function(req, res) {
  console.log('Get Request Recieved!')
});

//changed port
app.listen(port, function(){
  console.log('listening on', port);
});
