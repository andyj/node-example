var settings = require('../settings')
var express = require('express')
var session = require('express-session')
var app = express()
var MongoStore = require('connect-mongo')(session);

var links = '<p><a href="/link1">Link1</a> <a href="/link2">Link2</a> <a href="/link3">Link3</a></p>';

/*
 Failure to set "saveUninitialized" and "resave" will generate two warnings:
 express-session deprecated undefined resave option; provide resave option app.js:7:9
 express-session deprecated undefined saveUninitialized option; provide saveUninitialized option app.js:7:9

 This is simply saying the default values will change so they want to ensure that by setting the values
 explicitly now. By doing this you  won't run into unexpected behavior if the defaults do change in the
 near future.
*/
app.use(session({
    secret: "some secret key",
    saveUninitialized: true, // (default: true)
    resave: true, // (default: true)
    store: new MongoStore({
      db : settings.mongo.db,
    })
  }));



app.get('/link1', function(req, res) {
  // Simply add some links to each path
  var output = links;
  req.session.lastPage += req.route.path + '<br>';
  if(req.session.lastPage) {
    output += '<h2>'+req.route.path+'</h2> past page was: ' + req.session.lastPage + '. ';
  } else{
    output += 'No last page defined';
  }
  res.send(output);
});

app.get('/link2', function(req, res) {
  // Simply add some links to each path
  var output = links;
  req.session.lastPage += req.route.path + '<br>';
  if(req.session.lastPage) {
    output += '<h2>You`\ve made it to link 2</h2> past page was: ' + req.session.lastPage + '. ';
  } else{
    output += 'No last page defined';
  }
  res.send(output);
});

app.get('/link3', function(req, res) {
  // Simply add some links to each path
  var output = links;
  req.session.lastPage += req.route.path + '<br>';
  if(req.session.lastPage) {
    output += '<h3>Some other title for Link3</h3> past page was: ' + req.session.lastPage + '. ';
  } else{
    output += 'No last page defined';
  }
  res.send(output);
});

var server = app.listen(settings.web.port, function() {
    console.log('Listening on port %d', server.address().port);
});