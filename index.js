// Initialize and add the map
let map;

// import { allCTs } from './CommunityToilet finder.js';
async function initMap() {
  // The location of Uluru
  const position = { lat: 27.5578, lng: 73.4740 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const image1 =    "https://cdn-icons-png.flaticon.com/512/1077/1077114.png";
  // const marker = new AdvancedMarkerElement({
  //   map: map,
  //   position: {lat:27.5563, lng:73.4771},
  //   title: "Nagar Palika Nokha",
  //   label:"Nagar Palika Nokha",
  //   // // Animation:google.maps.Animation.DROP,
  //   // // icon: image1,   
  // });
  let allBinBtn=document.getElementById("binBtn");
  allBinBtn.addEventListener("click",function(){
    binFinderFunction(AdvancedMarkerElement,Map,map);
  });

  
}

initMap();




