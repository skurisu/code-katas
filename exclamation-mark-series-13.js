function product(s){
  var exclamationPoints = 0;
  var questionMarks = 0;
  
  var str = s.split("");
  
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

/* Refactor */
function product(s){
  var exclamationPoints = s.split('!').length - 1;
  var questionMarks = s.split('?').length - 1;

  return exclamationPoints * questionMarks;
}