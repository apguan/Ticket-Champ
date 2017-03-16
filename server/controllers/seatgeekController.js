var app = require('../index.js');
var request = require('request');

var seatGeekGetter = function(searchParam) {
  search = searchParam.split('');
  for(var i=0; i<search.length; i++) {
   if (search[i] === ' ') {
       search.splice(i, 1, '+');
   }
  }
  var queryString = 'https://api.seatgeek.com/2/events?q=' + search + '&client_id=NzA2MzY4MnwxNDg5NTE0NDA0Ljc1';

  request(queryString, function(error, res, body) {
    if(!error) {
      console.log('in here');
      console.log(body);
    }
  })
}

module.exports = {}
