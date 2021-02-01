/* JavaScript is a high-level programming language that all modern web browsers support. It is also one of the core technologies of the web, along with HTML and CSS that you may have learned previously. This section will cover basic JavaScript programming concepts, which range from variables and arithmetic to objects and loops.*/


// C1. Basic JavaScript: Declare JavaScript Variables//

/*In computer science, data is anything that is meaningful to the computer. JavaScript provides eight different data types which are undefined, null, boolean, string, symbol, bigint, number, and object.

For example, computers distinguish between numbers, such as the number 12, and strings, such as "12", "dog", or "123 cats", which are collections of characters. Computers can perform mathematical operations on a number, but not on a string.

Variables allow computers to store and manipulate data in a dynamic fashion. They do this by using a "label" to point to the data rather than using the data itself. Any of the eight data types may be stored in a variable.

Variables are similar to the x and y variables you use in mathematics, which means they're a simple name to represent the data we want to refer to. Computer variables differ from mathematical variables in that they can store different values at different times.*/

var myName;
// ---------------------------------------------------------------------------


// C2.Basic JavaScript: Initializing Variables with the Assignment Operator

var a = 0;

// ---------------------------------------------------------------------------


// C3.Basic JavaScript: Understanding Uninitialized Variables

/* When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an undefined variable, you will get a literal string of "undefined". */

// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

// ---------------------------------------------------------------------------



// C4.Basic JavaScript: Understanding Case Sensitivity in Variables

/* Best Practice
Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.

Examples:

var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong; */

// Declared without value
var studlyCarVar;
var properCaseCamel;
var titleCase;

// Declared with assignments
var studlyCarVar = 10;
var properCaseCamel = 5;
var titleCase = "Rony Jackson";

// ---------------------------------------------------------------------------



// C5.Basic JavaScript: Increment or Decrement a Number with JavaScript
/* You can easily increment or add one to a variable with the ++ operator.

i++;

is the equivalent of

i = i + 1;

Note
The entire line becomes i++;, eliminating the need for the equal sign. */

var myVar = 87;
myVar = myVar + 1;
// myVar++

var myVar = 11;
myVar = myVar - 1;
// myVar--;


// ---------------------------------------------------------------------------



// C6.Basic JavaScript: Create Decimal Numbers with JavaScript

/* We can store decimal numbers in variables too. Decimal numbers are sometimes referred to as floating point numbers or floats.

Note
Not all real numbers can accurately be represented in floating point. This can lead to rounding errors. Details Here.

Create a variable myDecimal and give it a decimal value with a fractional part (e.g. 5.7).
 */
var ourDecimal = 5.7;
var product = 2.0 * 2.5;
var quotient = 4.4 / 2.0;


// ---------------------------------------------------------------------------



// C7. Basic JavaScript: Finding a Remainder in JavaScript

/* The remainder operator % gives the remainder of the division of two numbers.

Example

5 % 2 = 1 because
Math.floor(5 / 2) = 2 (Quotient)
2 * 2 = 4
5 - 4 = 1 (Remainder)
Usage
In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2.

17 % 2 = 1 (17 is Odd)
48 % 2 = 0 (48 is Even)
Note
The remainder operator is sometimes incorrectly referred to as the "modulus" operator. It is very similar to modulus, but does not work properly with negative numbers. */

var remainder;
remainder = 11 % 3;

// ---------------------------------------------------------------------------


// C8.Basic JavaScript: Compound Assignment With Augmented Addition/subtraction/Multiplication/Division

/* In programming, it is common to use assignments to modify the contents of a variable. Remember that everything to the right of the equals sign is evaluated first, so we can say:

myVar = myVar + 5;

to add 5 to myVar. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.

One such operator is the += operator.

var myVar = 1;
myVar += 5;
console.log(myVar); // Returns 6 */

var a = 3;
var b = 17;
var c = 12;

// Addition
a += 12;
b += 9;
c += 7;

//Subtraction
a -= 6;
b -= 15;
c -= 1;

// Multiplication
a *= 5;
b *= 3;
c *= 10

//Division
a /= 12;
b /= 4;
c /= 11;


// ---------------------------------------------------------------------------

//C9.Basic JavaScript: Declare String Variables
/* Previously we have used the code

var myName = "your name";

"your name" is called a string literal. It is a string because it is a series of zero or more characters enclosed in single or double quotes. */

var myFirstName = "Rony";
var myLastName = "Jackson";

// ---------------------------------------------------------------------------

