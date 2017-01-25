function replaceNth(text, n, oldValue, newValue) {
  var arr = text.split("");
  var count = 0;


  arr.map(function(current, index){
    if(current === oldValue) {
      count++;
      if(count%n === 0) {
        arr.splice(index, 1, newValue)
      }
    }
  })
  
  if(n <= 0 || n > count) {
    return text;
  }
  
  var newText = arr.join("");
  
  return newText;
}