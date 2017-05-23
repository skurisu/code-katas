function twoOldestAges(ages){
  const twoOldest = ages.sort((a,b) => a-b)
    .slice(ages.length-2, ages.length);
  
  return twoOldest;

}