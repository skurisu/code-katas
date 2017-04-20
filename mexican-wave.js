function wave(str){
  let finalWave = [];
  let waveArr = str.split("");
  console.log(waveArr);
  
  for(var i = 0; i < waveArr.length; i++) {
    let capLetter = waveArr[i].toUpperCase();
    let lowLetter = waveArr[i].toLowerCase();
    let replace = waveArr.splice(i, 1, capLetter);
    
    if(waveArr[i] === " ") {
      
    } else {
      finalWave.push(waveArr.join(""))
    }
    
    waveArr.splice(i, 1, lowLetter);
    
  }
  
  return finalWave;
}

/* refactor */
function wave(str){
  let finalWave = [];
  let waveArr = str.split("");
  
  waveArr.map((c,i) => {
    let capLetter = c.toUpperCase();
    let lowLetter = c.toLowerCase();
    let replace = waveArr.splice(i, 1, capLetter);
    
    if(c !== " "){
      finalWave.push(waveArr.join(""));
    }
      
    waveArr.splice(i, 1, lowLetter);
  }); 

  return finalWave;
}