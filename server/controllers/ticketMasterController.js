

var app = require('../index.js');

var request = require('request');

var queryTicketMaserForEvent = function(searchParam) {
	//remove hard coded api key
  var queryString = 'https://app.ticketmaster.com/discovery/v2/events.json?keyword=' + searchParam + '&apikey=kyYiscxIL5hihtSs95QwNGsixEv738Zj&page=1';
  request(queryString, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('fired event query');
      var event = JSON.parse(body);
      var id = event._embedded.events[0].id;
      queryTicketMaserForPrices(id);
    }
	})
};
//

var queryTicketMaserForPrices = function(eventId) {
	//remove hard coded api key
	var queryString = 'https://app.ticketmaster.com/commerce/v2/events/' + eventId + '/offers.json?apikey=kyYiscxIL5hihtSs95QwNGsixEv738Zj'
	request(queryString, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('price query is returning a dataset');
      //Parse the data here and get min and max
      //console.log(body)
    }
	})
}

module.exports = {
	queryTicketMaserForEvent: queryTicketMaserForEvent,
}

