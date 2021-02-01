// ES6 TUTORIAL

/* Introduction to the ES6 Challenges
ECMAScript is a standardized version of JavaScript with the goal of unifying the language's specifications and features. As all major browsers and JavaScript-runtimes follow this specification, the term ECMAScript is interchangeable with the term JavaScript.

Most of the challenges on freeCodeCamp use the ECMAScript 5 (ES5) specification of the language, finalized in 2009. But JavaScript is an evolving programming language. As features are added and revisions are made, new versions of the language are released for use by developers.

The most recent standardized version is called ECMAScript 6 (ES6), released in 2015. This new version of the language adds some powerful features that will be covered in this section of challenges, including:

Arrow functions
Classes
Modules
Promises
Generators
let and const
Note: Not all browsers support ES6 features. If you use ES6 in your own projects, you may need to use a program (transpiler) to convert your ES6 code into ES5 until browsers support ES6. */

//C1.ES6: Explore Differences Between the var and let Keywords---------------

/* One of the biggest problems with declaring variables with the var keyword is that you can overwrite variable declarations without an error. */

/* var camper = 'James';
var camper = 'David';
console.log(camper); */
// logs 'David'
/* As you can see in the code above, the camper variable is originally declared as James and then overridden to be David. In a small application, you might not run into this type of problem, but when your code becomes larger, you might accidentally overwrite a variable that you did not intend to overwrite. Because this behavior does not throw an error, searching and fixing bugs becomes more difficult.
A new keyword called let was introduced in ES6 to solve this potential issue with the var keyword. If you were to replace var with let in the variable declarations of the code above, the result would be an error. */
/*
let camper = 'James';
let camper = 'David'; */ // throws an error

/* "use strict". This enables Strict Mode, which catches common coding mistakes and "unsafe" actions. For instance: */

/* "use strict";
x = 3.14; */ // throws an error because x is not declared

/* let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";
    return quote;
}
console.log(catTalk(quote)); */


//.......................................................................


//C2.ES6: Compare Scopes of the var and let Keywords------------------

/* When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.

The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression. */

/* var numArray = [];
for (var i = 0; i < 5; i++) {
    numArray.push(i);
    console.log(numArray);
}
console.log(i); */

/* let numArray = [];
for (let i = 0; i < 5; i++) {
    if ( i == 2) {
        numArray = function () {
            return i;
        };
    }
}
console.log(numArray());
console.log(i); */

/* function checkScope() {
    let i = 'function scope';
    if (true) {
        const i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}
checkScope(); */


//.......................................................................


//C3.ES6: Declare a Read-Only Variable with the const Keyword
/* The keyword let is not the only new way to declare variables. In ES6, you can also declare variables using the const keyword.

const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned.

const FAV_PET = "Cats";
FAV_PET = "Dogs"; // returns error
As you can see, trying to reassign a variable declared with const will throw an error. You should always name variables you don't want to reassign using the const keyword. This helps when you accidentally attempt to reassign a variable that is meant to stay constant. A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.

Note: It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays). In a later challenge you will see an example of a lowercase variable identifier being used for an array. */

/* function printManyTimes(str) {

    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
    }

}
printManyTimes("freeCodeCamp"); */

//.......................................................................


//C4.ES6: Mutate an Array Declared with const

/* The const declaration has many use cases in modern JavaScript.

Some developers prefer to assign all their variables using const by default, unless they know they will need to reassign the value. Only in that case, they use let.

However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.
 */
/* const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45] */

/* As you can see, you can mutate the object [5, 6, 7] itself and the variable s will still point to the altered array [5, 6, 45]. Like all arrays, the array elements in s are mutable, but because const was used, you cannot use the variable identifier s to point to a different array using the assignment operator.

An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.
 */
/* const s = [5, 7, 2];
function editInPlace() {

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

}
editInPlace(); */

//.......................................................................


//C5.ES6: Prevent Object Mutation---------------------

/* As seen in the previous challenge, const declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation.

Once the object is frozen, you can no longer add, update, or delete properties from it. Any attempt at changing the object will be rejected without an error.
 */

