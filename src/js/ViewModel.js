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
    this.filteredPlaces = ko.computed(() => this.filterHotspots());
  }

  /**
   * @description Filter the Hotspots
   * @returns {array}
   */
  filterHotspots() {
    // Filter by name input.
    const filterby = this.nameFilter().toLowerCase();

    // Nothing to filter. Return all the models.
    if (!filterby) {
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
    this.infoWindow = new google.maps.InfoWindow();
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 43.044783,
        lng: -87.911197
      },
      zoom: 15,
      styles: getMinimalStyling(),
      mapTypeControl: false
    });

    // We'll use these customized icons for our markers.
    const defaultIcon = getMarkerIcon(getMarkerIconColors().color);
    const highlightedIcon = getMarkerIcon(getMarkerIconColors().highlight);

    this.places().forEach((placeModel) => {
      // Create the marker for this place.
      placeModel.initMarker(self.map, defaultIcon);

      // Push the new marker onto the array
      self.markers.push(placeModel.marker);

      // Bind a click listener for the InfoWindow.
      placeModel.marker.addListener('click', () => self.openInfoWindow.call(self, placeModel));
      placeModel.marker.addListener('mouseover', () => placeModel.marker.setIcon(highlightedIcon));
      placeModel.marker.addListener('mouseout', () => placeModel.marker.setIcon(defaultIcon));
    });
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

    this.getYelp(placeModel, placeModel.title(), this.populateInfoWindow);
  }

  populateInfoWindow(placeModel, yelpData) {
    console.log(this);
    this.infoWindow.close();
    this.infoWindow.marker = marker;
    this.infoWindow.setContent(`<div>${marker.info}</div>`);
    this.infoWindow.open(this.map, marker);
    // this.infoWindow.addListener('closeclick', () => self.infoWindow.close());
  }

  setPlace(self, placeModel) {
    self.populateInfoWindow.call(self, self.markers[placeModel.id]);
  }

  /**
   * @description Filter the locations.
   * @method
   */
  filterPlaces() {
    return '';
  }

  /**
   * @description Toggle the menu open state.
   * @method
   */
  toggleSidebar() {
    this.menuOpen(!this.menuOpen());
  }

  getYelp(placeModel, businessName, cb) {
    const self = this;
    const yelpProxyURI = 'http://milwaukeebrewsmap.dev/api/yelp.php?location' + encodeURIComponent('Milwaukee, WI') + '&businessName=' + encodeURIComponent(businessName);
    fetch(yelpProxyURI, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(function(response) {
      if (response.status !== 200) {
        console.log(`Whoops, an error occurred with status code ${response.status}`);
        return false;
      }
      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        return cb.call(self, placeModel, data);
      });
    }).catch(function(err) {
      console.log(err);
    });

  }
}