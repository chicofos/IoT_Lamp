var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var io = require('./realtime');

app.use(express.static('public'));

var server = app.listen(port, onListening);

io(server);

function onListening(){
  console.log('Server running on port %s', port);
}