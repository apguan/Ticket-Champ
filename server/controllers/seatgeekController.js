var request = require('request');
var apiKey = require('../../apiKeys.js')

var seatGeekData = {
  url: null,
  highPrice: null,
  lowPrice: null,
  averagePrice: null,
  venueName: null,
  date: '',
  apiId: 1,
  city: null,
  venueLocation: null,
  state: null,
  eventUrl: null,
  searchParam: '',
};

var sgHelper = function(sgAPIresArr, searchParam, cb) {
  var dataObj = {};

  for (var i = 0; i < sgAPIresArr.events.length; i++){

    dataObj.venueName = sgAPIresArr.events[i].title;
    dataObj.highPrice = sgAPIresArr.events[i].stats.highest_price;
    dataObj.lowPrice = sgAPIresArr.events[i].stats.lowest_price;
    dataObj.averagePrice = sgAPIresArr.events[i].stats.average_price;
    dataObj.date = sgAPIresArr.events[i].datetime_local;
    dataObj.city = sgAPIresArr.events[i].venue.city;
    dataObj.state = sgAPIresArr.events[i].venue.state;
    dataObj.venueLocation = sgAPIresArr.events[i].venue.name;
    dataObj.eventUrl = sgAPIresArr.events[i].url;
    dataObj.url = sgAPIresArr.events[i].performers[0].image;
    dataObj.id = sgAPIresArr.events[i].performers[0].id;
    dataObj.apiId = 1;
    dataObj.searchParam = searchParam.toLowerCase();

    cb(null, dataObj);
    dataObj = {};
  }
}

var seatGeekGetter = function(searchParam, location, callback) {

  var sgParsedRes = [];
  // console.log('SG LOC', location)
  // console.log('SG EVENT', searchParam)

  var searchEventApiParsed = encodeURIComponent(searchParam);
  var searchLocationApiParsed = encodeURIComponent(location);

  var queryString = 'https://api.seatgeek.com/2/events?q=' + searchEventApiParsed +'&per_page=100&venue.city=' + searchLocationApiParsed + '&range=100mi&client_id=' + apiKey.api.seatGeekAPI;

  request(queryString, function (error, response, body) {
    if (error) {
      console.log('SG API ERROR');
      callback(error, null)
    } else {
      var sgInfo = JSON.parse(body);

      if (sgInfo.events.length === 0) {
        callback(null, sgParsedRes);
      } else {
        sgHelper(sgInfo, searchParam, function(error, result) {
          if (error) {
            console.log('SG PARSING ERROR')
            callback(error, null);
          } else {
            // console.log("SG ARR COMPLETE", result)
            // console.log("SG ARR COMPLETE _--------------------------->")
            sgParsedRes.push(result);
            // callback(null, sgParsedRes);
          }
        });
        callback(null, sgParsedRes);
        // console.log("SG ARR COMPLETE", sgParsedRes)
        // console.log("SG ARR COMPLETE _--------------------------->")
      }

    }
  })
}

module.exports = {
  seatGeekGetter: seatGeekGetter,
  seatGeekData: seatGeekData
}
