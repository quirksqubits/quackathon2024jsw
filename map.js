
//google map stuff


//https://www.google.com/maps/place/China+Sea/@39.977758,-75.178834,18z/data=!4m6!3m5!1s0x89c... location code in googlemap link @39.977758,-75.178834


var places=[
    {name:"Beijing Garden",address:"4527 Wayne Ave, Philadelphia, PA 19144",food_type:"Chinese",price:20,location:{ lat: 40.022581, lng: -75.1646078 }},//change the code to the address, using google map to get the number
    {name:"Lucky Garden",address:"4215 Germantown Ave, Philadelphia, PA 19140",food_type:"Chinese",price:10,location:{ lat: 40.0184833, lng: -75.1598992 }},//change the code to the address, using google map to get the number
    {name:"Yanako Restaurant",address:"4345 Main St, Philadelphia, PA 19127",food_type:"Japanese",price:20,location:{ lat: 40.025605, lng: -75.226073 }},//change the code to the address, using google map to get the number
    {name:"At Ramen MNYK",address:"4357 Main St, Philadelphia, PA 19127",food_type:"Japanese",price:20,location:{ lat: 40.0257661, lng: -75.2264279 }},//change the code to the address, using google map to get the number
    {name:"e",address:"somewhere",food_type:"M",price:50,location:{ lat: -25.363, lng: 131.048 }},//change the code to the address, using google map to get the number
    {name:"f",address:"somewhere",food_type:"M",price:120,location:{ lat: -25.364, lng: 131.048 }},//change the code to the address, using google map to get the number
    {name:"g",address:"somewhere",food_type:"M",price:30,location:{ lat: -25.365, lng: 131.048 }}, //change the code to the address, using google map to get the number
    {name:"aa",address:"somewhere",food_type:"C",price:20,location:{ lat: -25.363, lng: 131.044 }},//change the code to the address, using google map to get the number
    {name:"ba",address:"somewhere",food_type:"C",price:55,location:{ lat: -25.364, lng: 131.045 }},//change the code to the address, using google map to get the number
    {name:"ca",address:"somewhere",food_type:"J",price:100,location:{ lat: -25.365, lng: 131.046 }},//change the code to the address, using google map to get the number
    {name:"da",address:"somewhere",food_type:"J",price:30,location:{ lat: -25.366, lng: 131.047 }},//change the code to the address, using google map to get the number
    {name:"ea",address:"somewhere",food_type:"M",price:66,location:{ lat: -25.367, lng: 131.048 }},//change the code to the address, using google map to get the number
    {name:"fa",address:"somewhere",food_type:"M",price:110,location:{ lat: -25.368, lng: 131.048 }},//change the code to the address, using google map to get the number
    {name:"ga",address:"somewhere",food_type:"M",price:30,location:{ lat: -25.369, lng: 131.048 }} //change the code to the address, using google map to get the number
  
  ]
  
  var map;
  var markers = [];
  function addmakers(map,f_t,high,low){
    markers.forEach(el =>{
        el.setMap(null);
    });
    markers = [];
    places.forEach(el => {
        if (el.food_type!=f_t||el.price<low||el.price>high){
            return;
        }
        var marker = new google.maps.Marker({
            position: el.location,
            map,
            title: el.name,
          });
          markers.push(marker);
  
          var infowindow = new google.maps.InfoWindow({
            content: '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">' + el.name + '</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Address: </b>" + el.address + "</p>" +
    "<p><b>Food type: </b>" + el.food_type +
    "<p><b>Price: </b>" + el.price +
    "</div>" +
    "</div>",
            ariaLabel: "info",
        });
    
    
        // Open InfoWindow when marker is clicked
        marker.addListener("click", () => {
            infowindow.open({
                anchor: marker,
                map,
            });
            //console.log("cliked");
        });
  
        
    });
  }
  
  function initMap(ft,high,low) {
    const myLatLng = { lat: 40.0331554, lng: -75.1708688 };//change the code to your address, using google map to get the number
    
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: myLatLng,
    });
  
    
  
  }
  
  window.initMap = initMap;
  
  $(document).ready(function() {
    
    $('#sub_mit').click(function(){
        addmakers(map,$('#food_type').val(),$('#high').val(),$('#low').val());
        
    });
  });
  
    