const mapboxgl = require("mapbox-gl");

const iconURLS = {
  activity: 'url(http://i.imgur.com/WbMOfMl.png)',
  hotel: 'url(http://i.imgur.com/D9574Cu.png)',
  restaurant: 'url(http://i.imgur.com/cqR6pUI.png)'
}

const markerMaker = function(type, coords){
  const marker = document.createElement("div");
  marker.style.width = "32px";
  marker.style.height = "39px";
  marker.style.backgroundImage = iconURLS['type'];

  return new mapboxgl.Marker(marker).setLngLat(coords);
}


module.exports = markerMaker;
