var express = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'ticketpal'
});
connection.connect(function(err){
  if(err) {
    console.log('database did not load', err);
  } else {
    console.log('the database is connected');
  }
})
module.exports = connection;
