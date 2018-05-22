var map;
function initMap() {
    var locationEast = {lat: 39.290, lng: -76.612};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: locationEast,
      gestureHandling: 'greedy'
    })};