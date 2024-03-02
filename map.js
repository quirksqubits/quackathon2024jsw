
//google map stuff


//https://www.google.com/maps/place/China+Sea/@39.977758,-75.178834,18z/data=!4m6!3m5!1s0x89c... location code in googlemap link @39.977758,-75.178834

var places=[
    {name:"Beijing Garden",address:"4527 Wayne Ave, Philadelphia, PA 19144",food_type:"Chinese",price:20,location:{ lat: 40.022581, lng: -75.1646078 }},//change the code to the address, using google map to get the number
    {name:"Lucky Garden",address:"4215 Germantown Ave, Philadelphia, PA 19140",food_type:"Chinese",price:10,location:{ lat: 40.0184833, lng: -75.1598992 }},//change the code to the address, using google map to get the number
    {name:"Yanako Restaurant",address:"4345 Main St, Philadelphia, PA 19127",food_type:"Japanese",price:20,location:{ lat: 40.025605, lng: -75.226073 }},//change the code to the address, using google map to get the number
    {name:"At Ramen MNYK",address:"4357 Main St, Philadelphia, PA 19127",food_type:"Japanese",price:20,location:{ lat: 40.0257661, lng: -75.2264279 }},//change the code to the address, using google map to get the number
    {name:"Los Tacos Mexican Restaurant",address:"5104 N 5th St, Philadelphia, PA 19120",food_type:"Mexican",price:20,location:{ lat: 40.0290124, lng: -75.1349174 }},//change the code to the address, using google map to get the number
    {name:"Rico Mexican Tacos",address:"5104 N 5th St, Philadelphia, PA 19120",food_type:"Mexican",price:20,location:{ lat: 39.9994343, lng: -75.1368295 }},//change the code to the address, using google map to get the number
    {name:"Taqueria La Hacienda",address:"4715 N Front St, Philadelphia, PA 19120",food_type:"Mexican",price:30,location:{ lat: 40.0220358, lng: -75.1266171 }}, //change the code to the address, using google map to get the number
    {name:"China House",address:"5810 Greene St, Philadelphia, PA 19144",food_type:"Chinese",price:20,location:{ lat: 40.0249113, lng: -75.2627263 }},//change the code to the address, using google map to get the number
    {name:"First Wok",address:"129 W Chelten Ave, Philadelphia, PA 19144",food_type:"Chinese",price:20,location:{ lat: 40.0251159, lng: -75.3863372 }},//change the code to the address, using google map to get the number
    {name:"Ichiban Chinese & Japanese Restaurant",address:"6070 Ridge Ave, Philadelphia, PA 19128",food_type:"Japanese",price:20,location:{ lat: 40.0330982, lng: -75.2177196 }},//change the code to the address, using google map to get the number
    {name:"Ramen Yakitori + Bar",address:"4255 Main St, Philadelphia, PA 19127",food_type:"Japanese",price:30,location:{ lat: 40.0248488, lng: -75.2241015 }},//change the code to the address, using google map to get the number
    {name:"Mi Puebla Restaurant & Bakery",address:"7157 Germantown Ave, Philadelphia, PA 19119",food_type:"Mexican",price:25,location:{ lat: 40.0290124, lng: -75.1349174 }},//change the code to the address, using google map to get the number
    {name:"Cantina Calaca Feliz",address:"2321 Fairmount Ave, Philadelphia, PA 19130",food_type:"Mexican",price:40,location:{ lat: 39.9675203, lng: -75.178648 }},//change the code to the address, using google map to get the number
    {name:"La Roca",address:"4161 Main St, Philadelphia, PA 19127",food_type:"Mexican",price:10,location:{ lat: 40.023535, lng: -75.3598245 }}, //change the code to the address, using google map to get the number
    {name:"Las 3 Rancheritas",address:"956 N 5th St, Philadelphia, PA 19140",food_type:"Mexican",price:20,location:{ lat: 40.0118666, lng: -75.138599 }},
    {name:"Taqueria La Raza",address:"227 W Allegheny Ave, Philadelphia, PA 19133",food_type:"Mexican",price:20,location:{ lat: 39.9994209, lng: -75.1368157 }},
    {name:"4 Seasons Mexican Restaurant",address:"3503 B St, Philadelphia, PA 19134",food_type:"Mexican",price:20,location:{ lat: 40.0032957, lng: -75.1266626 }},
    {name:"Mi Puebla Restaurant & Bakery",address:"7157 Germantown Ave, Philadelphia, PA 19119",food_type:"Mexican",price:20,location:{lat: 40.0599515, lng: -75.1933219 }},
    {name:"Taco Bell",address:"4430 N Broad St, Philadelphia, PA 19144",food_type:"Mexican",price:15,location:{ lat: 40.0212655, lng: -75.1514211 }},
    {name:"Chipotle Mexican Grill",address:"2800 Fox St, Philadelphia, PA 19129",food_type:"Mexican",price:15,location:{ lat: 40.0112359, lng: -75.1783399 }},
    {name:"El Poquito",address:"8201 Germantown Ave, Philadelphia, PA 19118",food_type:"Mexican",price:30,location:{ lat: 40.0735444, lng: -75.2052987 }},
    {name:"La Casa Del Buen Gusto",address:"657 E Allegheny Ave, Philadelphia, PA 19134",food_type:"Mexican",price:20,location:{ lat: 39.9972353, lng: -75.2230404 }},
    {name:"Chihuaha Bar Restaurant",address:"5050 N 5th St, Philadelphia, PA 19120",food_type:"Mexican",price:75,location:{ lat: 40.0284765, lng: -75.134989 }},
    {name:"Que Chula Es Puebla Inc",address:"1356 N 2nd St, Philadelphia, PA 19122",food_type:"Mexican",price:20,location:{ lat: 39.9723927, lng: -75.141827 }},








  

  


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
    const myLatLng = { lat: 40.0329778, lng: -75.1736438 };//change the code to your address, using google map to get the number

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
