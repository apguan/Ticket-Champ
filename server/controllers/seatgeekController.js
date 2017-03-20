var app = require('../index.js');
var request = require('request');

//events?venue.city=

var seatGeekGetter = function(searchParam, location, callback) {
  var artistName = searchParam.split(' ').join('+');

  var queryString = 'https://api.seatgeek.com/2/performers?q=' + search + '&client_id=NzA2MzY4MnwxNDg5NTE0NDA0Ljc1';

  request.get(queryString)
  .on('res', function(res) {
    console.log()
  }).pipe()
}

module.exports = {}
