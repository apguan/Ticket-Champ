var express = require('express');
var db = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'ticketpal'
});

connect.connect();

module.exports = connection;
