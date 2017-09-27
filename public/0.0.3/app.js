"use strict";

/**
 * @description Light gray Google Map style provided by Snazzy Maps
 * @link https://snazzymaps.com/style/132/light-gray
 */

function getMinimalStyling() {
  return [{
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#d3d3d3"
    }]
  }, {
    "featureType": "transit",
    "stylers": [{
      "color": "#808080"
    }, {
      "visibility": "off"
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{
      "visibility": "on"
    }, {
      "color": "#b3b3b3"
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#ffffff"
    }]
  }, {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [{
      "visibility": "on"
    }, {
      "color": "#ffffff"
    }, {
      "weight": 1.8
    }]
  }, {
    "featureType": "road.local",
    "elementType": "geometry.stroke",
    "stylers": [{
      "color": "#d7d7d7"
    }]
  }, {
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [{
      "visibility": "on"
    }, {
      "color": "#ebebeb"
    }]
  }, {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [{
      "color": "#a7a7a7"
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#ffffff"
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#ffffff"
    }]
  }, {
    "featureType": "landscape",
    "elementType": "geometry.fill",
    "stylers": [{
      "visibility": "on"
    }, {
      "color": "#efefef"
    }]
  }, {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#696969"
    }]
  }, {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [{
      "visibility": "on"
    }, {
      "color": "#737373"
    }]
  }, {
    "featureType": "poi",
    "elementType": "labels.icon",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "geometry.stroke",
    "stylers": [{
      "color": "#d6d6d6"
    }]
  }, {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [{
      "visibility": "off"
    }]
  }, {}, {
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#dadada"
    }]
  }];
}

function getMarkerIconColors() {
  return {
    color: 'ffc40d',
    highlight: 'cc0000'
  };
}
'use strict';

var brewhouseData = [{
  title: 'Rock Bottom Restaurant & Brewery',
  coordinates: {
    lat: 43.039697,
    lng: -87.911528
  },
  address: '740 N Plankinton Ave, Milwaukee, WI 53203',
  neighborhood: 'Westown',
  tag: ['brewery', 'restaurant'],
  info: 'Amazing food and hand-crafted, small batch beers are waiting for you at Rock Bottom.',
  url: 'https://rockbottom.com/locations/milwaukee/',
  yelpID: 'rock-bottom-restaurant-and-brewery-milwaukee'
}, {
  title: 'Milwaukee Ale House',
  coordinates: {
    lat: 43.033472,
    lng: -87.909467
  },
  address: '233 N Water St, Milwaukee, WI 53202',
  neighborhood: 'Historic Third Ward',
  tag: ['brewery', 'restaurant', 'live music'],
  info: 'The Ale House is the place in the Third Ward for live music, hand-crafted ales and lagers, and riverside dining.',
  url: 'http://ale-house.com/',
  yelpID: 'milwaukee-ale-house-milwaukee'
}, {
  title: 'Broken Bat Brewing Co.',
  coordinates: {
    lat: 43.033501,
    lng: -87.908003
  },
  address: '231 E. Buffalo St. - Lower Unit, Milwaukee, WI 53202',
  neighborhood: 'Historic Third Ward',
  tag: ['bar', 'brewery'],
  info: 'Hand-crafted beer and baseball. What else could you want?. This brew house offers you a twist with beers infused with mint, apricot, orange peel, and more.  Try to Mint Condition Porter.',
  url: 'http://brokenbatbrewery.com/',
  yelpID: 'broken-bat-brewing-co-llc-milwaukee'
}, {
  title: 'Water Street Brewery',
  coordinates: {
    lat: 43.044783,
    lng: -87.911197
  },
  address: '1101 N Water St, Milwaukee, WI 53202',
  neighborhood: 'East Town',
  tag: ['brewery', 'restaurant'],
  info: 'Water Street offers a wide array of ambers, ales, stouts, and seasonal beers.  My favorite is their Baltic Porter with robust blend of dark chocolate and toffee.',
  url: 'http://www.waterstreetbrewery.com/index.html/locations/downtown',
  yelpID: 'water-street-brewery-milwaukee'
}, {
  title: 'Lakefront Brewery',
  coordinates: {
    lat: 43.054726,
    lng: -87.905287
  },
  address: '1872 N Commerce St, Milwaukee, WI 53212',
  neighborhood: "Brewer's Hill",
  tag: ['brewery', 'restaurant'],
  info: "Head up to Brewer's Hill on Friday night to enjoy the fish fry and hand-crafted IPA, Ale, or Lager.  The Eastside Dark, a Bavarian Dark Lager, is my favorite at Lakefront.",
  url: 'http://www.lakefrontbrewery.com/',
  yelpID: 'lakefront-brewery-milwaukee'
}];
'use strict';