//C10. Basic JavaScript: Quoting Strings with Single Quotes
/* String values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of quote. Unlike some other programming languages, single and double quotes work the same in JavaScript.

doubleQuoteStr = "This is a string"; 
singleQuoteStr = 'This is also a string';
The reason why you might want to use one type of quote over the other is if you want to use both in a string. This might happen if you want to save a conversation in a string and have the conversation in quotes. Another use for it would be saving an <a> tag with various attributes in quotes, all within a string.

conversation = 'Finn exclaims to Jake, "Algebraic!"';
However, this becomes a problem if you need to use the outermost quotes within it. Remember, a string has the same kind of quote at the beginning and end. But if you have that same quote somewhere in the middle, the string will stop early and throw an error.

goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
badStr = 'Finn responds, "Let's go!"'; // Throws an error
In the goodStr above, you can use both quotes safely by using the backslash \ as an escape character. Note
The backslash \ should not be confused with the forward slash /. They do not do the same thing. */

// before
var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";

// after
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';


// ---------------------------------------------------------------------------


// C11.Basic JavaScript: Escape Sequences in Strings
/* Quotes are not the only characters that can be escaped inside a string. There are two reasons to use escaping characters:

To allow you to use characters you may not otherwise be able to type out, such as a carriage return.
To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.
We learned this in the previous challenge.

Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed */

var myStr; // Change this line
myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// ---------------------------------------------------------------------------


// C12.Basic JavaScript: Concatenating Strings with Plus Operator
/* In JavaScript, when the + operator is used with a String value, it is called the concatenation operator. You can build a new string out of other strings by concatenating them together.

Example

'My name is Alan,' + ' I concatenate.' */
var myStr; // Change this line
myStr = "This is the start. " + "This is the end.";

/* We can also use the += operator to concatenate a string onto the end of an existing string variable. This can be very helpful to break a long string over several lines. */

var ourStr = "I come first. ";
ourStr += "I come second.";
// ourStr is now "I come first. I come second."

// ---------------------------------------------------------------------------

//C13. Basic JavaScript: Constructing Strings with Variables
/* Sometimes you will need to build a string, Mad Libs style. By using the concatenation operator (+), you can insert one or more variables into a string you're building.

Example:

var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?"; */
// ourStr is now "Hello, our name is freeCodeCamp, how are you?

var myName = 'Rony Jackson';
var myStr = "My name is " + myName + " and I am well";

// alternative
var myName = 'Rony Jackson';
var myStr = 'I am a Full Stack Web Developer';
myStr += myName;


// ---------------------------------------------------------------------------

// C14.Basic JavaScript: Find the Length of a String
/* You can find the length of a String value by writing .length after the string variable or string literal.

"Alan Peter".length; // 10

For example, if we created a variable var firstName = "Charles", we could find out how long the string "Charles" is by using the firstName.length property. */

var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;

// ---------------------------------------------------------------------------

// C15.Basic JavaScript: Use Bracket Notation to Find the First Character in a String
/* Bracket notation is a way to get a character at a specific index within a string.

Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as Zero-based indexing.

For example, the character at index 0 in the word "Charles" is "C". So if var firstName = "Charles", you can get the value of the first letter of the string by using firstName[0].

Example:

var firstName = "Charles";
var firstLetter = firstName[0]; */ // firstLetter is "C"

var firstName = "Rony";
var firstLetter = firstName[0];

var lastName = "Jackson";

// Only change code below this line
var thirdLetterOfLastName = lastName[2];

// ---------------------------------------------------------------------------


// C16.Basic JavaScript: Understand String Immutability
/* In JavaScript, String values are immutable, which means that they cannot be altered once created.

For example, the following code:

var myStr = "Bob";
myStr[0] = "J";
cannot change the value of myStr to "Job", because the contents of myStr cannot be altered. Note that this does not mean that myStr cannot be changed, just that the individual characters of a string literal cannot be changed. The only way to change myStr would be to assign it with a new string, like this:

var myStr = "Bob";
myStr = "Job"; */

var myStr = "Jello World";
// Only change code below this line
myStr = "Hello World";


// ---------------------------------------------------------------------------

// C17.Basic JavaScript: Use Bracket Notation to Find the Last Character in a String
/* In order to get the last letter of a string, you can subtract one from the string's length.

For example, if var firstName = "Charles", you can get the value of the last letter of the string by using firstName[firstName.length - 1].

Example:

var firstName = "Charles";
var lastLetter = firstName[firstName.length - 1]; // lastLetter is "s" */

var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName[lastName.length - 1];

// ---------------------------------------------------------------------------


// C18.Basic JavaScript: Word Blanks
/* We will now use our knowledge of strings to build a "Mad Libs" style word game we're calling "Word Blanks". You will create an (optionally humorous) "Fill in the Blanks" style sentence.

In a "Mad Libs" game, you are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.

Consider this sentence - "It was really ____, and we ____ ourselves ____". This sentence has three missing pieces- an adjective, a verb and an adverb, and we can add words of our choice to complete it. We can then assign the completed sentence to a variable as follows:

var sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + "."; */
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Change this line
console.log(wordBlanks);

// ---------------------------------------------------------------------------