/*
let obj = {

    name : 'Rony Jackson',
    profession : 'Web Designer'
};
Object.freeze(obj);
obj.name = "ujjal";
obj.nationality = 'Bangladeshi';
console.log(obj); */


//.......................................................................


//C6.ES6: Use Arrow Functions to Write Concise Anonymous Functions---------------

/* In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.

To achieve this, we often use the following syntax:

const myFunc = function() {
  const myVar = "value";
  return myVar;
}
ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:

const myFunc = () => {
  const myVar = "value";
  return myVar;
}
When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:

const myFunc = () => "value";
This code will still return the string value by default.
 */

/* const magic = () => {
    return new Date();
  };
  console.log(magic()); */

//Write Arrow Functions with Parameters-----------------

// Just like a regular function, you can pass arguments into an arrow function.
/* const magic = (item) => item * 2;
console.log(magic(3)); */

/* If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted. */

// it is possible to pass more than one parameter in arrow function

/* const multipleItem = (item, product) => item * product;
console.log(multipleItem(4, 7)); */


/* var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
  };
  console.log(myConcat([1, 2], [3, 4, 5])); */

// alternative of the above code
// This is the arrow function
/* const myConcat = (arr2, arr1) => arr2.concat(arr1);
console.log(myConcat([1, 2], [3, 4, 5])); */


//.......................................................................


//C7.ES6: Set Default Parameters for Your Functions-------------------

/*   In order to help us create more flexible functions, ES6 introduces default parameters for functions.

  Check out this code:

  const greeting = (name = "Anonymous") => "Hello " + name;

  console.log(greeting("John")); // Hello John
  console.log(greeting()); // Hello Anonymous */

//   the default parameter
/*   const autoRobot = (robot = "Chitti") => "Hello " + robot;
  console.log(autoRobot("Ra.One"));
  console.log(autoRobot());   */

/*   The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter name will receive its default value "Anonymous" when you do not provide a value for the parameter. You can add default values for as many parameters as you want.

const increment = (number = 0 , value = 1) => number + value;
console.log(increment());

*/

//.......................................................................

//C8.ES6: Use the Rest Parameter with Function Parameters------------

/* In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

Check out this code:
 */
/* function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments. */

/* function myRest(...xyz){

    return ("You have passed " + xyz.length + " arguments");

}
console.log(myRest(4, 4, 5, 9, 0 ,3));
console.log(myRest(4, null, [2, 3, 5], "JavaScript")); */


/* const sum = (x, y, z) => {
    const args = [x, y, z];
    // here (a, b) will be combine in one value and count as a value of a
    return args.reduce((a, b) => a + b, 0);
  }
  console.log(sum(2, 3, 4));

  const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }
  console.log(sum(2, 4, 5, 6, 8)); */


//.......................................................................


//C9.ES6: Use the Spread Operator to Evaluate Arrays In-Place-----------

/* ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

The ES5 code below uses apply() to compute the maximum value in an array:

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89
We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array. The spread operator makes this syntax much better to read and maintain.

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89


...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:

const spreaded = ...arr; // will throw a syntax error */

// in ES5
/* const spreadOperator = [2, 56, 234, 7, 9];
let maximum = Math.max.apply(null, spreadOperator) ;
console.log(maximum);

// in ES6
const spreadArray = [2, 56, 234, 7, 9];
let  maximus = Math.max(...spreadArray);
console.log(maximus); */

/* const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Copy all elements of arr1

console.log(arr2); */

//.......................................................................

//C10.ES6: Use Destructuring Assignment to Extract Values from Objects

/* Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

Consider the following ES5 code:

const user = { name: 'John Doe', age: 34 };

const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34

Here's an equivalent assignment statement using the ES6 destructuring syntax:

const { name, age } = user;
// name = 'John Doe', age = 34

Here, the name and age variables will be created and assigned the values of their respective values from the user object. You can see how much cleaner this is.

You can extract as many or few values from the object as you want.

Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object. */

/* const esOld = {name : 'Rony Jackson', profession: 'Full Stack Web Developer'};
const name = esOld.name;
const profession = esOld.profession;
console.log(esOld); */

