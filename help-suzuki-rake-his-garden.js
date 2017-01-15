function rakeGarden(garden) {
  var splitGarden = garden.split(" ");
  
  var gardens = splitGarden.map(function(current, index){
    if(current !== "gravel" && current !== "rock") {
      return "gravel";
    }
    return current;
  })
  
  var rakedGarden = gardens.join(" ");
  return rakedGarden;
}