// C19.Basic JavaScript: Store Multiple Values in one Variable using JavaScript Arrays
/* With JavaScript array variables, we can store several pieces of data in one place.

You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this:

var sandwich = ["peanut butter", "jelly", "bread"].

Modify the new array myArray so that it contains both a string and a number (in that order). */

// value with string and number
var myArray = ["Peanut Butter", 1, "Lialiac Purple"];

// You can also nest arrays within other arrays, like below:

var myArray = [["Bulls", 23], ["White Sox", 45]];
var myArray = [['One dimensional', 1], ['Multidimensional', 2]];
// This is also called a multi-dimensional array.

// ---------------------------------------------------------------------------

// C20.Basic JavaScript: Access Array Data with Indexes
/* We can access the data inside arrays using indexes.

Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing, so the first element in an array has an index of 0.


Example

var array = [50,60,70];
array[0]; // equals 50
var data = array[1];  */ // equals 60

var myArray = [50, 60, 70];
var myData = myArray[0];

/* Unlike strings, the entries of arrays are mutable and can be changed freely.

Example

var ourArray = [50,40,30];
ourArray[0] = 15; // equals [15,40,30] */

var myArray = [18, 64, 99];
myArray[0] = 45;


// ---------------------------------------------------------------------------

// C21.Basic JavaScript: Access Multi-Dimensional Arrays With Indexes
/* One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.

Example

var arr = [ [1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11 */


// Using bracket notation select an element from myArray such that myData is equal to 8.
var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];

// Only change code below this line
var myData = myArray[2][1];

// ---------------------------------------------------------------------------

// C22.Basic JavaScript: Manipulate Arrays With push(), pop(), shift() and unshift() function
/* An easy way to append data to the end of an array is via the push() function.

.push() takes one or more parameters and "pushes" them onto the end of the array.

Examples:

var arr1 = [1,2,3];
arr1.push(4);
// arr1 is now [1,2,3,4]

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
// arr2 now equals ["Stimpson", "J", "cat", ["happy", "joy"]] */
/* var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);


//Manipulate with pop()-------------------------------------------
Another way to change the data in an array is with the .pop() function.

.pop() is used to "pop" a value off of the end of an array. We can store this "popped off" value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

Any type of entry can be "popped" off of an array - numbers, strings, even nested arrays.

var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4] */

// Use the .pop() function to remove the last item from myArray, assigning the "popped off" value to removedFromMyArray.
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();


//Manipulate with shift()-------------------------------------------
/* pop() always removes the last element of an array. What if you want to remove the first?

That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last. */

var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();


//Manipulate with unshift()-------------------------------------------
/* .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"] */

var myArray = [["John", 23], ["dog", 3]];
myArray.shift([0]);
myArray.unshift(["Paul", 35])

// ---------------------------------------------------------------------------


// C23.Basic JavaScript: Shopping List
/* Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.

["Chocolate Bar", 15] */

var myList = [["Fuchka", 5], ["Chotpoti", 5], ["Chicken leg piecec", 10], ["Noodles", 4], ["Cocacola", 2]];

// ---------------------------------------------------------------------------


// C24. Basic JavaScript: Write Reusable JavaScript with Functions
/* In JavaScript, we can divide up our code into reusable parts called functions.

Here's an example of a function:

function functionName() {
  console.log("Hello World");
}
You can call or invoke this function by using its name followed by parentheses, like this: functionName(); Each time the function is called it will print out the message "Hello World" on the dev console. All of the code between the curly braces will be executed every time the function is called. */

function reusableFunction() {

    console.log("Hi World");
}
reusableFunction();


// ---------------------------------------------------------------------------


//C25.Basic JavaScript: Passing Values to Functions with Arguments

/* Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.

Here is a function with two parameters, param1 and param2:

function testFun(param1, param2) {
  console.log(param1, param2);
}
Then we can call testFun: testFun("Hello", "World"); We have passed two arguments, "Hello" and "World". Inside the function, param1 will equal "Hello" and param2 will equal "World". Note that you could call testFun again with different arguments and the parameters would take on the value of the new arguments. */

function functionWithArgs(parmeter1, parameter2) {

    console.log(parmeter1 + parameter2);
}
functionWithArgs(5, 7);

// ---------------------------------------------------------------------------

// C26.Basic JavaScript: Global Scope and Functions

/* In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are used without the var keyword are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with var. */

// Declare the myGlobal variable below this line

var myGlobal = 10;
function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

// ---------------------------------------------------------------------------


// C27.Basic JavaScript: Local Scope and Functions

/*  Variables which are declared within a function, as well as the function parameters have local scope. That means, they are only visible within that function.

Here is a function myTest with a local variable called loc.

function myTest() {
 var loc = "foo";
 console.log(loc);
}
myTest(); // logs "foo"
console.log(loc); // loc is not defined */

