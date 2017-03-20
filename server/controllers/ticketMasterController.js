var app = require('../index.js');

var request = require('request');

var sampleData = require('../../sampledata/ticket_master_price')

  var ticketmasterData = {
    url: null,
    highPrice: null,
    lowPrice: null,
    averagePice: null,
    venueName: null,
  }

var ticketmasterDataParser = function(dataOject, input) {
  console.log('this is ', input)
  var data = input.prices.data
  var high = 0;
  var low = Number(input.prices.data[0].attributes.value);
  dataOject.lowPrice = low;
  var average = 0;
  var len = data.length;

  for (var i = 0; i < data.length; i++) {
    var items = data[i].attributes.value;
    var item = Number(items);
    average += item
    if (item > high) {
      high = item
      dataOject.highPrice = high;
    }
    if (item < low ) {
      console.log(item)
      low = item
      dataOject.lowPrice = low;
    }
  }
  dataOject.averagePice = parseInt(average / len, 10);
  // console.log(data.prices.data[0].attributes.value)

  return dataOject
}

//console.log(ticketmasterDataParser(ticketmasterData,sampleData.prices))


var queryTicketMasterForEvent = function(dataOject, searchParam, callback) {
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
  ticketmasterDataParser: ticketmasterDataParser,
}
