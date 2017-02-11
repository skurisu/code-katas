function averages(numbers) {
  var averageArray = [];
  if(numbers === null) {
    return [];
  }
  
  for(i = 0; i < numbers.length - 1; i++) {
    var total = numbers[i] + numbers[i + 1];
    var average = total/2;
    averageArray.push(average);
  }

  return averageArray;
}