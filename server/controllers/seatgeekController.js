var request = require('request');

var seatGeekParser = function(data) {
  //info.event wil be passed in as data
  var seatGeekCompare = {
    url: data.url || null,
    highPrice: data.stats.highest_price || null,
    lowPrice: data.stats.lowest_price || null,
    averagePice: data.stats.average_price || null,
    eventName: data.title || null,
    id: data.performers[0].id || null,
    date: data.datetime_local.slice(0,10) || null,
    apiId: 1,
    city: data.city || null,
    venueLocation: data.venue.display_location || null,
    state: data.venue.state || null,
  }

  console.log(seatGeekCompare);
  return seatGeekCompare
}


var seatGeekGetter = function(searchParam, location, callback) {

  var artistName = searchParam.split(' ').join('+');

  var queryString = 'https://api.seatgeek.com/2/events?q=' + artistName + '&client_id=NzA2MzY4MnwxNDg5NTE0NDA0Ljc1';

  request(queryString, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      for (var i = 0; i < info.event; i++){
        if (info.events[i].slug === 'lady-gaga' && info.events[i].venue.city === location)
        seatGeekParser(info.events[i]);
      }
    } else {
      console.log(error);
    }
  })
}

module.exports = {
  seatGeekGetter: seatGeekGetter,
  seatGeekParser: seatGeekParser
}


// seatGeekCompare[url] = data.url
// seatGeekCompare[highPrice] = data.stats.highest_price
// seatGeekCompare[lowPrice] = data.stats.lowest_price
// seatGeekCompare[averagePice] = data.stats.average_price
// seatGeekCompare[venueName] = data.venue.name
// seatGeekCompare[id] = data.performers[0].id
// seatGeekCompare[date] = data.datetime_local.slice(0,10)
// seatGeekCompare[apiId] = 1
// seatGeekCompare[city] = data.city
// seatGeekCompare[venueLocation] = data.venue.display_location
// seatGeekCompare[state] = data.venue.state
