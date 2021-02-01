// Introduction to Basic Algorithm Scripting   
// ---------------------------------------------     


/* A computer algorithm is a sequence of steps that is followed to achieve a particular outcome. To write an algorithm, you must first understand a problem, and then solve it with coding. */

/* Hint: If you get stuck, try using console.log() to log variable values to the console. This will help to debug problems. */

// C1.Convert Celsius to Fahrenheit ------------------------------------------------------

/* function convertToF(celsius) {
    let fahrenheit;
    fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  const temperature = convertToF(30);
  console.log(temperature); */

//------------------------------------------------------------------------------------------

// C2. Reverse a String---------------------------------------------------------------------

/* function reverseString(str) {
    let reverse = '';
    for(let i = 0; i < str.length; i++){
      let char =str[i];
      reverse =char + reverse;
  
    }
    return reverse;
  }
  
  console.log(reverseString("hello")); */

//--------------------------------------------------------------------------------------

//   C3. Factorialize a Number -----------------------------------------------------------

/* function factorialize(num) {
    let factorial = 1;
    if(num == 0){
  
      return 1;
    }
    else{
  
      factorial = num * factorialize(num-1);
    }
    return factorial;
  }
  factorialize(5); */

//-------------------------------------------------------------------------------------

// C4. Find the length of Longest Word in a String--------------------------------------- 

/* function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(word => word.length));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog"); */

//--------------------------------------------------------------------------------------

// C5. Return Largest Numbers in ArraysPassed ------------------------------------------
/* function largestOfFour(arr) {
    var results = [];
    for (var i = 0; i < arr.length; i++) {
      var largestNumber = arr[i][0];
      console.log(largestNumber);
      for (var j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }
  
      results[i] = largestNumber;
    }
  
    return results;
  }
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); */

//----------------------------------------------------------------------------------------

//   C6. Confirm the Ending --------------------------------------------------------------
/* function confirmEnding(str, target) {
    for(var i = 0; i < str.length; i++){
  if(str.substr(i-str.length) === target){
  return true;
  }
  }
  return false;
  }
  
  confirmEnding("Bastian", "n"); */


//----------------------------------------------------------------------------------------

// C7. Repeat a String Repeat a String----------------------------------------------------

/* Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method. */

/* function repeatStringNumTimes(str, num) {
  let newString = "";
  while(num >0){

    newString = newString + str;
    num--;
  }
  return newString;

}
repeatStringNumTimes("abc", 3); */

//----------------------------------------------------------------------------------------

// C8.Truncate a String----------------------------------------------------

/* Passed Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending. */

/* function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8); */

//---------------------------------------------------------------------------------------

// C9. Finders Keepers----------------------------------------

/* Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined. */

/* function findElement(arr, func) {
  let num = 0;
  for(let i = 0; i <= arr.length; i++ ){
    num = arr[i];
    if(func(num)){
      return num;
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0); */

//---------------------------------------------------------------------------------------

// C10. Boo who--------------------------------------------------------------------------

/* Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false. */

/* function booWho(bool) {
  if(typeof bool == 'boolean'){
    return true;
  }
  return false;
}
booWho(null); */

//---------------------------------------------------------------------------------------

// C11. Title Case a Sentence -----------------------------------------------------------

/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case. */

/* function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}
titleCase("I'm a little tea pot"); */

//----------------------------------------------------------------------------------------

// C12. Slice and Splice-----------------------------------------------------------------

/* function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
   let localArray = arr2.slice();
   for (let i = 0; i < arr1.length; i++) {
     localArray.splice(n, 0, arr1[i]);
     n++;
   }
   return localArray;
 } */
//  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

//----------------------------------------------------------------------------------------

// C13. Falsy Bouncer----------------------------------------------------------------------

/* Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean. */

/* function bouncer(arr) {
  
  return arr.filter(Boolean); //taking only the boolean values
}
console.log(bouncer([7, "ate", "", false, 9])); */

//----------------------------------------------------------------------------------------

//C14. Where do I Belong-------------------------------------------------------------------

function getIndexToIns(arr, num) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (num > arr[i]) {
      count++;
    }
  } // counts how many array numbers are smaller than num
  return count;
}

// console.log(getIndexToIns([40, 60], 1));

//----------------------------------------------------------------------------------------

// C15. Mutations ------------------------------------------------------------------------

/* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
 */
function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
console.log(mutation(["hello", "hey"]));

//---------------------------------------------------------------------------------------

// C16. Chunky Monkey -----------------------------------------------------------------

function chunkArrayInGroups(arr, size) {
  var newArr = [];
   while (arr.length) {
     newArr.push(arr.splice(0, size));
   }
   return newArr;
 }
 
 console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));


