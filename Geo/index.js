// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
}

    // function geoPosition(){
    //     const geoLoc = navigator.geolocation
    //     const options = {timeout:6000}
    //     const Watchpos = geoLoc.watchPosition(centraMap, onError,options)
    //     }
    // }

    // let marker, map

    // function centraMap(position){
    //    const nuevaPos = {
    //     lat: position.coords.latitude,
    //     lng: position.coords.longitude
    //    }

    //    console.log(nuevaPos)
    //    marker.setPosition(nuevaPos)
    //    map.setCenter(nuevaPos)
    // }

    // function  onError(error){
    //     console.log(error)
    // }
  

