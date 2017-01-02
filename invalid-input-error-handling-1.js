function getCount(words) {
  var vowels = ['a','e','i','o','u'];
  var consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
  var numVowels = 0;
  var numConsonants = 0;
  
  if(typeof(words) === "string") {
  var newWords = words.toLowerCase().split("");
  for(i=0;i<newWords.length;i++){
    for(j=0;j<vowels.length;j++){
      if(vowels[j]===newWords[i]){
        numVowels++;
      }
    }
  }
 
  for(i=0;i<newWords.length;i++){
    for(j=0;j<consonants.length;j++){
      if(consonants[j]===newWords[i]){
      numConsonants++;
      }
    }
  }

  return {vowels: numVowels, consonants: numConsonants};
    
  } else {
    return {vowels: 0, consonants: 0}
  }
    
}