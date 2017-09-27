'use strict';

/**
 * The InfoWindow which appears above a selected
 * marker requires addition rendering to build
 * the view within it.
 *
 * This class handles the view rendering.
 */
class InfoWindowView {
  /**
   * @description Instantiate the Info Window
   * @param {object} map Instance of the Google Map
   * @method
   */
  constructor(map) {
    this.map = map;
    this.infoWindow = new google.maps.InfoWindow();
  }

  /**
   * @description Render the InfoWindow
   * @param {object} placeModel Brew house's model
   * @param {bool} hasError When true, an error occurred.
   * @method
   */
  render(placeModel, hasError = false) {
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
  renderSpinner(placeModel) {
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
  buildSpinnerHTML(placeModel) {
    return `<div class="infowindow-container">
          <h2>${placeModel.title()}</h2>
          <p>${placeModel.address}</p>
          <p>Please wait as we connect Yelp...</p>
          <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><span class="sr-only">Loading...</span>
        </div>`;
  }

  /**
   * @description Build the InfoWindow.
   * @param {object} placeModel Brew house's model
   * @returns {string}
   */
  buildHTML(placeModel) {
    let links = `<a href="${placeModel.url}" target="_blank">website</a>`;

    let html = `<div class="brewhouse-info-container">
          <h2>${placeModel.title()}</h2>
          <div class="brewhouse-info">
            <div class="brewhouse-info-content">
              <p><strong>My Review:</strong> ${placeModel.marker.info}</p>
            </div>
            <div class="brewhouse-info-content">
                <p>${placeModel.address}</p>`;
    if (placeModel.hasYelpData()) {
      html += `<p>Yelp Rating: ${placeModel.yelpData.rating}</p>`;
      links += ` | <a href="${placeModel.yelpData.url}" target="_blank">Yelp</a>`
    }

    html += `${links}</div>
          </div>
        </div>`;

    return html;
  }
}