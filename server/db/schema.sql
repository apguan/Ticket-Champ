DROP DATABASE IF EXISTS  ticketpal:

CREATE DATABASE ticketpal;

USE ticketpal;

CREATE TABLE ticketinfo (

  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  min float(2,2) NOT NULL,
  avg float(2,2) NOT NULL,
  max float(2,2) NOT NULL,
  webID varchar(255) NOT NULL,
  localDate varchar(50),
  api int(1) NOT NULL,
  city varchar(100),
  venueLocation varchar(255) NOT NULL,
  state varchar(20),
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
