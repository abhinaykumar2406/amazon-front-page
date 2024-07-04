if ("geolocation" in navigator) {
    // Geolocation is available
} else {
    // Geolocation is not available
}
navigator.geolocation.getCurrentPosition(function(position) {
    // Retrieve latitude and longitude from the position object
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    // Do something with the latitude and longitude
});
navigator.geolocation.getCurrentPosition(function(position) {
    // Success
}, function(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            // User denied the request for Geolocation
            break;
        case error.POSITION_UNAVAILABLE:
            // Location information is unavailable
            break;
        case error.TIMEOUT:
            // The request to get user location timed out
            break;
        case error.UNKNOWN_ERROR:
            // An unknown error occurred
            break;
    }
});