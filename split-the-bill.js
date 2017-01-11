function splitTheBill(x) {
  var average = Object.keys(x).reduce(function(prev, current){
    return prev + x[current];
  },0) / Object.keys(x).length;
  
  Object.keys(x).forEach(function(key){
    var num = Number((x[key] - average).toFixed(2));
    x[key] = num;
  })

  return x;

}