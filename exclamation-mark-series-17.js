function balance(left,right){
  var leftWeight = total(left);
  var rightWeight = total(right);
  
  if(leftWeight > rightWeight){
    return "Left";
  } 
  if (leftWeight < rightWeight) {
    return "Right";
  } 

  return "Balance";
  
}



function total(str){
  var val = str.split("");
  var total = 0;
  
  val.map((c) => {
    if(c === "!") {
      total+=2
    } else if (c === "?") {
      total+=3
    }
  })
  
  return total;
}