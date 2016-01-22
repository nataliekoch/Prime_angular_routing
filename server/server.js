var express = require('express');
var path = require('path');

var app = express();

var index = require('./routes/index');

app.use(express.static('server/public'));

app.use('/', index);

var server = app.listen(5000, function(){
  var port = server.address().port;
  console.log('Server listen on port', port);
});
