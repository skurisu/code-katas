var SequenceSum = (function() {
  function SequenceSum() {}
  
  SequenceSum.showSequence = function(count) {
    if(count < 0) {
      return count + "<0";
    } else if (count === 0) {
      return count + "=0"
    } else {
      var nums = [];
      for(i = 0; i <= count; i++) {
        nums.push(i);
      }

      var sum = nums.reduce(function(a,b) {
        return a + b;
      }, 0)

      var sequence = nums.join('+');

      return sequence + " = " + sum;
    }
  };

  return SequenceSum;

})();

/* Refactor 1*/
var SequenceSum = (function() {
  function SequenceSum() {}

  function buildRange(end) {
    var nums = [];
    for(i = 0; i <= end; i++) {
      nums.push(i);
    }
    return nums;
  }

  function sumArray(array) {
    var sum = array.reduce(function(a,b) {
      return a + b;
    }, 0)
    return sum;
  }
  
  SequenceSum.showSequence = function(count) {
    if(count < 0) {
      return count + "<0";
    } else if (count === 0) {
      return count + "=0"
    } else {
      var nums = buildRange(count);
      var sum = sumArray(nums);

      var sequence = nums.join('+');

      return sequence + " = " + sum;
    }
  };

  return SequenceSum; 

})();

/* Refactor 2 */
var SequenceSum = (function() {
  function SequenceSum() {}

  function buildRange(end) {
    var nums = [];
    for(i = 0; i <= end; i++) {
      nums.push(i);
    }
    return nums;
  }

  function sumArray(array) {
    var sum = array.reduce(function(a,b) {
      return a + b;
    }, 0)
    return sum;
  }
  
  SequenceSum.showSequence = function(count) {
    if(count < 0) return count + "<0";

    if (count === 0) return count + "=0";

    var nums = buildRange(count);
    var sum = sumArray(nums);

    var sequence = nums.join('+');

    return sequence + " = " + sum;
  };

  return SequenceSum;

})();