function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(39.2848183,-76.6905256),
        zoom:5,
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}