function myLocalScope() {

    // Only change code below this line
    var myVar = 5;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();


// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

// ---------------------------------------------------------------------------


//C28.Basic JavaScript: Global vs. Local Scope in Functions

/* It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

In this example:

var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
The function myFun will return "Head" because the local version of the variable is present. */

var outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line

    var outerWear = "sweater";

    // Only change code above this line
    return outerWear;
}

myOutfit();

// ---------------------------------------------------------------------------


//C29.Basic JavaScript: Return a Value from a Function with Return

/* We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

Example

function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5); // 8
plusThree takes an argument for num and returns a value equal to num + 3. */

function plusThree(num) {
    return num + 3;
}
var answer = plusThree(5);
console.log(answer);


//C30.Basic JavaScript: Understanding Undefined Value returned from a Function

/* A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

Example

var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3); // sum will be modified but returned value is undefined */

var sum = 0;

function addThree() {
    return sum = sum + 3;
}
function addFive() {
    sum = sum + 5;
}

// Only change code below this line


// Only change code above this line

console.log(addThree());
addFive();


//Assigned with a return value
var processed = processArg(7);
function processArg(num) {
    return (num + 3) / 5;
}

// ---------------------------------------------------------------------------

//C31.Basic JavaScript: Stand in Line (Queue)

/* In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed. */

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    return arr.shift();
    // Only change code above this line
}

// Setup
var testArr = [1, 2, 3, 4, 5, 6];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 7));
console.log("After: " + JSON.stringify(testArr));


// ---------------------------------------------------------------------------


//C32.Basic JavaScript: Understanding Boolean Values
/* Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is "on" and false is "off." These two states are mutually exclusive.

Note
Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.

Modify the welcomeToBooleans function so that it returns true instead of false when the run button is clicked. */

function welcomeToBooleans() {

    return true;
}

// ---------------------------------------------------------------------------


//C33.Basic JavaScript: Use Conditional Logic with If Statements

/* If statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.

When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

Pseudocode

if (condition is true) {
  statement is executed
}
Example

function test (myCondition){

    if (myCondition){

        return true;
    }
    return false;
}
test(true); // returns "It was true"
test(false); // returns "It was false" */

function trueOrFalse(wasThatTrue) {
    // Only change code below this line

    if (wasThatTrue) {

        var result = "Yes, that was true";
        return result;
    }
    var result2 = "No, that was false";
    return result2;

}
trueOrFalse(true);
trueOrFalse(false);


// ---------------------------------------------------------------------------


//C34.Basic JavaScript: Comparison with the Equality Operator

/* There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.

The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.

function equalityTest(myVal) {
  if (myVal == 10) {
     return "Equal";
  }
  return "Not Equal";
} */

function testEqual(val) {
    if (val == 12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);


// ---------------------------------------------------------------------------


//C35.Basic JavaScript: Comparison with the Strict Equality Operator

/*  Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.
 
 If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.
 
 Examples
 
 3 ===  3   // true
 3 === '3'  // false */

function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);

/* In the last two challenges, we learned about the equality operator (==) and the strict equality operator (===). Let's do a quick review and practice using these operators some more.

If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.
 
Examples
 
3 == '3'  // returns true because JavaScript performs type conversion from string to number
3 === '3' // returns false because the types are different and type conversion is not performed
Note
In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:
 
typeof 3   // returns 'number'
typeof '3' // returns 'string' */

function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");
//   if (a == b) it would return Equal


// ---------------------------------------------------------------------------

//C36. Basic JavaScript: Comparison with the Inequality Operator

/* The inequality operator (!=) is the opposite of the equality operator. It means "Not Equal" and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

Examples

1 !=  2     // true
1 != "1"    // false
1 != '1'    // false
1 != true   // false
0 != false  // false */

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);

//   Basic JavaScript: Comparison with the Strict Inequality Operator-----------
/*  The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. Strict inequality will not convert data types.
 
 Examples
 
 3 !==  3   // false
 3 !== '3'  // true
 4 !==  3   // true */

function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(10);


// ---------------------------------------------------------------------------

//C37.Basic JavaScript: Comparison with the Greater Than Operator

/*  The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.
 
 Like the equality operator, greater than operator will convert data types of values while comparing.
 
 Examples
 
 5   >  3   // true
 7   > '3'  // true
 2   >  3   // false
 '1' >  9   // false */

function testGreaterThan(val) {
    if (val > 100) {  // Change this line
        return "Over 100";
    }

    if (val > 10) {  // Change this line
        return "Over 10";
    }

    return "10 or Under";
}

testGreaterThan(10);