/**
 * The InfoWindow which appears above a selected
 * marker requires addition rendering to build
 * the view within it.
 *
 * This class handles the view rendering.
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InfoWindowView = function () {
  /**
   * @description Instantiate the Info Window
   * @param {object} map Instance of the Google Map
   * @method
   */
  function InfoWindowView(map) {
    _classCallCheck(this, InfoWindowView);

    this.map = map;
    this.infoWindow = new google.maps.InfoWindow({
      maxWidth: 300
    });
  }

  /**
   * @description Render the InfoWindow
   * @param {object} placeModel Brew house's model
   * @param {bool} hasError When true, an error occurred.
   * @method
   */


  _createClass(InfoWindowView, [{
    key: 'render',
    value: function render(placeModel) {
      var hasError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      this.infoWindow.close();
      this.infoWindow.marker = placeModel.marker;
      this.infoWindow.setContent(this.buildHTML(placeModel));
      this.infoWindow.open(this.map, placeModel.marker);
    }

    /**
     * @description Render the initial info window with the spinner.
     * @param {object} placeModel Brew house's model
     * @returns {string}
     */

  }, {
    key: 'renderSpinner',
    value: function renderSpinner(placeModel) {
      this.infoWindow.close();
      this.infoWindow.marker = placeModel.marker;
      this.infoWindow.setContent(this.buildSpinnerHTML(placeModel));
      this.infoWindow.open(this.map, placeModel.marker);
    }

    /**
     * @description Build the spinner (wait) HTML
     * @param {object} placeModel Brew house's model
     * @returns {string}
     */

  }, {
    key: 'buildSpinnerHTML',
    value: function buildSpinnerHTML(placeModel) {
      return '<div class="brewhouse-info-container">\n          <h2>' + placeModel.title() + '</h2>\n          <div class="brewhouse-info">\n            <div class="brewhouse-info-content">\n                <p>Please wait as we connect Yelp...</p>\n            </div>\n            <div class="brewhouse-info-content">\n                <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><span class="sr-only">Loading...</span>\n            </div>\n          </div>\n        </div>';
    }

    /**
     * @description Build the InfoWindow.
     * @param {object} placeModel Brew house's model
     * @returns {string}
     */

  }, {
    key: 'buildHTML',
    value: function buildHTML(placeModel) {
      var links = '<a href="' + placeModel.url + '" target="_blank">website</a>';

      var tags = '<i class="fa fa-beer" aria-hidden="true"></i>';
      if (placeModel.tag().includes('restaurant')) {
        tags += '<i class="fa fa-cutlery" aria-hidden="true"></i>';
      }
      if (placeModel.tag().includes('live music')) {
        tags += '<i class="fa fa-music" aria-hidden="true"></i>';
      }

      var html = '<div class="brewhouse-info-container">\n          <h2>' + placeModel.title() + '</h2>\n          <div class="brewhouse-info">\n            <div class="brewhouse-info-content">\n              <p class="brewhouse-tags">' + tags + '</p>\n              <p><strong>My Review:</strong> ' + placeModel.marker.info + '</p>\n            </div>\n            <div class="brewhouse-info-content">\n                <p>' + placeModel.address + '</p>';
      if (placeModel.hasYelpData()) {
        html += '<p>Yelp Rating: ' + placeModel.yelpData.rating + '</p>';
        links += ' | <a href="' + placeModel.yelpData.url + '" target="_blank">Yelp</a>';
      }

      html += links + '</div>\n          </div>\n        </div>';

      return html;
    }
  }]);

  return InfoWindowView;
}();
"use strict";

