// Introduction to Currying and Partial Application

// currying functions restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

function unCurried(x, y) {
    return x + y;
  }
  
  //Curried function
  function curried(x) {
    return function(y) {
      return x + y;
    }
  }
  //Alternative using ES6
  const curried = x => y => x + y
  
  console.log(curried(1)(2));

  function add(x) {
    // Only change code below this line
  return add = x => y => z => x + y + z;
  
    // Only change code above this line
  }
  add(10)(20)(30);