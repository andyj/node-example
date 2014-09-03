var settings = require('../settings');
var express = require('express');
var mysql = require('mysql');
var app = express();
var pool  = mysql.createPool( settings.mysql );

app.get('/', function(req, res) {
  var output = "Hello world";
  pool.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    var msg = 'The solution is: ' & rows[0].solution
    output += '<br>' + msg
    console.log( rows[0] );
    res.send(output);
  });


});



var server = app.listen(settings.web.port, function() {
    console.log('Listening on port %d', server.address().port);
});