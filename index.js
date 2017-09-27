var express = require('express');
var app = express();
var yelpFusion = require('yelp-fusion');
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/', function(request, response) {
  response.render('index');
});

app.post('/yelp', function(req, res) {
  const clientId = 'aTrA4IisaA9R31H2QHkymg';
  const clientSecret = 'mIjIKeW5FDlQdxGCZj6dqVVx8vIAtfVVZq6ee9SL4xRLzfvJG5mabnbLhYSobnlq';

  yelpFusion.accessToken(clientId, clientSecret).then(response => {
    const client = yelpFusion.client(response.jsonBody.access_token);

    client.search(req.body).then(response => {
      const firstResult = response.jsonBody.businesses[0];
      const prettyJson = JSON.stringify(firstResult, null, 4);
      return res.json(prettyJson);
    });
  }).catch(e => {
    return res.json(e);
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