/* const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };

  // Only change code below this line

  const {today, tomorrow} = HIGH_TEMPERATURES; */

//Use Destructuring Assignment to Assign Variables from Objects------------------

/* Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.

Using the same object from the last example:

Destructuring Assignment is a JavaScript expression that allows to unpack values from arrays, or properties from objects, into distinct variables data can be extracted from arrays, objects, nested objects and assigning to variables.

const user = { name: 'John Doe', age: 34 };
Here's how you can give new variable names in the assignment:

const { name: userName, age: userAge } = user;
// userName = 'John Doe', userAge = 34
You may read it as "get the value of user.name and assign it to a new variable named userName" and so on. */

/* const user = { firstName: "Roni", lastName: "Jakson" };

const { firstName: name, lastName: surname } = user;
console.log(user); */

// Use Destructuring Assignment to Assign Variables from Nested Objects------------------
/* const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };

  // Only change code below this line

  const { today: { low : lowToday, high : highToday } }  = LOCAL_FORECAST;
  console.log(LOCAL_FORECAST); */


//Use Destructuring Assignment to Assign Variables from Arrays---------------------------

/* ES6 makes destructuring arrays as easy as destructuring objects.

One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

Destructuring an array lets us do exactly that:

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
The variable a is assigned the first value of the array, and b is assigned the second value of the array. We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5

let a = 8, b = 6;

// Only change code below this line

// swapping
[a, b]  = [b, a];
 */
//.......................................................................


// C11.ES6: Use Destructuring Assignment with the Rest Parameter to  
//  Reassign Array Elements

/* In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

The result is similar to Array.prototype.slice(), as shown below:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]
Variables a and b take the first and second values from the array.After that, because of the rest parameter's presence, arr gets the rest of the values in the form of an array. The rest element only works correctly as the last variable in the list. As in, you cannot use the rest parameter to catch a subarray that leaves out the last element of the original array. */

/* const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a, b, ...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source); */

//------------------------------------------------------------------------------

//C12.ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters

/* In some cases, you can destructure the object in a function argument itself.

Consider the code below:

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
}
This effectively destructures the object sent into the function. This can also be done in-place:

const profileUpdate = ({ name, age, nationality, location }) => {

} */

/* const profileUpdate = (profileData) =>{

  const {name, age, profession, aim } = profileData;
}

// alternative of above code
const profileUpdate = ({name, age, profession, aim}) =>{

} */
/* 
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max, min}) => (max + min) / 2.0;  */

//.......................................................................


//C13.ES6: Create Strings using Template Literals

/* A new feature of ES6 is the template literal. This is a special type of string that makes creating complex strings easier.

Template literals allow you to create multi-line strings and to use string interpolation features to create strings.

Consider the code below:

const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.

A lot of things happened there. Firstly, the example uses backticks (`), not quotes (' or "), to wrap the string. Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting \n within strings. The ${variable} syntax used above is a placeholder. Basically, you won't have to use concatenation with the + operator anymore. To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }. Similarly, you can include other expressions in your string literal, for example ${a + b}. This new way of creating strings gives you more flexibility to create robust strings. */

// syntax of template literal
// const greetings = `strings ${object.properties} `;
/* 
const person={
  name : 'Rony Jackson',
  age : 28
};
const greetings = `Hi, I am ${person.name} I am ${person.age} years old`;
console.log(greetings); */

/* const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for (let i =0; i<arr.length; i++){

  failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList); */
//.............................................................................


//C14.ES6: Write Concise Object Literal Declarations Using Object Property Shorthand

/* ES6 adds some nice support for easily defining object literals.

Consider the following code:

const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
getMousePosition is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:

const getMousePosition = (x, y) => ({ x, y }); */
/* const getMousePosition = (x, y) => ({

  x : y,
  y :x
});
console.log(getMousePosition(2, 3)); */

// alternative code of above
/* const getMousePosition = (x, y) => ({x, y});
console.log(getMousePosition(2, 3)); */

