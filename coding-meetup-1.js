function countDevelopers(list) {
 let programmers = 0;
 
 list.map(c => {
   if(c.continent === "Europe" && c.language === "JavaScript") {
     programmers++
   }
 })
 
 return programmers;
}