const mapboxgl = require("mapbox-gl");
const markerMaker = require('./marker')

mapboxgl.accessToken = 'pk.eyJ1Ijoic3NoZWlraDg1IiwiYSI6ImNqdDRqY2tvNTFrdDEzeWxrNXJnaWhsb3cifQ.VJfdIBlMFoaeQ_8Q0aDs-Q';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = markerMaker("activity", [-74.009151, 40.705086])
marker.addTo(map);