function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
        return "20 or Over";
    }

    if (val >= 10) {  // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}

testGreaterOrEqual(10);


// ---------------------------------------------------------------------------


// C38.Basic JavaScript: Comparison with the Less Than Operator

/* The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, less than operator converts data types while comparing.

Examples

2   < 5  // true
'3' < 7  // true
5   < 5  // false
3   < 2  // false
'8' < 4  // false */

function testLessThan(val) {
    if (val < 25) {  // Change this line
        return "Under 25";
    }

    if (val < 55) {  // Change this line
        return "Under 55";
    }

    return "55 or Over";
}

testLessThan(10);


//   Basic JavaScript: Comparison with the Less Than Or Equal To Operator------
function testLessOrEqual(val) {
    if (val) {  // Change this line
        return "Smaller Than or Equal to 12";
    }

    if (val) {  // Change this line
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

testLessOrEqual(10);

// ---------------------------------------------------------------------------



//C39.Basic JavaScript: Comparisons with the Logical And Operator

/*  Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.
 
 The same effect could be achieved by nesting an if statement inside another if:
 
 if (num > 5) {
   if (num < 10) {
     return "Yes";
   }
 }
 return "No";
 will only return "Yes" if num is greater than 5 and less than 10. The same logic can be written as:
 
 if (num > 5 && num < 10) {
   return "Yes";
 }
 return "No"; */

function testLogicalAnd(val) {
    // Only change code below this line

    if (val <= 50 && val >= 25) {

        return "Yes";

    }

    // Only change code above this line
    return "No";
}

testLogicalAnd(10);

// ---------------------------------------------------------------------------

//C40.Basic JavaScript: Comparisons with the Logical Or Operator

/* The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.

The pattern below should look familiar from prior waypoints:

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
will return "Yes" only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:

if (num > 10 || num < 5) {
  return "No";
}
return "Yes"; */

function testLogicalOr(val) {


    if (val < 10 || val > 20) {

        return "Outside";

    }
    return "Inside";
}


testLogicalOr(15);

// ---------------------------------------------------------------------------


//C41.Basic JavaScript: Introducing Else and else if Statements

/* When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
} */

function testElse(val) {
    var result = "";
    // Only change code below this line

    if (val > 5) {

        result = "Bigger than 5";

    }
    else {
        result = "5 or Smaller";

    }
    // Only change code above this line
    return result;
}

testElse(4);

//   else if statement---------------------

if (num > 15) {
    return "Bigger than 15";
} else if (num < 5) {
    return "Smaller than 5";
} else {
    return "Between 5 and 15";
}

// ---------------------------------------------------------------------------

//C42.Basic JavaScript: Logical Order in If Else Statements

/*  Order is important in if, else if statements.
 
 The function is executed from top to bottom so you will want to be careful of what statement comes first.
 
 Take these two functions as an example.
 
 Here's the first:
 
 function foo(x) {
   if (x < 1) {
     return "Less than one";
   } else if (x < 2) {
     return "Less than two";
   } else {
     return "Greater than or equal to two";
   }
 } */

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);


// ---------------------------------------------------------------------------


//C43.Basic JavaScript: Chaining If Else Statements

/* if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
} */


function testSize(num) {
    // Only change code below this line
    if (num < 5) {

        return "Tiny";
    }
    else if (num < 10) {

        return "Small";
    }
    else if (num < 15) {

        return "Medium";
    }
    else if (num < 20) {

        return "Large";
    }
    else if (num >= 20) {

        return "Huge";
    }
    else {

        return "Change Me";
    }


}

testSize(7);

// ---------------------------------------------------------------------------

//C44.Basic JavaScript: Golf Code

/* In the game of golf each hole has a par meaning the average number of strokes a golfer is expected to make in order to sink the ball in a hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!" */

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes == 1) {

        return names[0];

    }
    else if (strokes <= par - 2) {

        return names[1];
    }
    else if (strokes == par - 1) {

        return names[2];
    }
    else if (strokes == par) {

        return names[3];
    }
    else if (strokes == par + 1) {

        return names[4];
    }
    else if (strokes == par + 2) {

        return names[5];
    }
    else if (strokes >= par + 3) {

        return names[6];
    }
    else {

        return "Change Me";
    }

    // Only change code above this line
}

golfScore(5, 4);

// ---------------------------------------------------------------------------

//C45.Basic JavaScript: Selecting from Many Options with Switch Statements

/* If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched case value until a break is encountered.

Here is an example of a switch statement:

switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed. */

function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            answer = "alpha";
            break;

        case 2:
            answer = "beta";
            break;

        case 3:
            answer = "gamma";
            break;

        case 4:
            answer = "delta";
            break;
    }

    return answer;
}

caseInSwitch(1);

// ---------------------------------------------------------------------------


//C46.Basic JavaScript: Adding a Default Option in Switch Statements---------------
/* In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.

A default statement should be the last case. */

function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {

        case "a":
            answer = "apple";
            break;

        case "b":
            answer = "bird";
            break;

        case "c":
            answer = "cat";
            break;

        default:
            answer = "stuff";
            break;
    }

    return answer;
}

