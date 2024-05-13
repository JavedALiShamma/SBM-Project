function binFinderFunction(AdvancedMarkerElement,Map,map){
    const beachFlagImg = document.createElement("img");
  
    beachFlagImg.src ="bin-Image.png";
    const beachFlagMarkerView = new AdvancedMarkerElement({
    map,
    position: {lat:27.5563, lng:73.4772 },
    content: beachFlagImg,
    title: "Bin at near Station",
  });
  // Here we need to add all the Bins in the Map
  const beachFlagImg1=document.createElement("img");
  beachFlagImg1.src="bin-Image.png";
  const beachFlagMarkerView1= new AdvancedMarkerElement({
    map,
    position: {lat:27.5564, lng:73.4762 },
    content: beachFlagImg1,
    title: "Bin at near Bus stand",
  })
    };
    // import { allCTs } from './CommunityToiletfinder.js';