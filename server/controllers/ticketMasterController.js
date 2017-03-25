var app = require('../index.js');
var apiKey = require('../../apiKeys.js')
var request = require('request');

//global obj to client
var ticketmasterData = {
  url: null,
  highPrice: null,
  lowPrice: null,
  averagePrice: null,
  venueName: null,
  id: null,
  date: '',
  apiId: 0,
  city: null,
  venueLocation: null,
  state: null,
  eventUrl: null,
  searchParam: ''
};

var queryTicketMasterForEvent = function(dataOject, searchParam, callback) {

  var searchEvent = searchParam.event;
  var searchLocation = searchParam.location;
  var searchEventApiParsed = encodeURIComponent(searchEvent);
  var searchLocationApiParsed = encodeURIComponent(searchLocation);

  var queryString = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=' + apiKey.api.ticketMasterAPI + '&keyword=' + searchEventApiParsed + '&city=' + searchLocationApiParsed + '&radius=100';

  request(queryString, function (error, response, body) {
  // console.log('IS THIS HITTING TM API')
    var event = JSON.parse(body);

    if (!error) {
      if (!event._embedded) {
        callback(null, dataOject)
      } else {

        if (event._embedded.events[0].priceRanges) {
          dataOject.highPrice = event._embedded.events[0].priceRanges[0].max;
          dataOject.lowPrice = event._embedded.events[0].priceRanges[0].min;
          dataOject.averagePrice = (Math.round(dataOject.highPrice + dataOject.lowPrice)/2);
        }

        dataOject.searchParam = searchEvent.toLowerCase();
        dataOject.venueName = event._embedded.events[0].name;
        dataOject.eventUrl = event._embedded.events[0].url;
        dataOject.url = event._embedded.events[0].images[0].url;
        dataOject.id = event._embedded.events[0].id;
        dataOject.date = event._embedded.events[0].dates.start.localDate + 'T' + event._embedded.events[0].dates.start.localTime;
        dataOject.venueLocation = event._embedded.events[0]._embedded.venues[0].name;
        dataOject.city = event._embedded.events[0]._embedded.venues[0].city.name;
        dataOject.state = event._embedded.events[0]._embedded.venues[0].state.stateCode;
        var id = event._embedded.events[0].id;

        callback(null, dataOject);
      }


    } else {
      callback(error, null);
    }
  })
};

module.exports = {
	queryTicketMasterForEvent: queryTicketMasterForEvent,
  ticketmasterData: ticketmasterData,
}
