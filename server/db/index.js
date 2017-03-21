var express = require('express');

var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'ticketpal',
});

connection.connect(function(err){
  if(err) {
    console.log('database did not load', err);
  } else {
    console.log('the database is connected');
  }
})

// query to get our top three searches in our DB
var getTopThreeTrending = function(callback) {
  var queryString = 'select webId, max, min, avg, name, id, localDate, api, city, venueLocation, state, COUNT(name) AS nameCount from ticketinfo GROUP BY webId, max, min, avg, name, id, localDate, api, city, venueLocation, state ORDER BY COUNT(NAME) desc limit 3;';
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
	var params = [ dataObject.venueName, dataObject.lowPrice, dataObject.averagePice, dataObject.highPrice, dataObject.url, dataObject.date, dataObject.apiId, dataObject.city, dataObject.venueLocation, dataObject.state];
	var queryString = 'INSERT INTO ticketinfo ( name, min, avg, max, webID, localDate, api, city, venueLocation, state ) VALUES (?,?,?,?,?,?,?,?,?,? )';
	connection.query(queryString, params, function(err) {
		if(err) {
			console.log('error saving to database', err);
		} else {
			console.log('saved query dataset to database');
		}
	})
}

module.exports = {
  getTopThreeTrending: getTopThreeTrending,
  addTicketMasterToDataBase: addTicketMasterToDataBase,
  connection: connection,
};



