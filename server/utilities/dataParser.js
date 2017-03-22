var mysql = require('mysql');
var db = require('../db/index.js');


var seatGeekListCheck = function(searchParam, location, callback) {
  var queryStatement = "select * from ticketinfo where name like '%" + searchParam + "%' and city like '%" + location + "%';" ;
  db.connection.query(queryStatement, function(err, results) {
    if (err) {
      callback(err, null);
    } else {
      // console.log('dataparser info', results);
      callback(null, results);
    }
  })

}


module.exports = {
  seatGeekListCheck: seatGeekListCheck
}
