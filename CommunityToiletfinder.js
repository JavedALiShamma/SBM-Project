// Here we wil try to find the community toilet on the map
export let allCTs=[];
//  default allCTs;

let CTForm=document.getElementById("CTUserInput");
CTForm.addEventListener("submit",function(e){
    e.preventDefault();
   let preCT={
    Adress :CTForm["AdressOfCT"].value,
    latitud :CTForm["latitude"].value,
    longitute:CTForm["longitude"].value,
    Image:CTForm["CTImage"].files[0],
   }
   console.log(preCT);
   allCTs.push(preCT);
   console.log(allCTs);
  
});

