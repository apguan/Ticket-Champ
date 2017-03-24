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

    var userSearch = userInput.event;
    var userLocation = userInput.location;

    var apiResCount = 0;
    var tmResponse;
    var apiResListSend = [];
    var compareResArr = [];

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

            // console.log(ticketMasterAPI.ticketmasterData)
            tmResponse = ticketMasterAPI.ticketmasterData;

            apiResListSend.push(tmResponse);
            compareResArr.push(tmResponse);
            apiResCount++;
            // console.log('tmAPI SUCCESS', tmResponse);
            console.log('tmAPI SUCCESS ----------------------------------->')

          //SEND RES WHEN ALL API's RESPOND
           if (apiResCount === 2) {
              var apiComboResults = [];
              apiComboResults.push(apiResListSend);
              apiComboResults.push(compareResArr)
              // console.log('API RES PRAY THIS WORKS', apiComboResults);
              res.end(JSON.stringify(apiComboResults))
            }

          //SAVE TM TO DB
            db.addTicketMasterToDataBase(ticketMasterAPI.ticketmasterData);
          }
        })
      }
    });

    seatGeekAPI.seatGeekGetter(userSearch, userLocation, function(err, results) {
        if (err) {
          console.log(err)
        } else {
          var sgAPIarr = results;

          sgAPIarr.forEach(function(item) {
            apiResListSend.push(item);

            var tmResponse = ticketMasterAPI.ticketmasterData;
            if (item.date === tmResponse.date) {
              compareResArr.push(item)
            }
          });

          apiResCount++;

          //SEND RES WHEN ALL API's RESPOND
          if (apiResCount === 2) {
            var apiComboResults = [];
            apiComboResults.push(apiResListSend);
            apiComboResults.push(compareResArr)
            console.log('API RES PRAY THIS WORKS', apiComboResults);
            res.end(JSON.stringify(apiComboResults))
          }
        }
      })

  })
});


app.get('/home', function(req, res) {

  db.getTopThreeTrending(function (err, results) {
    if(err) {
      console.log('err heppend server side');
    } else {
      console.log('sending results')
      res.send(results);
    }
  })
});

app.listen(port, function(){
  console.log('listening on', port);
});
