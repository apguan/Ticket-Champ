var request = require('request');


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
  eventUrl: null

};

var sgHelper = function(sgAPIresArr, cb) {
  var dataObj = {};

  for (var i = 0; i < sgAPIresArr.events.length; i++){

    // console.log('SG API TITLE :', sgAPIresArr.events[i].title);
    // console.log('SG API TITLE ------------------>');

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

    cb(null, dataObj);
    dataObj = {};
  }
}


var seatGeekGetter = function(searchParam, location, callback) {

  var sgParsedRes = [];
  console.log('SG LOC', location)
  console.log('SG EVENT', searchParam)
  // var locationSearch = location.split(' ').join('+');
  var artistSearch = searchParam.split(' ').join('+');
  var slug = searchParam.toLowerCase().split(' ').join('-');

  var queryString = 'https://api.seatgeek.com/2/events?q=' + artistSearch +'&per_page=100&venue.city=' + location + '&range=100mi&client_id=NzA2MzY4MnwxNDg5NTE0NDA0Ljc1';

  request(queryString, function (error, response, body) {
    if (error) {
      console.log('SG API ERROR');
      callback(error, null)
    } else {
      var sgInfo = JSON.parse(body);

      sgHelper(sgInfo, function(error, result) {
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
  })
}

module.exports = {
  seatGeekGetter: seatGeekGetter,
  seatGeekData: seatGeekData
}
