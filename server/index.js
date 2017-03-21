var express = require('express');
var mysql = require('mysql');
var db = require('./db/index.js');
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

//seatgeek api query
app.post('/findtickets', function(req, res) {
  seatGeekAPI.seatGeekGetter()

})

//ticket master api query with

ticketMasterAPI.queryTicketMasterForEvent(ticketMasterAPI.ticketmasterData, 'lady gaga', function(err, data) {
  console.log(data)
  if(err) {
    console.log('Error on query', err);
  } else {
    ticketMasterAPI.queryTicketMasterForPrices(ticketMasterAPI.ticketmasterData, data, function(err, data2) {
      if(err) {
        console.log('Error in Ticket Master Price query', err);
      } else {
        ticketMasterAPI.ticketmasterDataParser(ticketMasterAPI.ticketmasterData, JSON.parse(data2))
        console.log(ticketMasterAPI.ticketmasterData)
      }
    })
  }
});

 var fakeRes= [{
      url: 'http://static.highsnobiety.com/wp-content/uploads/2016/06/14133513/kanye-west-saint-pablo-tour-00.jpg',
      highPrice: 6000,
      lowPrice: 1000,
      averagePice: 2500,
      venueName: 'Kanye West',
      id: '1AvbZfNGkMpReIg',
      date: '2017-11-20',
      apiId: 0,
      city: 'Chicago',
      venueLocation: 'United Center',
      state: 'IL'
    },
    {
      url: 'https://static1.squarespace.com/static/53682257e4b05b7433d5758f/539a532ae4b0f5b6f0a50361/539a532be4b0377ac69271ee/1402622764232/Kaskade.jpg',
      highPrice: 2000,
      lowPrice: 200,
      averagePice: 900,
      venueName: 'Kaskade ',
      id: '1AvbZfNGkMpReIg',
      date: '2017-11-20',
      apiId: 0,
      city: 'San Francisco',
      venueLocation: 'Bill Graham Auditorium',
      state: 'CA'
    },
    {
      url: 'http://static.stereogum.com/uploads/2014/09/Jeezy.jpg',
      highPrice: 1488.75,
      lowPrice: 46,
      averagePice: 381,
      venueName: 'Young Jeezy',
      id: '1AvbZfNGkMpReIg',
      date: '2017-11-20',
      apiId: 0,
      city: 'Los Angeles',
      venueLocation: 'Fonda Theater',
      state: 'LA'
    }]

app.post('/event', function(req, res) {
  var body = '';
  req.on('data', function(chunk) {
    body += chunk
  })
  req.on('end', function() {
    var userInput = body;
    console.log('Post Request ', userInput);
    res.end(JSON.stringify(fakeRes[0]));
  })
})

app.get('/home', function(req, res) {
  console.log('Get Request Recieved!')
  res.end(JSON.stringify(fakeRes))
});

//changed port
app.listen(port, function(){
  console.log('listening on', port);
});
