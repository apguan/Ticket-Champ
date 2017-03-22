var app = require('../index.js');

var request = require('request');

var sampleData = require('../../sampledata/ticket_master_price');

//global obj to client
var ticketmasterData = {
  url: null,
  highPrice: null,
  lowPrice: null,
  averagePice: null,
  venueName: null,
  id: null,
  date: '',
  apiId: 0,
  city: null,
  venueLocation: null,
  state: null,
  eventUrl: null,
};

// parses the data from prices query
var ticketmasterDataParser = function(dataOject, input) {
  var data = input.prices.data;
  var high = 0;
  var low = Number(input.prices.data[0].attributes.value);
  dataOject.lowPrice = low;
  var average = 0;
  var len = data.length;

  for (var i = 0; i < data.length; i++) {
    var items = data[i].attributes.value;
    var item = Number(items);
    average += item;
    if (item > high) {
      high = item
      dataOject.highPrice = high;
    }
    if (item < low ) {
      low = item;
      dataOject.lowPrice = low;
    }
  }
  dataOject.averagePice = average / len;
  // console.log(data.prices.data[0].attributes.value)
  return dataOject;
}

var queryTicketMasterForEvent = function(dataOject, searchParam, callback) {
  // console.log('this is a search' ,searchParam)
	//remove hard coded api key
  // var queryString = 'https://app.ticketmaster.com/discovery/v2/events.json?keyword=' + searchParam + '&apikey=kyYiscxIL5hihtSs95QwNGsixEv738Zj&page=1';
  var queryString = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=kyYiscxIL5hihtSs95QwNGsixEv738Zj&keyword=' + searchParam.event + '&city=' + searchParam.location;
  request(queryString, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('event query is returning a dataset');
      var event = JSON.parse(body);
      dataOject.venueName = event._embedded.events[0].name;
      dataOject.url = event._embedded.events[0].images[0].url;
      dataOject.id = event._embedded.events[0].id;
      dataOject.date = event._embedded.events[0].dates.start.localDate;
      dataOject.venueLocation = event._embedded.events[0]._embedded.venues[0].name;
      dataOject.city = event._embedded.events[0]._embedded.venues[0].city.name;
      dataOject.state = event._embedded.events[0]._embedded.venues[0].state.stateCode;
      var id = event._embedded.events[0].id;
      callback(null, dataOject );
    } else {
      callback(error, null);
    }
  })
};


var queryTicketMasterForPrices = function(dataObject, eventId, callback) {
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
  ticketmasterData: ticketmasterData,
}