/* If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this: */

function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {

        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;

        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;

        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }

    // Only change code above this line
    return answer;
}

sequentialSizes(1);

// ---------------------------------------------------------------------------

//C47.Basic JavaScript: Replacing If Else Chains with Switch
/* If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following: */

if (val === 1) {
    answer = "a";
} else if (val === 2) {
    answer = "b";
} else {
    answer = "c";
}
/* can be replaced with: */

switch (val) {
    case 1:
        answer = "a";
        break;
    case 2:
        answer = "b";
        break;
    default:
        answer = "c";
}

// ---------------------------------------------------------------------------


//C48.Basic JavaScript: Returning Boolean Values from Functions

/* You may recall from Comparison with the Equality Operator that all comparison operators return a boolean true or false value.

Sometimes people use an if/else statement to do a comparison, like this:

function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:

function isEqual(a,b) {
  return a === b;
} */

function isLess(a, b) {
    // Only change code below this line
    return a < b;
    // Only change code above this line
}

isLess(10, 15);

// ---------------------------------------------------------------------------


//C48.Basic JavaScript: Return Early Pattern for Functions

/* When a return statement is reached, the execution of the current function stops and control returns to the calling location.

Example

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
The above outputs "Hello" to the console, returns "World", but "byebye" is never output, because the function exits at the return statement. */

function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0) {

        return;
    }


    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

// ---------------------------------------------------------------------------


//C49.Basic JavaScript: Counting Cards

/* In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

Count Change	Cards
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'
var count = 0; */

function cc(card) {
    // Only change code below this line
    switch (card) {

        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;

        case 7:
        case 8:
        case 9:
            count = 0;
            break;

        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }

    var holdbet = "hold";
    if (count > 0) {
        holdbet = "Bet";
    }
    return count + " " + holdbet;

}

cc(2); cc(3); cc(7); cc('K'); cc('A');

// ---------------------------------------------------------------------------

//C50.Basic JavaScript: Build JavaScript Objects

/* You may have heard the term object before.

Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

Here's a sample cat object:

var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
In this example, all the properties are stored as strings, such as - "name", "legs", and "tails". However, you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows:

var anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
}; */

var myDog = {
    // Only change code below this line
    "name": "Pummy",
    "legs": 2,
    "tails": 1,
    friends: ['Jeebon', 'Rana', 'Jewel']

    // Only change code above this line
};


// Accesing object properties with dot notation-------------------

/*  There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

Here is a sample of using dot notation (.) to read an object's property:
*/

// Setup
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;


//   Accessing with bracket notation

var myObj = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
myObj["NoSpace"];

// ---------------------------------------------------------------------------


//C51.Basic JavaScript: Accessing Object Properties with Variables

/* Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.

Here is an example of using a variable to access a property:

var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman" */

var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];


// ---------------------------------------------------------------------------


//C52.Basic JavaScript: Updating Object Properties

/* After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.

For example, let's look at ourDog:

var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
Since he's a particularly happy dog, let's change his name to "Happy Camper". Here's how we update his object's name property: ourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper"; Now when we evaluate ourDog.name, instead of getting "Camper", we'll get his new name, "Happy Camper". */

var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
// myDog.name = "Happy Coder";
myDog["name"] = "Happy Coder";

// ---------------------------------------------------------------------------


//C53.Basic JavaScript: Add New Properties to a JavaScript Object

/* You can add new properties to existing JavaScript objects the same way you would modify them.

Here's how we would add a "bark" property to ourDog:

ourDog.bark = "bow-wow";

or

ourDog["bark"] = "bow-wow";

Now when we evaluate ourDog.bark, we'll get his bark, "bow-wow".

Example:

var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow"; */


var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "Woof";

// ---------------------------------------------------------------------------


//C54.Basic JavaScript: Delete Properties from a JavaScript Object

/* We can also delete properties from objects like this:

delete ourDog.bark;

Example:

var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark; */

var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};
delete myDog.tails;


// ---------------------------------------------------------------------------

//C55.Basic JavaScript: Using Objects for Lookups

/* Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to "lookup" values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.

Here is an example of a simple reverse alphabet lookup:

var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2]; // "Y"
alpha[24]; // "C"

var value = 2;
alpha[value]; // "Y" */

function phoneticLookup(val) {
    var result = "";
    var lookup = {

        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    var result = lookup[val];
    return result;
    // Only change code below this line
    /*   switch(val) {
        case "alpha":
          result = "Adams";
          break;
        case "bravo":
          result = "Boston";
          break;
        case "charlie":
          result = "Chicago";
          break;
        case "delta":
          result = "Denver";
          break;
        case "echo":
          result = "Easy";
          break;
        case "foxtrot":
          result = "Frank";
      } */

    // Only change code above this line
    // return result;
}

phoneticLookup("charlie");


// ---------------------------------------------------------------------------


//C56.Basic JavaScript: Testing Objects for Properties

/* Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

Example

var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false */

function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {

        return obj[checkProp];

    }
    else {

        return "Not Found";
    }

    return "Change Me!";
    // Only change code above this line
}


