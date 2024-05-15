// Initialize and add the map
let map;
let directionsService,directionsRenderer;
function initMap(){
  map= new google.maps.Map(document.getElementById('map'),{
    center:{lat:27.5563, lng:73.4771},
    zoom:15
  })
   directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);
}
/// Here we need to get the current location of the user 

initMap();


const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
getLocation();
var cord;
function showPosition(position) {
  x.innerHTML = "lat:" + position.coords.latitude +","+
  "lng:" + position.coords.longitude;
  cord=x.innerHTML;
  console.log(`${cord}`);
}
let fxnGetDirection=document.getElementById("getDirection").addEventListener("click",function(e){
  console.log("we are here");
  getDirection();
})

function getDirection(){
//  let source=`${cord}`;
let source={lat:27.56956,lng:73.47460}
 let dest={lat:27.55956,lng:73.47460};
 console.log(source);
 console.log(dest);
 let request={
  origin:source,
  destination:dest,
  travelMode:'DRIVING'
 }
 directionsService.route(request,function(result,status){
  if(status=="OK"){
    directionsRenderer.setDirections(result);
  }
 })
}