/* const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name,
    age,
    gender
  }; */
  // Only change code above this line
// };
//.............................................................................

//C15.ES6: Write Concise Declarative Functions with ES6

// using ES5
const man ={

  sex: "male",
  voice: "loud",
  hand: 3,
  setAccurate:function(handUpdate){
    this.hand=handUpdate;
  }
};
man.setAccurate(2);
console.log(man.hand);

// using ES6
const men ={

  sex: "male",
  voice: "loud",
  hand: 3,
  setAgain(newHand){
    this.hand = newHand;
  }
};
men.setAgain(4);
console.log(men.hand);
//.............................................................................

// C16 ES6: Use class Syntax to Define a Constructor Function..................

// creating class with constructor

class webDeveloper{
  constructor (){
    this.name="Full Stack";
  }
}
var developer = new webDeveloper();
console.log(developer.name);


// in ES5
/* var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter'); */

// in ES6
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
//....................................................................

// C17 ES6: Use getters and setters to Control Access to an Object

let user={

  firstName:'Rony',
  lastName:'Jackson',

 /*  get fullname(){
    return this.firstName;
  } */
  set changeName(newName){
    this.firstName=newName;
  }
};
user.changeName="sarah";
console.log(user.firstName);

// Only change code below this line
class Thermostat {
  constructor(farenheit) {

      this.farenheit=farenheit;
  }
  get temperature() {

      return 5 / 9 * (this.farenheit-32);
  }
  set temperature(celcius){

      this.farenheit = celcius * 9.0 / 5 + 32;
  }
}

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
//.........................................................................

// C18 ES6: Create a Module Script

/* ES6 is the first time that JavaScript has built-in modules. Each module is a piece of code that is executed once a JavaScript file is loaded. ... By default, every declaration in that file stay local to that module and cannot be accessed in other modules unless the module file exports them. */

/* ES6 introduced a way to easily share code among JavaScript files. This involves exporting parts of a file for use in one or more other files, and importing the parts you need, where you need them.  */


//.........................................................................

//C19 ES6: Use export to Share a Code Block

const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
export{uppercaseString, lowercaseString};

//.........................................................................

//C20 ES6: Reuse JavaScript Code Using import.......................

/* import allows you to choose which parts of a file or module to load. In the previous lesson, the examples exported add from the math_functions.js file. Here's how you can import it to use in another file:

import { add } from './math_functions.js'; 

You can import more than one item from the file by adding them in the import statement like this:

import { add, subtract } from './math_functions.js'; */


// ES6: Use * to Import Everything from a File---------------

/* import * as stringFunctions from "./string_functions.js"
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!"); */

//.........................................................................


// C20 ES6: Create an Export Fallback with export default..........................

/* In the export lesson, you learned about the syntax referred to as a named export. This allowed you to make multiple functions and variables available for use in other files.

There is another export syntax you need to know, known as export default. Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.

Below are examples using export default:

// named function
export default function add(x, y) {
  return x + y;
}

// anonymous function
export default function(x, y) {
  return x + y;
}
Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const */

export default function subtract(x, y) {
  return x - y;
}

// import export default file
import subtract from './math_functions.js';
subtract(7,4);

//.........................................................................

// C21 ES6: Create a JavaScript Promise--------------------------------------------
 
/* A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. The syntax looks like this:

const myPromise = new Promise((resolve, reject) => {

}); */

const makeServerRequest =new Promise((resolve, reject) =>{

}); 

// C22 ES6: Complete a Promise with resolve and reject

/* A promise has three states: pending, fulfilled, and rejected. The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise. The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed, and reject is used when you want it to fail. These are methods that take an argument, as seen below.

const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
 */
//.........................................................................

// C23 ES6: Handle a Fulfilled Promise with then--------------------------

/* Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve. Here’s an example: */

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
    
  } else {  
    reject("Data not received");
  }
  

/* makeServerRequest.then(result =>{
 console.log(result);
}) */

// ES6: Handle a Rejected Promise with catch---------------

/* catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. Here’s the syntax: */

makeServerRequest.catch(error =>{
  console.log(error);
})

});