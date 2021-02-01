// Debugging


/* Debugging is a valuable and necessary tool for programmers. Debugging is the process of finding exactly what isn't working and fixing it.it helps to develop (and follow) a step-by-step approach to review your code.

there are three types of error in programming
1. syntax errors that prevent a program from running
2. runtime errors when code fails to execute or has unexpected behavior
3. semantic (or logical) errors when code doesn't do what it's meant to. */

// example of syntax error
// fuction hello(){

//     console.log("Hey there");
// }
// "function" keyword is misspelled and there's a missing parenthesis


// example of runtime error
function loopy() {
    while (true) {
        console.log("Hello, world!");
    }
}
// Calling loopy starts an infinite loop, which may crash your browser


// example of semantic errors
function calcAreaOfRect(w, h) {
    return w + h; // This should be w * h
}
let myRectArea = calcAreaOfRect(2, 3);


function dummy(str) {
    return str * 2;
}
// Correct syntax and the program executes, but this gives the wrong answer


//---------------------------------------------------------------------------------------------
// C1.Use the JavaScript Console to Check the Value of a Variable
/* Both Chrome and Firefox have excellent JavaScript consoles, also known as DevTools, for debugging your JavaScript.The console.log() method, which "prints" the output of what's within its parentheses to the console, will likely be the most helpful debugging tool. */

var a = 1;
var b = 2;
var c = a + b;
console.log(c);

//--------------------------------------------------------------------------------------

// C2.Understanding the Differences between the freeCodeCamp and Browser Console
/* When you run ordinary JavaScript, the browser's console will display your console.log() statements the exact number of times it is called.

The freeCodeCamp console will print your console.log() statements a short time after the editor detects a change in the script, as well as during testing. */

// Open your browser console.
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
// Use console.log() to print the output variable.
console.log(output);
// Run the tests to see the difference between the two consoles.

// Now, add console.clear() before your console.log() to clear the browser console, and pass the tests.

// Normally when we run a code in freecodecamp the code executes on both browser and freecodecamp console by default. if we don't want to use browser console we will just write following in the freecodecamp console, we can not  write a thousands of codes in browser console. 
console.clear();


//--------------------------------------------------------------------------------------

// C3.Use typeof to Check the Type of a Variable------------------------------------

/* You can use typeof to check the data structure, or type, of a variable.This is useful in debugging when working with multiple data types.If you think you're adding two numbers, but one is actually a string, the results can be unexpected. Type errors can lurk in calculations or function calls. Be careful especially when you're accessing and working with external data in the form of a JavaScript Object Notation(JSON) object.

Here are some examples using typeof:

console.log(typeof ""); // outputs "string"
console.log(typeof 0); // outputs "number"
console.log(typeof []); // outputs "object"
console.log(typeof {}); // outputs "object"
JavaScript recognizes six primitive(immutable) data types: Boolean, Null, Undefined, Number, String, and Symbol(new with ES6) and one type for mutable items: Object.Note that in JavaScript, arrays are technically a type of object. */

let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof seven);
console.log(typeof three);

//Catch Misspelled Variable and Function Names---------------------
/* let receivables = 10;
let payables = 8;
let netWorkingCapital = recievables - payable;
console.log(`Net working capital is: ${netWorkingCapital}`); */


//-----------------------------------------------------------------------------------

//C4. Catch Unclosed Parentheses, Brackets, Braces and Quotes----------------------
/* let myArray = [1, 2, 3;
let arraySum = myArray.reduce((previous, current => previous + current);
console.log(`Sum of array values is: ${arraySum}`); */


//Catch Mixed Usage of Single and Double Quotes----------------------------

/* let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml); */


// Catch Use of Assignment Operator Instead of Equality Operator also known strict equality operator

// the triple === tests for strict equality, meaning both value and type are the same).
console.log('1' == 1); //return true
console.log('1' === 1); //return false

//C5.Catch Missing Open and Closing Parenthesis After a Function Call

/* function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
  }
  
  let result = getNine;
  console.log(result); */

  //C6.Catch Arguments Passed in the Wrong Order When Calling a Function
  function raiseToPower(b, e) {
    //Math.pow method will power value of b, e
    return Math.pow(b, e);

  }
  
  let base = 2;
  let exp = 3;
  let power = raiseToPower(exp, base);
//   console.log(power);

  //C7. Use Caution When Reinitializing Variables Inside a Loop

  /* Sometimes it's necessary to save information, increment counters, or re-set variables within a loop. A potential issue is when variables either should be reinitialized, and aren't, or vice versa. This is particularly dangerous if you accidentally reset the variable being used for the terminal condition, causing an infinite loop.

Printing variable values with each cycle of your loop by using console.log() can uncover buggy behavior related to resetting, or failing to reset a variable. */

function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    
    for (let i = 1; i <= m; i++) {
      // Adds the m-th row into newArray
      let row = [];
  
      for (let j = 1; j <= n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
//   console.log(matrix);

//C8. Prevent Infinite Loops with a Valid Terminal Condition 

function myFunc() {
    for (let i = 1; i != 4; i += 2) {
      console.log("Still going!");
    }
  }
  //myFunc();


  let friends = [1, 2, 3];
  let checking = typeof friends;
  console.log(checking);