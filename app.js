var bodyParser = require('body-parser');
var express = require('express');
var jade = require('jade');

var app = express();

app.set('view engine', 'jade');
app.set('views', './views');

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

// parses the URL-encoded data with the querystring library
app.use(bodyParser.urlencoded({extended: false}));

var sentence = [];

app.get('/', function (req, res) {
  res.render('index', {message: 'testing this out', pageTitle: 'Render'});
  console.log('getting index page');
});

app.post('/', function (req, res) {
  var sent = req.body.message;
  sentence.push(sent);
  res.send('Sent the message: ' + sent);
  console.log(sent);
});

var server = app.listen(8080, function() {
  var port = server.address().port;
  console.log('Server listening on port ' + port);
});