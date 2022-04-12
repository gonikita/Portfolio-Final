// Initialize and add the map
function initMap() {
    // The locations
    const michigan= { lat: 44.8734, lng: -86.0467 };
    const california = { lat: 32.7157, lng: -117.1611 };
    const alaska = { lat: 64.2008, lng: -149.4937 };
    const hawaii = { lat: 20.7984, lng: -156.3319 };
    const vermont = { lat: 44.5588, lng: -72.5778 };
    const wyoming = { lat: 43.0760, lng: -107.2903 };
    const banff = { lat: 51.1784, lng: -115.5708 };
    const africa= { lat: 8.7832, lng: 26.5085 };
    const italy= { lat: 41.8719, lng: 12.5674 };
    const greece= { lat: 39.0742, lng: 21.8243 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 2,
      center: vermont,
    });
    // The marker, positioned
    const marker = new google.maps.Marker({
        position: michigan,
        map: map,
    });
  
    const marker2 = new google.maps.Marker({
          position: california,
          map: map,
    });
      
    const marker3 = new google.maps.Marker({
          position: alaska,
          map: map,
    });    
  
    const marker4 = new google.maps.Marker({
          position: hawaii,
          map: map,
    });  
  
    const marker5 = new google.maps.Marker({
          position: vermont,
          map: map,
    });  
  
    const marker6 = new google.maps.Marker({
          position: wyoming,
          map: map,
    });  
  
    const marker7 = new google.maps.Marker({
          position: banff,
          map: map,
    });  
  
    const marker8 = new google.maps.Marker({
          position: africa,
          map: map,
    });  
  
    const marker9 = new google.maps.Marker({
          position: italy,
          map: map,
    });  
  
    const marker10 = new google.maps.Marker({
          position: greece,
          map: map,
    });  
  }