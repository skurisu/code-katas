function explode(s) {
  var arr = s.split("");
  var newArr = [];
  
  arr.map(function(current){
    var num = parseInt(current);
    
    for(var i = 0; i < num; i++) {
      newArr.push(current);
    }
  })
  
  var final = newArr.join("");
  
  return final;
}