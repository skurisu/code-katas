function longestWord(stringOfWords){
  var newWords = stringOfWords.split(" ");
  
  newWords.sort(function(a,b) {
    return a.length - b.length;
  })
  
  return newWords.pop();

}