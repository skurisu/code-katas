function scratch(lottery){
  const winnings = [];
  
  lottery.map((c) => {
    const ticketVals = c.split(" ");
    if(ticketVals[0] === ticketVals[1] && ticketVals[1] === ticketVals[2]) {
      winnings.push(parseInt(ticketVals[3]));
    }
  })
  
  const total = winnings.reduce((prev,current) => {
    return prev + current;
  },0);
  
  return total;
  
}