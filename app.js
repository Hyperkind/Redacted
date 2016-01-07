var bodyParser = require('body-parser');
var express = require('express');
var jade = require('jade');

var replacements = [
  {'selfie': 'self-portrait'},
  {'yummers': 'delicious'},
  {'outchhea': 'are out here'},
  {'bruh': 'wow'},
  {'doge': 'pug'},
  {'cilantro': 'soap'},
  {'bae': 'loved one'},
  {'swag': 'style'},
  {'yolo': 'carpe diem'}
];

var app = express();

app.set('view engine', 'jade');
app.set('views', './views');

app.get('/', function (req, res) {
  res.render('index', {message: 'testing this out', pageTitle: 'Render'});
});

app.post('/', function (req, res) {

});

var server = app.listen(8080, function() {
  var port = server.address().port;
  console.log('Server listening on port ' + port);
});