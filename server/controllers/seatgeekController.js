var request = require('request');

//events?venue.city=

var seatGeekGetter = function(searchParam, location, callback) {

  var seatGeekCompare = {
    url: '',
    highPrice: null,
    lowPrice: null,
    averagePrice: null,
    venueName: ''
  }

  var looper = function(data) {
    for (var i = 0; i < data.length; i++) {
      
    }
  }

  var artistName = searchParam.split(' ').join('+');

  var queryString = 'https://api.seatgeek.com/2/events?q=' + search + '&client_id=NzA2MzY4MnwxNDg5NTE0NDA0Ljc1';

  request(queryString, function (error, response, body) {
    if (error) {
      console.log(error);
    } else if (!error && response.statusCode == 200) {
      var info = JSON.parse(body)
      console.log(info)
    }
})
}

module.exports = {
  seatGeekGetter: seatGeekGetter
}
