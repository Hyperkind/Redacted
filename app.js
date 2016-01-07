var bodyParser = require('body-parser');
var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('yes this works');
});

var server = app.listen(8080, function() {
  var port = server.address().port;
  console.log('Server listening on port ' + port);
});