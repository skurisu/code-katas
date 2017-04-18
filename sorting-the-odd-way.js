function sortItOut(array){
  let evenArr = [];
  let oddArr = [];

  array.map((c)=>{
    let floored = Math.floor(c);
    
    if(floored%2 === 0){
      evenArr.push(c);
    } else {
      oddArr.push(c);
    }
  })

  evenArr = evenArr.sort((a,b) => b - a);
  oddArr = oddArr.sort((a,b) => a - b);
  
  const finalArr = oddArr.concat(evenArr);

  return (finalArr);
}


/* Refactor */
function sortItOut(array){
  return array.filter(a => Math.floor(a) % 2 !== 0).sort((a,b) => a - b)
  .concat(array.filter(a => Math.floor(a) % 2 === 0).sort((a,b) => b - a));
}