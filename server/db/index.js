var express = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'ticketpal'
});
// connection.connect(function(err){
//   if(err) {
//     console.log('database did not load', err);
//   } else {
//     console.log('the database is connected');
//   }
// })

// var addTicketMasterToDataBase = function(dataObject) {
// 	var params = [null, dataObject.venueName, dataObject.lowPrice, dataObject.averagePrice, dataObject.highPrice, dataObject.url, dataObject.date, dataObject.apiId, dataObject.city, dataObject.venueLocation, dataObject.state]
// 	var queryString = 'INSERT INTO table_name (id, name, min, avg, max, webID, localDate, api, city, venueLocation, state ) VALUES ( ?,?,?,?,?,?,?,?,?,?,? );'
// 	db.query(queryString, params, function(err, data) {
// 		if(err) {
// 			console.log('error saving to database')
// 		} else {
// 			console.log('saved query to data base')
// 		}
// 	})
// }
// module.exports = {
//   addTicketMasterToDataBase: addTicketMasterToDataBase,
// };



