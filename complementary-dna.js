function DNAStrand(dna){
  var arr = dna.split("");
  
  arr.map(function(current, index){
    for(var prop in pairs) {
      if(current === prop) {
        arr.splice(index, 1, pairs[prop]);
      }
    }
  });
  
  var newDna = arr.join("");
  return newDna;
}

var pairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C"
};
