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
    this.yelpData = null;
  }

  /**
   * @description Checks if this model has Yelp data.
   * @returns {boolean}
   * @method
   */
  hasYelpData() {
    if (this.yelpData === null) {
      return false;
    }

    return typeof this.yelpData === 'object' &&
        this.yelpData.hasOwnProperty('rating');
  }

  /**
   * @description Sets the Yelp data.
   * @param {object} data
   * @method
   */
  setYelpData(data) {
    this.yelpData = data;
  }

  /**
   * @description Make this marker visible.
   * @method
   */
  makeVisible() {
    if (!this.isVisible()) {
      this.isVisible(true);
      this.marker.setVisible(true);
    }
  }

  /**
   * @description Hide this marker.
   * @method
   */
  hide() {
    if (this.isVisible()) {
      this.isVisible(false);
      this.marker.setVisible(false);
    }
  }

  /**
   * @description Initialize this Brew House's marker.
   * @method
   */
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