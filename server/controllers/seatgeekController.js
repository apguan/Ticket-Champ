var request = require('request');

//events?venue.city=
//data = {
  // data.event.stats.average_price
  // data.event.stats.highest_price
  // data.event.stats.lowest_price
  // data.event.id
  // data.event.datetime_local
  // data.event.url
  // data.event.venue.extended_address
  // data.event.venue.name
  // data.event.venue.state


var looper = function(data) {
  //info.event wil be passed in as data
  var seatGeekCompare = {
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
  }

  if (data.slug === "lady-gaga") {
    seatGeekCompare[url] = data.url
    seatGeekCompare[highPrice] = data.stats.highest_price
    seatGeekCompare[lowPrice] = data.stats.lowest_price
    seatGeekCompare[averagePice] = data.stats.average_price
    seatGeekCompare[venueName] = data.venue.name
    seatGeekCompare[id] = data.url
    seatGeekCompare[date] = data.datetime_local
    seatGeekCompare[apiId] = data.url
    seatGeekCompare[city] = data.city
    seatGeekCompare[venueLocation] = data.venue.display_location
    seatGeekCompare[state] = data.venue.state

  dataSet.push(seatGeekCompare)
  }

  console.log(seatGeekCompare);
}


var seatGeekGetter = function(searchParam, location, callback) {


  var artistName = searchParam.split(' ').join('+');

  var queryString = 'https://api.seatgeek.com/2/events?q=' + search + '&client_id=NzA2MzY4MnwxNDg5NTE0NDA0Ljc1';

  request(queryString, function (error, response, body) {
    if (error) {
      console.log(error);
    } else if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      for (var i = 0; i < body.event; i++){
        looper(body.event[i]);
      }
    }
  })
}

module.exports = {
  seatGeekGetter: seatGeekGetter
}
