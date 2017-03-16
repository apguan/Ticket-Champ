

var app = require('../index.js');

var request = require('request');

var queryTicketMasterForEvent = function(searchParam, callback) {
	//remove hard coded api key
  var queryString = 'https://app.ticketmaster.com/discovery/v2/events.json?keyword=' + searchParam + '&apikey=kyYiscxIL5hihtSs95QwNGsixEv738Zj&page=1';
  request(queryString, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('fired event query');
      var event = JSON.parse(body);
      var id = event._embedded.events[0].id;
      callback(null, id )
    } else {
      callback(error, null);
    }
  })
};
//

var queryTicketMasterForPrices = function(eventId, callback) {
	//remove hard coded api key
	var queryString = 'https://app.ticketmaster.com/commerce/v2/events/' + eventId + '/offers.json?apikey=kyYiscxIL5hihtSs95QwNGsixEv738Zj'
	request(queryString, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('price query is returning a dataset');
      callback(null, body);
    } else {
      callback(error, null);
    }
	})
}

module.exports = {
	queryTicketMasterForEvent: queryTicketMasterForEvent,
  queryTicketMasterForPrices: queryTicketMasterForPrices,
}

