Array.prototype.all = function (p) {
  //this : array
  //p : function
  var evaluated = this.map(function(current){
    return p(current);
  });
  
  var filtered = evaluated.filter(function(value){
    return value; 
  });
  
  if(evaluated.length === filtered.length) {
    return true;
  }
  
  return false;
};

Array.prototype.none = function (p) {
  // TODO: Implement this function
  var evaluated = this.map(function(current){
    return p(current);
  });
  
  var filtered = evaluated.filter(function(value){
    return value; 
  });
  
  if(filtered.length === 0) {
    return true;
  }
  return false;
};

Array.prototype.any = function (p) {
  // TODO: Implement this function
  var evaluated = this.map(function(current){
    return p(current);
  });
  
  var filtered = evaluated.filter(function(value){
    return value; 
  });
  
  if(filtered.length > 0) {
    return true;
  }
  return false;
};