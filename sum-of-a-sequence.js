const sequenceSum = (begin, end, step) => {
  // May the Force be with you
  if(begin > end) {
    return 0;
  }
  
  var sum = 0;
  
  for (i = begin; i <= end; i += step) {
    sum += i
  }
  
  return sum;
};