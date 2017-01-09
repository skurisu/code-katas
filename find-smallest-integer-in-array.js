class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(null,args);
  }
}

/* practice with reduce */
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce(function(prev,current){
      if(prev < current) {
        return prev;
      }
      return current;
    }, Infinity)
  }
}