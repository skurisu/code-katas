function openOrSenior(data){
  return data.map(function(current){
    if(current[0] >= 55 && current[1] > 7) {
      return "Senior";
    } else {
      return "Open";
    }
  })
}