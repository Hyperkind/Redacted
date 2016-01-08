var bodyParser = require('body-parser');
var express = require('express');
var jade = require('jade');

var app = express();

app.set('view engine', 'jade');
app.set('views', './views');

var replacements = {
  selfie: 'self-portrait',
  yummers: 'delicious',
  outchhea: 'are out here',
  bruh: 'wow',
  doge: 'pug',
  cilantro: 'soap',
  bae: 'loved one',
  swag: 'style',
  yolo: 'carpe diem'
};

// parses the URL-encoded data with the querystring library
app.use(bodyParser.urlencoded({extended: false}));

var orig;


app.get('/', function (req, res) {
  res.render('index', {header: 'Please input your message:' , submit: 'Submit', pageTitle: 'Redacted'});
  console.log('getting index page');
});

app.post('/', function (req, res) {
  // orig = req.body.message;
  var fixed = res.locals.message;
  res.send(fixed);
  // console.log('original message: ' + orig);
  // console.log(sentence);
});

app.use('/', fixSentence);

function fixSentence (req, res, next) {
  var clean = [];
  var cleanWord;
  var origSplit = req.body.message.split(" ");
  for (var i = 0; i < origSplit.length; i++) {
    var currentWord = origSplit[i];
    if (Object.keys(replacements).indexOf(currentWord) > -1) {
      cleanWord = replacements[currentWord];
      clean.push(cleanWord);
    } else {
      clean.push(currentWord);
    }
  }
  var cleanSent = clean.join(' ');
  console.log(cleanSent);
  return next();
}

var server = app.listen(8080, function() {
  var port = server.address().port;
  console.log('Server listening on port ' + port);
});