'use strict';

const yelpFusion = require('yelp-fusion');
const clientId = 'aTrA4IisaA9R31H2QHkymg';
const clientSecret = 'mIjIKeW5FDlQdxGCZj6dqVVx8vIAtfVVZq6ee9SL4xRLzfvJG5mabnbLhYSobnlq';

const searchRequest = {
  term: 'Four Barrel Coffee',
  location: 'san francisco, ca'
};

const yelp = function(request, response) {

  yelpFusion
      // Request a token first.
      .accessToken(clientId, clientSecret)
      .then(response => {
        const client = yelpFusion.client(response.jsonBody.access_token);

        // Now do the search.
        client.search(searchRequest).then(response => {
          const firstResult = response.jsonBody.businesses[0];
          const prettyJson = JSON.stringify(firstResult, null, 4);
          return prettyJson;
        });
      }).catch(e => {
        return e;
      });
};

module.exports = yelp;