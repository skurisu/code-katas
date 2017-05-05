var kookaCounter = function(laughing) {
  let count = 0;
  var arr = [...laughing];
  
  if(laughing.length === 0) return count;
  else if (laughing.length > 0) {
    count++
    arr.map((c,i,a) => {
      if(c === "H" && a[i+2] === "h") {
        count++
      } else if (c === "h" && a[i+2] === "H") {
        count ++
      }
    })
  }
  
  return count;
  
}