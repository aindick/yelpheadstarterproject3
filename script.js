
mapboxgl.accessToken = 'pk.eyJ1IjoicXVlZW5vZmNhY3RpIiwiYSI6ImNsNXU2YnZndjBjcnozanBkZ3NhYmZha28ifQ.hVzI1hW9JhfC8S3Q_4-4mQ';
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, 
    {enableHighAccuracy: true})

    function successLocation(position){
       
        setupMap([position.coords.longitude, position.coords.latitude])
    }
    function errorLocation(){
        setupMap([43.0481,76.1474])
    }
 function setupMap(center){

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: center,
  
    });
  
    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)
  
    var directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken
    })
  
    map.addControl(directions, "top-left")

    const marker = new mapboxgl.Marker({
        draggable: true
        })
        .setLngLat([0, 0])
        .addTo(map);
         
        function onDragEnd() {
        const lngLat = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
        }
         
        marker.on('dragend', onDragEnd);

}