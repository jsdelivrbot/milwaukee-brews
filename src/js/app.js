'use strict';

const serverURI = 'http://localhost:5000';

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
  app.init();

  ko.applyBindings(app);
}

const app = new ViewModel(
    getAllModels(brewhouseData)
);
