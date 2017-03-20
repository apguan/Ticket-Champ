var app = require('../index.js');
var request = require('request');

<<<<<<< 2b0d60481a275ed4a3f7c82805e87b8bc0d23eba
var seatGeekGetter = function(searchParam, location, callback) {
  search = searchParam.split(' ').join('+');
=======
//https://api.seatgeek.com/2/performers?q=lady+gaga&client_id=NzA2MzY4MnwxNDg5NTE0NDA0Ljc1
//make a query request, then add the client_id to the end

//pass the parameters in as array?

var seatGeekGetter = function(callback) {
>>>>>>> changed spacing

  var queryString = 'https://api.seatgeek.com/2/events?q=' + search + '&client_id=NzA2MzY4MnwxNDg5NTE0NDA0Ljc1';

  request(queryString, function(error, res, body) {
    if(!error) {

    }
  })
}

module.exports = {
}
