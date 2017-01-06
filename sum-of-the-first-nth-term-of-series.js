function SeriesSum(n) {
  if(n === 0) return "0.00";
  if(n === 1) return "1.00";

  
  var nums = [];
  var denominator = 1;
  
  for(i = 0; i < n - 1; i ++) {
    denominator += 3;
    var fraction = 1/denominator;
    nums.push(fraction);
  }
  
  var sum = nums.reduce(function(a, b) {
    return a + b;
  }, 0);
  
  var total = (1 + sum).toFixed(2);
  
  return total

}