// Initialize Google Map
let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 41.37821, lng: 2.17557 },
    zoom: 19,
  });
}

initMap();
  
    
//     var map = new google.maps.Map(document.getElementById('map'), {
//       center: myLatLng,
//       zoom: 15 
//     });
  
   
//     var marker = new google.maps.Marker({
//       map: map,
//       position: myLatLng,
//       title: 'The Bean Machine'
//     });
//   }
  