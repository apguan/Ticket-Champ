var app = require('../index.js');
var request = require('request');

var seatGeekGetter = function(searchParam, location, callback) {
  search = searchParam.split(' ').join('+');

  var queryString = 'https://api.seatgeek.com/2/events?q=' + search + '&client_id=NzA2MzY4MnwxNDg5NTE0NDA0Ljc1';

  request(queryString, function(error, res, body) {
    if(!error) {

    }
  })
}

module.exports = {}
