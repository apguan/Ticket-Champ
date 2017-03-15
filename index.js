var express = require('express');
var Sequelize = require('sequelize');
//Sequelize('database', 'username', 'password')
var app = express();
var sequelize = new Sequelize('ticketpal', 'team', null, {
  host: 'local',
  dialect: 'mysql',
  storage: './db.ticketpal.mysql' });

var User = sequelize.define('User', {
  eventID: Sequelize.STRING,
  name: Sequelize.STRING,
  min: Sequelize.INTEGER,
  max: Sequelize.INTEGER,
  avg: Sequelize.INTEGER,
  location: Sequelize.STRING,
  webID: Sequelize.STRING,
  api: Sequelize.INTEGER
});

var APIs = sequelize.define('API', {
  id: Sequelize.INTEGER,
  api: Sequelize.STRING
});
