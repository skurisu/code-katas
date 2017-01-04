function XO(str) {
  var x = [];
  var o = [];

  var arr = str.toLowerCase().split("");
  arr.map(function(char){
    if(char === "x"){
      x.push(char);
    }
    if(char === "o"){
      o.push(char)
    }
  })
  
  return x.length === o.length;
}