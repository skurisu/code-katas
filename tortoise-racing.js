function race(v1, v2, g) {
  if(v1 >= v2){
    return null;
  }
   var v1S = v1/60/60;
   var v2S = v2/60/60;
   
   var time = 0;
   var v1Position = position(v1S, time, g);
   var v2Position = position(v2S, time, 0);
   
   while(v1Position > v2Position){
     time++
     v1Position = position(v1S, time, g);
     v2Position = position(v2S, time, 0);
   }
  
  time--
  
  
  var hours = time/60/60;
  var h = Math.floor(hours);
  
  var minutes = (time/60 - h*60);
  var m = Math.floor(minutes);
  
  var seconds = (time - h*60*60 - m*60);
  var s = Math.round(seconds);
  
  return [h, m, s]
    
}

function position (rate, time, lead) {
  return rate * time + lead;
}