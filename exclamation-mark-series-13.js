function product(s){
  var exclamationPoints = 0;
  var questionMarks = 0;
  
  var str = s.split("");
  
  console.log(str)
  
  str.map(function(current){
    if (current === "!") {
      exclamationPoints += 1;
    }
    if(current === "?") {
      questionMarks += 1;
    }
  })

  return exclamationPoints * questionMarks;
}