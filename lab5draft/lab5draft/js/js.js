// Initialize the map
var map = L.map("map10").setView([40, 0], 2);

// Load GeoJSON data from file
function loadData() {
  fetch("data/map01.geojson")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      // Add the GeoJSON data to the map
      L.geoJSON(data).addTo(map);
    })
    .catch(function(error) {
      console.error("Error loading GeoJSON data:", error);
    });
}

// Call the loadData function when the script loads
document.addEventListener("DOMContentLoaded", loadData);
