var express = require('express');

var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host:'us-cdbr-iron-east-03.cleardb.net/',
//   user: 'b7677576a47fb0',
//   password: '95df26d8',
//   database: 'heroku_e38478c4930fdf0'
// });

var connection = mysql.createConnection('mysql://b7677576a47fb0:95df26d8@us-cdbr-iron-east-03.cleardb.net/heroku_e38478c4930fdf0?reconnect=true')

connection.connect(function(err){
  if(err) {
    console.log('database did not load', err);
    connection.end();
  } else {
    console.log('the database is connected');
  }
})

setInterval(function () {
    connection.query('SELECT 1');
}, 5000);

// query to get our top three searches in our DB
var getTopThreeTrending = function(callback) {
  var queryString = 'select name, city, venueLocation, state, webId, searchParam, COUNT(searchParam) AS nameCount from ticketinfo GROUP BY name, city, venueLocation, state, webId, searchParam ORDER BY COUNT(searchParam) desc limit 9;'
  // if you want to grab more than top three, change limit to 9

// select max, min, avg, name, localDate, city, venueLocation, state, webId, COUNT(name) AS nameCount from ticketinfo GROUP BY max, min, avg, name, localDate, city, venueLocation, state, webId ORDER BY COUNT(NAME) desc limit 3;

// select name, COUNT(name) AS nameCount from ticketinfo GROUP BY name ORDER BY COUNT(NAME) desc limit 3;

  connection.query(queryString, function(err, results) {
    if (err) {
      console.log('error fetching trending', err);
      callback(err, null);
    } else {
      console.log('success fetching top three set');
      callback(null, results);
    }
  })
}


var addTicketMasterToDataBase = function(dataObject) {
	var params = [ dataObject.venueName, dataObject.lowPrice, dataObject.averagePrice, dataObject.highPrice, dataObject.url, dataObject.date, dataObject.apiId, dataObject.city, dataObject.venueLocation, dataObject.state, dataObject.eventUrl, dataObject.searchParam];
	var queryString = 'INSERT INTO ticketinfo ( name, min, avg, max, webID, localDate, api, city, venueLocation, state, eventUrl, searchParam ) VALUES (?,?,?,?,?,?,?,?,?,?,?,? )';
	connection.query(queryString, params, function(err) {
		if(err) {
			console.log('error saving to database', err);
		} else {
			console.log('successfully saved TM api res to db');
		}
	})
}

module.exports = {
  getTopThreeTrending: getTopThreeTrending,
  addTicketMasterToDataBase: addTicketMasterToDataBase,
  connection: connection,
};
