function iqTest(numbers){

  var numArr = numbers.split(" ")
    .map(function(current){
      return parseInt(current)
    })

  var odd = numArr.filter(function(val){ 
    return val % 2 === 1
  });
  
  var even = numArr.filter(function(val){ 
    return val % 2 === 0
  });
  

  
  if(even.length > odd.length) {
    return numArr.indexOf(odd[0]) + 1;
  } else {
    return numArr.indexOf(even[0]) + 1;
  }
    
}