/**
 * @description a Place Model holds the data for
 * the brew house, it's marker, and its Yelp data.
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlaceModel = function () {
  /**
   * @description Instantiate a new model.
   * @param {object} data Model's data
   * @param {number} id Index ID
   */
  function PlaceModel(data, id) {
    _classCallCheck(this, PlaceModel);

    this.isVisible = ko.observable(true);
    this.id = id;
    this.title = ko.observable(data.title);
    this.coordinates = data.coordinates;
    this.info = data.info;
    this.neighborhood = data.neighborhood;
    this.tag = ko.observableArray(data.tag);
    this.url = data.url;
    this.address = data.address;
    this.yelpID = data.yelpID;
    this.yelpData = null;
  }

  /**
   * @description Checks if this model has Yelp data.
   * @returns {boolean}
   * @method
   */


  _createClass(PlaceModel, [{
    key: 'hasYelpData',
    value: function hasYelpData() {
      if (this.yelpData === null) {
        return false;
      }

      return _typeof(this.yelpData) === 'object' && this.yelpData.hasOwnProperty('rating');
    }

    /**
     * @description Sets the Yelp data.
     * @param {object} data
     * @method
     */

  }, {
    key: 'setYelpData',
    value: function setYelpData(data) {
      this.yelpData = data;
    }

    /**
     * @description Make this marker visible.
     * @method
     */

  }, {
    key: 'makeVisible',
    value: function makeVisible() {
      if (!this.isVisible()) {
        this.isVisible(true);
        this.marker.setAnimation(google.maps.Animation.BOUNCE);
        this.marker.setVisible(true);
      }
    }

    /**
     * @description Hide this marker.
     * @method
     */

  }, {
    key: 'hide',
    value: function hide() {
      if (this.isVisible()) {
        this.isVisible(false);
        this.marker.setVisible(false);
        this.marker.setAnimation(null);
      }
    }

    /**
     * @description Initialize this Brew House's marker.
     * @method
     */

  }, {
    key: 'initMarker',
    value: function initMarker(map, icon) {
      this.marker = new google.maps.Marker({
        position: this.coordinates,
        map: map,
        title: this.title(),
        icon: icon,
        animation: google.maps.Animation.DROP,
        id: this.id,
        info: this.info
      });

      return this.marker;
    }

    /**
     * @description Set the Marker Animation to bounce. Then after
     * 0.750 seconds, it resets back to null.
     * @method
     */

  }, {
    key: 'setMarkerAnimation',
    value: function setMarkerAnimation() {
      var _this = this;

      this.marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function () {
        _this.marker.setAnimation(null);
      }, 750);
    }
  }]);

  return PlaceModel;
}();
'use strict';

