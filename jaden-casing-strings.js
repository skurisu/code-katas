String.prototype.toJadenCase = function () {
  var arr = this.split(" ");
  var transformedArr = [];
  
  arr.map(function(current){
    var something = current.charAt(0).toUpperCase() + current.slice(1);
    transformedArr.push(something)
  })
  
  var final = transformedArr.join(" ")
  console.log(final);
  
  
};