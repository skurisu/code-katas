Array.prototype.numberOfOccurrences = function(num) {
  var count = 0;
  this.map(function(current){
    if(current === num) {
      count += 1;
    }
  });
  return count;
};
