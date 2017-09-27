"use strict";

class PlaceModel {
  constructor(data, id) {
    this.isVisible = ko.observable(true);
    this.id = id;
    this.title = ko.observable(data.title);
    this.coordinates = data.coordinates;
    this.info = data.info;
    this.neighborhood = data.neighborhood;
    this.tag = ko.observableArray(data.tag);
    this.url = ko.observable(data.url);
    this.address = data.address;
    this.yelpID = data.yelpID;
  }

  makeVisible() {
    if (!this.isVisible()) {
      this.isVisible(true);
      this.marker.setVisible(true);
    }
  }

  hide() {
    if (this.isVisible()) {
      this.isVisible(false);
      this.marker.setVisible(false);
    }
  }

  toggleVisible() {
    this.isVisible(!this.isVisible());
    this.marker.setVisible(this.isVisible());
  }

  initMarker(map, icon) {
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
}