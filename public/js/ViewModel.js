'use strict';

/**
 * @description Milwaukee Hotspots ViewModel Class
 */
class ViewModel {
  /**
   * @description Instantiate our ViewModel and get it ready to run.
   * @param placeModels
   * @constructor
   */
  constructor(placeModels) {
    this.nameFilter = ko.observable('');
    this.places = ko.observableArray(placeModels);
    this.menuOpen = ko.observable(false);
    this.markers = [];
    this.filteredPlaces = ko.computed(() => this.filterPlaces());
  }

  /**
   * @description Filter the Places
   * @returns {array}
   */
  filterPlaces() {
    // Filter by name input.
    const filterby = this.nameFilter().toLowerCase();

    // Nothing to filter. Return all the models.
    if (!filterby) {
      this.places().forEach((place) => place.makeVisible());
      return this.places();
    }

    // Filter through the places model to
    // find the matches and set visibility.
    return this.places().filter((place) => {
      const title = place.title().toLowerCase();

      // Cache if the place's title starts with the filterby name
      const placeMatched = title.substring(0, filterby.length) === filterby;

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

  /**
   * @description Initialize the app
   * @method
   */
  init() {
    const self = this;
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 43.045758,
        lng: -87.906
      },
      zoom: this.getMapZoom(),
      styles: getMinimalStyling(),
      mapTypeControl: false
    });

    const mapBounds = new google.maps.LatLngBounds();
    this.infoWindow = new InfoWindowView(this.map);

    // We'll use these customized icons for our markers.
    const defaultIcon = this.getMarkerIcon(getMarkerIconColors().color);
    const highlightedIcon = this.getMarkerIcon(getMarkerIconColors().highlight);

    this.places().forEach((placeModel) => {
      // Create the marker for this place.
      placeModel.initMarker(self.map, defaultIcon);

      // Push the new marker onto the array
      self.markers.push(placeModel.marker);

      // Extend the bounds for the marker
      mapBounds.extend(placeModel.marker.position);

      // Bind a click listener for the InfoWindow.
      placeModel.marker.addListener('click', () => self.openInfoWindow.call(self, placeModel));
      placeModel.marker.addListener('mouseover', () => placeModel.marker.setIcon(highlightedIcon));
      placeModel.marker.addListener('mouseout', () => placeModel.marker.setIcon(defaultIcon));
    });
  }

  getMapZoom() {
    return window.innerWidth > 1000 && window.innerHeight > 900
        ? 15
        : 14;
  }

  /**
   * @description Populate the InfoWindow for this marker.
   * @param {google.maps.Marker} marker Instance of the marker
   * @method
   */
  openInfoWindow(placeModel) {
    if (this.infoWindow === placeModel.marker) {
      return;
    }

    this.getYelp(placeModel, this.infoWindow.render);
  }

  /**
   * @description Set the place's InfoWindow.
   * @param {object} self
   * @param {PlaceModel} placeModel
   */
  setPlace(self, placeModel) {
    self.openInfoWindow.call(self, placeModel);
  }

  /**
   * @description Toggle the menu open state.
   * @method
   */
  toggleSidebar() {
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
   */
  getYelp(placeModel, cb) {
    const infoWindow = this.infoWindow;

    if (placeModel.hasYelpData()) {
      return cb.call(infoWindow, placeModel);
    }

    this.infoWindow.renderSpinner.call(infoWindow, placeModel);

    fetch(serverURI + '/yelp', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        location: 'Milwaukee, WI',
        term: placeModel.title()
      })
    }).then(function(response) {
      if (response.status !== 200) {
        console.log(`Whoops, an error occurred with status code ${response.status}`);
        return cb.call(infoWindow, placeModel, true);
      }
      // Examine the text in the response
      response.json().then(function(data) {
        placeModel.setYelpData(JSON.parse(data));
        return cb.call(infoWindow, placeModel);
      });
    }).catch(function(err) {
      console.log(err);
      return cb.call(infoWindow, placeModel, true);
    });

  }

  getMarkerIcon(markerColor) {
    return new google.maps.MarkerImage(
        'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + markerColor +
        '|40|_|%E2%80%A2',
        new google.maps.Size(21, 34),
        new google.maps.Point(0, 0),
        new google.maps.Point(10, 34),
        new google.maps.Size(21, 34)
    );
  }
}