// ---------------------------------------------------------------------------


//C57.Basic JavaScript: Manipulating Complex Objects

/* Sometimes you may want to store data in a flexible Data Structure.A JavaScript object is one way to handle flexible data.They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.

    Here's an example of a complex data structure:

var ourMusic = [
    {
        "artist": "Daft Punk",
        "title": "Homework",
        "release_year": 1997,
        "formats": [
            "CD",
            "Cassette",
            "LP"
        ],
        "gold": true
    }
];
This is an array which contains one object inside.The object has various pieces of metadata about an album.It also has a nested "formats" array.If you want to add more album records, you can do this by adding records to the top level array.Objects hold data in a property, which has a key - value format.In the example above, "artist": "Daft Punk" is a property that has a key of "artist" and a value of "Daft Punk".JavaScript Object Notation or JSON is a related data interchange format used to store data.

{ */

var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {

        "artist": "Lady Gaga",
        "title": "Piano Man",
        "release_year": 2021,
        "formats": ["CD", "DVD", "MP3"]
    }
    // Add a record here
];
// ---------------------------------------------------------------------------

//C58.Basic JavaScript: Accessing Nested Objects
/* The sub - properties of objects can be accessed by chaining together the dot or bracket notation.

Here is a nested object: */

var ourStorage = {
    "desk": {
        "drawer": "stapler"
    },
    "cabinet": {
        "top drawer": {
            "folder1": "a file",
            "folder2": "secrets"
        },
        "bottom drawer": "soda"
    }
};
ourStorage.cabinet["top drawer"].folder2;  // "secrets"
ourStorage.desk.drawer; // "stapler"


var ourPets = [
    {
        animalType: "cat",
        names: [
            "Meowzer",
            "Fluffy",
            "Kit-Cat"
        ]
    },
    {
        animalType: "dog",
        names: [
            "Spot",
            "Bowser",
            "Frankie"
        ]
    }
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0];

// ---------------------------------------------------------------------------


//C58.Basic JavaScript: Record CollectionPassed

/* You are given a JSON object representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object like collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.
 */
function updateRecords(object, id, prop, value) {

    if (prop !== 'tracks' && value !== "") {

        object[id][prop] = value;
    }
    else if (prop === 'tracks' && !object[id].hasOwnProperty("tracks")) {

        object[id][prop] = [value];

    }
    else if (prop === "tracks" && value !== "") {
        object[id][prop].push(value);

    }
    else if (value === "") {

        delete object[id][prop];
    }
    return object;
}


// ---------------------------------------------------------------------------


//C59.Basic JavaScript: Iterate with JavaScript While Loops

/* You can run the same code multiple times by using a loop.

The first type of loop we will learn is called a while loop because it runs "while" a specified condition is true and stops once that condition is no longer true. */

var ourArray = [];
var i = 0;
while (i < 5) {
    ourArray.push(i);
    i++;
}
/* In the code example above, the while loop will execute 5 times and append the numbers 0 through 4 to ourArray.*/


var myArray = [];
var i = 5;
while (i >= 0) {
    myArray.push(i);
    i--;

}

// ---------------------------------------------------------------------------



//C60.Basic JavaScript: Iterate with JavaScript For Loops

/* You can run the same code multiple times by using a loop.

The most common type of JavaScript loop is called a for loop because it runs "for" a specific number of times.

For loops are declared with three optional expressions separated by semicolons:

for ([initialization]; [condition]; [final-expression])

The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.

The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When condition is false at the start of the iteration, the loop will stop executing. This means if condition starts as false, your loop will never execute.

The final-expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.

In the following example we initialize with i = 0 and iterate while our condition i < 5 is true. We'll increment i by 1 in each loop iteration with i++ as our final-expression. */

var ourArray = [];
for (var i = 0; i < 5; i++) {
    ourArray.push(i);
}


var myArray = [];
for (var i = 1; i <= 5; i++) {
    myArray.push(i);
}

var myArray = [];
for (var i = 1; i <= 9; i += 2) {

    myArray.push(i);
}

// Count backwards with a for loops-----------------------------

var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i);
}


// ---------------------------------------------------------------------------



//C61.Basic JavaScript: Iterate Through an Array with a For Loop

/* A common task in JavaScript is to iterate through the contents of an array.One way to do that is with a for loop.This code will output each element of the array arr to the console:
 */
