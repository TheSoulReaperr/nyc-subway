// Eslint configuration for editor.
/* globals google */
/* eslint-env browser */
/* eslint quotes: ["warn", "single"]*/

function initMap() {
  const map = new google.maps.Map(document.querySelector('#map'), {
    zoom: 11,
    center: {
      // New York City
      lat: 40.7305,
      lng: -73.9091
    }
  });
  map.data.loadGeoJson('/data/subway-stations');
  map.data.loadGeoJson('/data/subway-lines');
}
