function gHappy(str) {
  let bool = true;
  const arr = [...str];
  
  arr.map((c,i) => {
    if(c === "g") {
      if(arr[i+1] !== "g" && arr[i-1] !== "g") {
        bool = false;
      }
    }
  })

  return bool;
}