var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
/* Remember that arrays have zero - based indexing, which means the last index of the array is length - 1. Our condition for this loop is i < arr.length, which stops the loop when i is equal to length.In this case the last iteration is i === 4 i.e.when i becomes equal to arr.length and outputs 6 to the console. */

var myArr = [2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];

}


// ---------------------------------------------------------------------------


//C62.Basic JavaScript: Nesting For Loops

/* If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:
 */
var arr = [
    [1, 2], [3, 4], [5, 6]
];
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}

function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
/* This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array. */


// ---------------------------------------------------------------------------


//C63.Basic JavaScript: Iterate with JavaScript Do...While Loops

/* The next type of loop you will learn is called a do...while loop. It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true.
 */
var ourArray = [];
var i = 0;
do {
    ourArray.push(i);
    i++;
} while (i < 5);


var myArray = [];
var i = 10;

// Only change code below this line
do {
    myArray.push(i);
    i++;
}
while (i < 10);

/* The example above behaves similar to other types of loops, and the resulting array will look like [0, 1, 2, 3, 4]. However, what makes the do...while different from other loops is how it behaves when the condition fails on the first check. Let's see this in action: Here is a regular while loop that will run the code in the loop as long as i < 5: */


// ---------------------------------------------------------------------------


//C64.Basic JavaScript: Replace Loops using Recursion

/* Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this: */

function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
}
/* However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop. */

function multiply(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        return multiply(arr, n - 1) * arr[n - 1];
    }
}


//recursive function

function sum(arr, n) {
    if (n <= 0) {
        return 0;
    }
    else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}
/* The recursive version of multiply breaks down like this. In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, but with n - 1. That function call is evaluated in the same way, calling multiply again until n <= 0. At this point, all the functions can return and the original multiply returns the answer. */

// ---------------------------------------------------------------------------



//C65.Basic JavaScript: Profile Lookup

/* We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return "No such contact".

If prop does not correspond to any valid properties of a contact found to match name then return "No such property". */

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
    // Only change code below this line
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {

            return contacts[i][prop] || "No such property";
        }

    }
    return "No such contact";

    // Only change code above this line
}

lookUpProfile("Akira", "likes");


// ---------------------------------------------------------------------------


//C66. Basic JavaScript: Generate Random Fractions with JavaScript

/* Random numbers are useful for creating random behavior.

JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and not quite up to 1 (exclusive). Thus Math.random() can return a 0 but never quite return a 1

Note
Like Storing Values with the Equal Operator, all function calls will be resolved before the return executes, so we can return the value of the Math.random() function. */

function randomFraction() {
    var random = Math.random();
    return random;
}


function randomWholeNum() {

    //math.floor to remove  the decimal part of the number
    var random = Math.floor(Math.random() * 10);

    return random;
}
randomWholeNum();


//   Generate random whole numbers within a Range

function randomRange(myMin, myMax) {
    // Only change code below this line
    var random = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    if (random >= myMin && random <= myMax) {

        return random;
    }
    return 0;
    // Only change code above this line
}
randomRange(5, 50);

// ---------------------------------------------------------------------------


//C67. Basic JavaScript: Use the parseInt Function

/* The parseInt() function parses a string and returns an integer. Here's an example:

var a = parseInt("007");

The above function converts the string "007" to an integer 7. If the first character in the string can't be converted into a number, then it returns NaN. */

function convertToInteger(str) {
    var convert = parseInt(str);
    return convert;

}
convertToInteger("56");


// Use the parseInt function with radix----------------------

/* The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

The function call looks like:

parseInt(string, radix); */

/* And here's an example: */

var a = parseInt("11", 2);

/* The radix variable says that "11" is in the binary system, or base 2. This example converts the string "11" to an integer 3. */


function convertToInteger(str) {
    var random_binary = parseInt(str, 2);
    return random_binary;
}
convertToInteger("10011");


// ---------------------------------------------------------------------------


//C68.Basic JavaScript: Use the Conditional (Ternary) Operator

/* The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

The syntax is: */

/* condition ? expression-if-true : expression-if-false;

The following function uses an if-else statement to check a condition: */

function findGreater(a, b) {
    if (a > b) {
        return "a is greater";
    }
    else {
        return "b is greater";
    }
}
/* This can be re-written using the conditional operator: */

function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater";
}

function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);


// Multiple conditional ternary operator

/* In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions.

The following function uses if, else if, and else statements to check multiple conditions: */

function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
// The above function can be re-written using multiple conditional operators:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}

function checkSign(num) {
    return num > 0 ? "positive"
        : num < 0 ? "negative"
        : "zero" ;
}

checkSign(10);

// print the array in reverse 

function countdown(n){
    if(n<1){
  
      return [];
    }
    else{
  
      const countArray = countdown(n-1);
      countArray.unshift(n);
      return countArray;
    }
  
  }

  function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
      return [startNum];
    } else {
      var numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
  }
// ---------------------------------------------------------------------------

