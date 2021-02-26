function initMap() {
  L.mapquest.key = 'ogi6apcB6HmWPL6DGeXNiF1SbVFWlrTY';

  // 'map' refers to a <div> element with the ID map
  var map = L.mapquest.map('map', {
    center: [32.879649578122205, -117.23607433470148],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
    zoomControl: false
  });

  L.marker([32.879649578122205, -117.23607433470148]).addTo(map);
}