function initMap() {
    var element = document.getElementById('map');
    var options = {
        zoom: 17,
        center: {
            lat: 43.1138319,
            lng: 131.9405093
        },
    };

    var myMap = new google.maps.Map(element, options);

    var marker = new google.maps.Marker({
        position: {
            lat: 43.1138319,
            lng: 131.9405093
        },
        map: myMap,
        icon: 'assets/images/marker.svg'
    });
}