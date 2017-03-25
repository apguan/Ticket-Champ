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
    var apiResListSend = [];
    var compareResArr = [];
    var apiErrorFlag = false;

    ticketMasterAPI.queryTicketMasterForEvent(ticketMasterAPI.ticketmasterData, userInput, function(err, data) {
      // console.log("this is the event id ", ticketMasterAPI.ticketmasterData.id)
      if(err) {
        console.log('Error on query', err);
      } else {
        var tmResponse = ticketMasterAPI.ticketmasterData;

        //Check for error in TM API res
        if (tmResponse.id === null) {
          apiErrorFlag = true;
          apiResCount++;
        } else if (tmResponse.id !== null) {
        // Add TM api res objects to client res
          apiResListSend.push(tmResponse);
          compareResArr.push(tmResponse);
          apiResCount++;
        //SAVE TM TO DB
          db.addTicketMasterToDataBase(ticketMasterAPI.ticketmasterData);
        }

       //SEND COMPILED RES WHEN ALL API's RESPOND
       if (apiResCount === 2 || apiErrorFlag) {
          console.log('tm api error', apiErrorFlag)

          var apiComboResults = [];
          apiComboResults.push(apiResListSend);
          apiComboResults.push(compareResArr);

          if (apiErrorFlag) {
            apiComboResults.push(false);
          } else {
            apiComboResults.push(true);
          }

          console.log('SEND API RES TM TRUE/FALSE SEND OPPOSITE TO CLIENT', apiErrorFlag);
          res.end(JSON.stringify(apiComboResults))
        }

      }
    });

    seatGeekAPI.seatGeekGetter(userSearch, userLocation, function(err, results) {

      var tmResponse = ticketMasterAPI.ticketmasterData;

      if (err) {
        console.log(err)
      } else {
        var sgAPIarr = results;

        if (sgAPIarr.length === 0) {
        // Check for SG Api errors, change flag if error
          apiErrorFlag = true;
          apiResCount++;
        } else {
        // Add SG api res upcoming events to client res
          sgAPIarr.forEach(function(item) {
            apiResListSend.push(item);

            if (item.date === tmResponse.date) {
              compareResArr.push(item)
            }
          });

          //IF TM HAS ERROR + SG HAS NO ERROR --> SEND FIRST SG RESULT
          if (tmResponse.id === null && sgAPIarr.length) {
              compareResArr.push(sgAPIarr[0])
          }

          apiResCount++;
        }

        //SEND RES WHEN ALL API's RESPOND
        if (apiResCount === 2 || apiErrorFlag) {
          console.log('sg api error', apiErrorFlag)
          var apiComboResults = [];
          apiComboResults.push(apiResListSend);
          apiComboResults.push(compareResArr);

          if (apiErrorFlag) {
            apiComboResults.push(false);
          } else {
            apiComboResults.push(true);
          }

          console.log('SEND API RES SG TRUE/FALSE SEND OPPOSITE TO CLIENT', apiErrorFlag);
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
