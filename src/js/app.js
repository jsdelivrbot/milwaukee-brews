'use strict';

/**
 * @description Get all of the models.
 * @param {array} data
 * @function
 */
function getAllModels(data) {
  const locations = [];

  data.forEach((location, index) => locations.push(
      new PlaceModel(location, index)
  ));

  return locations;
}

/**
 * @description Initialize the map and then
 * apply our bindings for Knockout.
 * @function
 */
function initMap() {
  // Pause for the splash.
  setTimeout(() => {
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

const app = new ViewModel(
    getAllModels(brewhouseData)
);
ko.applyBindings(app);

// Let's watch to make sure Google loads up
// If no, let the viewer know.
setTimeout(() => {
  if (!app.appRunning() || !window.google || !window.google.maps) {
    initError();
  }
}, 5000);
