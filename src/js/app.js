'use strict';

function getPlaceModels(data) {
  const locations = [];

  data.forEach((location, index) => locations.push(
     new PlaceModel(location, index)
  ));

  return locations;
}

function initMap() {
  neighborhoodMap.init();

  ko.applyBindings(neighborhoodMap);
}

const neighborhoodMap = new ViewModel(
    getPlaceModels(neighborhoodData)
);
