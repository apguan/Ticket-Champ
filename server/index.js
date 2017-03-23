var express = require('express');
var mysql = require('mysql');
var db = require('./db/index.js');
var path = require('path');
var request = require('request');
var dbModel = require('./models/dbModels.js');
var seatGeekAPI = require('./controllers/seatgeekController.js');
var ticketMasterAPI = require('./controllers/ticketMasterController.js');
var dataParser = require('./utilities/dataParser.js');


var port = process.env.PORT || 5000;


var app = express();
// console.log('WHERE IS THIS SHIT', __dirname + '../client/dist/')
app.use(express.static(path.join(__dirname, '../client/dist/')));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
})

app.post('/event', function(req, res) {
  var body = '';
  req.on('data', function(chunk) {
    body += chunk;
  })
  req.on('end', function() {
    var userInput = JSON.parse(body);
    console.log('Post Request ', userInput);

    var tempStore = [];
    seatGeekAPI.seatGeekGetter(seatGeekAPI.seatGeekData, userInput.event, userInput.location, function(err, results) {
      if (err) {
        console.log(err)
      } else {

        tempStore.push(results)
        console.log(tempStore)

        ticketMasterAPI.queryTicketMasterForEvent(ticketMasterAPI.ticketmasterData, userInput, function(err, data) {
          // console.log("this is the event id ", ticketMasterAPI.ticketmasterData.id)
          if(err) {
            console.log('Error on query', err);
          } else {
            ticketMasterAPI.queryTicketMasterForPrices(ticketMasterAPI.ticketmasterData, ticketMasterAPI.ticketmasterData.id, function(err, data2) {
              if(err) {
                console.log('Error in Ticket Master Price query', err);
              } else {
                ticketMasterAPI.ticketmasterDataParser(ticketMasterAPI.ticketmasterData, JSON.parse(data2));

                db.addTicketMasterToDataBase(ticketMasterAPI.ticketmasterData);
                // console.log(ticketMasterAPI.ticketmasterData)

                var tmResponse = ticketMasterAPI.ticketmasterData;

                var arrayToClient = [];
                var comparisonArray = [];
                arrayToClient[0] = tmResponse;
                comparisonArray[0] = tmResponse;
                // var result = JSON.parse(JSON.stringify(results));
                for (var i = 0; i < tempStore.length; i++) {
                  arrayToClient.push(tempStore[i]);
                  if (tempStore[i].date === tmResponse.date) {
                    comparisonArray.push(tempStore[i]);
                  }
                }

                var sendToClient = [];
                sendToClient.push(arrayToClient);
                sendToClient.push(comparisonArray);
                console.log("LAST ITEM IN RES", sendToClient);

                res.end(JSON.stringify(sendToClient));
              }
            })
          }
        });
        // db.addTicketMasterToDataBase(results);
      }
    })
        //ticket master api query with
  })
})



app.get('/home', function(req, res) {
  // console.log('Get Request Recieved!')
  // res.end(JSON.stringify(fakeRes))

  // console.log('Get Request Recieved!');

  db.getTopThreeTrending(function (err, results) {
    if(err) {
      console.log('err heppend server side');
    } else {
      console.log('sending results')
      res.send(results);
    }
  })


});

//changed port
app.listen(port, function(){
  console.log('listening on', port);
});
