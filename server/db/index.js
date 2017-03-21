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
  addTicketMasterToDataBase: addTicketMasterToDataBase,
  connection: connection,

};