/**
 * @description Brew Houses ViewModel.
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ViewModel = function () {
  /**
   * @description Instantiate our ViewModel and get it ready to run.
   * @param {PlaceModel} placeModels The model.
   * @constructor
   */
  function ViewModel(placeModels) {
    var _this = this;

    _classCallCheck(this, ViewModel);

    this.appRunning = ko.observable(false);
    this.appError = ko.observable(false);

    this.nameFilter = ko.observable('');
    this.places = ko.observableArray(placeModels);
    this.menuOpen = ko.observable(false);
    this.markers = [];
    this.filteredPlaces = ko.computed(function () {
      return _this.filterPlaces();
    });
  }

  /*********************
   * Initializers
   ********************/

  /**
   * @description Initialize the app
   * @method
   */


  _createClass(ViewModel, [{
    key: 'init',
    value: function init() {
      this.appRunning(true);

      this.map = new google.maps.Map(document.getElementById('map'), {
        center: {
          lat: 43.045758,
          lng: -87.906
        },
        zoom: this.getMapZoom(),
        styles: getMinimalStyling(),
        mapTypeControl: false
      });

      this.infoWindow = new InfoWindowView(this.map);
    }

    /**
     * @description Initialize the markers
     * @method
     */

  }, {
    key: 'initMarkers',
    value: function initMarkers() {
      var self = this;
      var mapBounds = new google.maps.LatLngBounds();

      // We'll use these customized icons for our markers.
      var defaultIcon = this.getMarkerIcon(getMarkerIconColors().color);
      var highlightedIcon = this.getMarkerIcon(getMarkerIconColors().highlight);

      this.places().forEach(function (placeModel) {
        // Create the marker for this place.
        placeModel.initMarker(self.map, defaultIcon);

        // Push the new marker onto the array
        self.markers.push(placeModel.marker);

        // Extend the bounds for the marker
        mapBounds.extend(placeModel.marker.position);

        // Bind a click listener for the InfoWindow.
        placeModel.marker.addListener('click', function () {
          return self.openInfoWindow.call(self, placeModel);
        });
        placeModel.marker.addListener('mouseover', function () {
          return placeModel.marker.setIcon(highlightedIcon);
        });
        placeModel.marker.addListener('mouseout', function () {
          return placeModel.marker.setIcon(defaultIcon);
        });
      });
    }

    /**
     * @description Get the Map's Zoom.
     * @returns {number}
     * @method
     */

  }, {
    key: 'getMapZoom',
    value: function getMapZoom() {
      return window.innerWidth > 1000 && window.innerHeight > 900 ? 15 : 14;
    }

    /*********************
     * Filtering
     ********************/

    /**
     * @description Filter the Brew Houses
     * @returns {array}
     * @method
     */

  }, {
    key: 'filterPlaces',
    value: function filterPlaces() {
      // Filter by name input.
      var filterby = this.nameFilter().toLowerCase();

      // Nothing to filter. Return all the models.
      if (!filterby) {
        this.places().forEach(function (place) {
          return place.makeVisible();
        });
        return this.places();
      }

      // Filter through the places model to
      // find the matches and set visibility.
      return this.places().filter(function (place) {
        var title = place.title().toLowerCase();

        // Cache if the place's title starts with the filterby name
        var placeMatched = title.substring(0, filterby.length) === filterby;

        // If it matched, set the place and its marker to visible;
        // else, let's hide it.
        if (placeMatched) {
          place.makeVisible();
        } else {
          place.hide();
        }

        return placeMatched;
      });
    }

    /*********************
     * Handlers
     ********************/

    /**
     * @description Populate the InfoWindow for this marker.
     * @param {google.maps.Marker} marker Instance of the marker
     * @method
     */

  }, {
    key: 'openInfoWindow',
    value: function openInfoWindow(placeModel) {
      if (this.infoWindow === placeModel.marker) {
        return;
      }

      placeModel.setMarkerAnimation();

      this.getYelp(placeModel, this.infoWindow.render);
    }

    /**
     * @description Set the place's InfoWindow.
     * @param {object} self
     * @param {PlaceModel} placeModel
     * @method
     */

  }, {
    key: 'setPlace',
    value: function setPlace(self, placeModel) {
      self.openInfoWindow.call(self, placeModel);
    }

    /**
     * @description Toggle the menu open state.
     * @method
     */

  }, {
    key: 'toggleSidebar',
    value: function toggleSidebar() {
      this.menuOpen(!this.menuOpen());
    }

    /**
     * @description Get the Yelp information for this brew house.
     *
     * This method works by contacting this site's 'yelp' endpoint
     * and passing the location, business name (term), and yelp ID.
     * The server then contacts the Yelp Fusion API to request
     * the information.  Once received it's passed back to the browser
     * and this method.
     *
     * @param {PlaceModel} placeModel
     * @param {function} cb Callback to process once it's done.
     * @method
     */

  }, {
    key: 'getYelp',
    value: function getYelp(placeModel, cb) {
      var infoWindow = this.infoWindow;

      // If we've already grabbed the Yelp data,
      // then call the callback.  There's no need
      // to call Yelp again.
      if (placeModel.hasYelpData()) {
        return cb.call(infoWindow, placeModel);
      }

      // Add the spinner to alert the viewer that we're working on.
      this.infoWindow.renderSpinner.call(infoWindow, placeModel);

      // Let's call our node.js server.
      // It will then fetch the Yelp data.
      fetch('yelp', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          location: 'Milwaukee, WI',
          term: placeModel.title()
        })
      }).then(function (response) {
        if (response.status !== 200) {
          console.log('Whoops, an error occurred with status code ' + response.status);
          return cb.call(infoWindow, placeModel, true);
        }

        // Process the data from Yelp,
        // save it to the model, and
        // then invoke the callback.
        response.json().then(function (data) {
          placeModel.setYelpData(JSON.parse(data));
          return cb.call(infoWindow, placeModel);
        });

        // Whoops, something went wrong.
      }).catch(function (err) {
        console.log(err);
        return cb.call(infoWindow, placeModel, true);
      });
    }

    /**
     * @description Instantiates a new MarkerImage for the supplied color.
     * @param {string} markerColor
     * @returns {google.maps.MarkerImage}
     * @method
     */

  }, {
    key: 'getMarkerIcon',
    value: function getMarkerIcon(markerColor) {
      return new google.maps.MarkerImage('https://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + markerColor + '|40|_|%E2%80%A2', new google.maps.Size(21, 34), new google.maps.Point(0, 0), new google.maps.Point(10, 34), new google.maps.Size(21, 34));
    }
  }]);

  return ViewModel;
}();
'use strict';

/**
 * @description Get all of the models.
 * @param {array} data
 * @function
 */

function getAllModels(data) {
  var locations = [];

  data.forEach(function (location, index) {
    return locations.push(new PlaceModel(location, index));
  });

  return locations;
}

/**
 * @description Initialize the map and then
 * apply our bindings for Knockout.
 * @function
 */
function initMap() {
  // Pause for the splash.
  setTimeout(function () {
    app.init();
    app.initMarkers();
  }, 1000);
}

/**
 * @description Let the viewer know something went wrong on load.
 * @function
 */
function initError() {
  app.appError(true);
}

var app = new ViewModel(getAllModels(brewhouseData));
ko.applyBindings(app);

// Let's watch to make sure Google loads up
// If no, let the viewer know.
setTimeout(function () {
  if (!app.appRunning() || !window.google || !window.google.maps) {
    initError();
  }
}, 5000);