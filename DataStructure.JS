                        // Introduction to the Basic Data Structure Challenges  

/* Data can be stored and accessed in many different ways, both in JavaScript and other languages.This section will teach you how to manipulate arrays, as well as access and copy the information within them.It will also teach you how to manipulate and access the data within JavaScript objects, using both dot and bracket notation.When you're done with this section, you should understand the basic properties and differences between arrays and objects, as well as how to choose which to use for a given purpose. */

// C1 Use an Array to Store a Collection of Data---------------------------------------------

/* A more complex implementation of an array can be seen below. This is known as a multi-dimensional array, or an array that contains other arrays. Notice that this array also contains JavaScript objects, which we will examine very closely in our next section, but for now, all you need to know is that arrays are also capable of storing complex objects. */

let complexArray = [
    [
      {
        one: 1,
        two: 2
      },
      {
        three: 3,
        four: 4
      }
    ],
    [
      {
        a: "a",
        b: "b"
      },
      {
        c: "c",
        d: "d"
      }
    ]
  ];
  //------------------------------------------------------------------------------------------


// C2. Access an Array's Contents Using Bracket Notation--------------------------------------

let ourArray = ["a", "b", "c"];
let ourVariable = ourArray[1];

// set an index to a value using the same notation: 
ourArray[2] = 'b for ball';

//------------------------------------------------------------------------------------------

// C3. Add Items to an Array with push() and unshift()---------------------------------------

function mixedNumbers(arr) {
  // Only change code below this line
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9);

  // Only change code above this line
  return arr;
}
// console.log(mixedNumbers(['IV', 5, 'six']));

//------------------------------------------------------------------------------------------

// C4. Remove Items from an Array with pop() and shift()------------------------------------

function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}
// console.log(popShift(['challenge', 'is', 'not', 'complete']));

//------------------------------------------------------------------------------------------


// C5. Remove Items Using splice()----------------------------------------------------------
/* 
Ok, so we've learned how to remove elements from the beginning and end of arrays using shift() and pop(), but what if we want to remove an element from somewhere in the middle? Or remove more than one element at once? Well, that's where splice() comes in. splice() allows us to do just that: remove any number of consecutive elements from anywhere in an array.

splice() can take up to 3 parameters, but for now, we'll focus on just the first 2. The first two parameters of splice() are integers which represent indexes, or positions, of the array that splice() is being called upon. And remember, arrays are zero-indexed, so to indicate the first element of an array, we would use 0. splice()'s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete. */


let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2, 3); //here 2 is the index number from which position the array should splice and 3 is how long the array should splice the elements.

// console.log(array);

//------------------------------------------------------------------------------------------

// C6. Add Items Using splice()-------------------------------------------------------------

function htmlColorNames(arr) {
  // Only change code below this line

  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
  // Only change code above this line
  return arr;
}
// console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

//------------------------------------------------------------------------------------------

// C7. Copy Array Items Using slice()--------------------------------------------------------

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);

//------------------------------------------------------------------------------------------

// C8. Copy an Array with the Spread Operator-------------------------------------------------

/* While slice() allows us to be selective about what elements of an array to copy, among several other useful tasks, ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax. The spread syntax simply looks like this: ... */

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
      newArr.push([...arr]);
    // Only change code above this line
    num--;

  }
  return newArr;
}

// console.log(copyMachine([true, false, true], 2));
// console.log(thatArray);

//------------------------------------------------------------------------------------------

// C9. Combine Arrays with the Spread Operator-------------------------------------------------------------------

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}

// console.log(spreadOut());

//------------------------------------------------------------------------------------------

// C10. Check For The Presence of an Element With indexOf()-----------------------------------------

function quickCheck(arr, elem) {
  // Only change code below this line
if(arr.indexOf(elem) >= 0){

  return true;
}
else{

  return false;
}
  // Only change code above this line
}

// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


//----------------------------------------------------------------------------------------------


// C11. Iterate Through All an Array's Items Using For Loops--------------------------------------- 

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// returns [12, 14, 80]


// C12. Create complex multi-dimensional arrays--------------------------------------------------------------

/* One of the most powerful features when thinking of arrays as data structures, is that arrays can contain, or even be completely made up of other arrays. We have seen arrays that contain arrays in previous challenges, but fairly simple ones. However, arrays can contain an infinite depth of arrays that can contain other arrays, each with their own arbitrary levels of depth, and so on. In this way, an array can very quickly become very complex data structure, known as a multi-dimensional, or nested array. Consider the following example: */


let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, ['deep', ['deeper', ['deepest']]], 'complex', 'nested'],
  ['loop', 'shift',  6, 7, 1000, 'method'],
  ['concat', false, true,  'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876',  'arbitrary', 'depth']
  // Only change code above this line
];
console.log(myNestedArray[4][3]);


// C13. Add Key-Value Pairs to JavaScript Objects----------------------------------------------------------

/* At their most basic, objects are just collections of key-value pairs. In other words, they are pieces of data (values) mapped to unique identifiers called properties (keys). Take a look at an example: */

/* let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};
foods['bananas'] = 13;
foods['grapes'] = 35;
foods['strawberries'] = 27; */


//----------------------------------------------------------------------------------------------------

// C14. Modify an Object Nested Within an Object------------------------------------------------------

let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};

// we use dot notation to reference the property:

nestedObject.data.onlineStatus.busy = 9;
console.log(nestedObject);


// C15. Access Property Names with Bracket Notation--------------------------------------------------------------

/* In the first object challenge we mentioned the use of bracket notation as a way to access property values using the evaluation of a variable. For instance, imagine that our foods object is being used in a program for a supermarket cash register. We have some function that sets the selectedFood and we want to check our foods object for the presence of that food. This might look like: */

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line
  
  return  foods[scannedItem];
  // Only change code above this line
}

// console.log(checkInventory("apple"));


//--------------------------------------------------------------------------------------------------------------


// C16. Use the delete Keyword to Remove Object Properties ------------------------------------------------------

/* In earlier challenges, we have both added to and modified an object's key-value pairs. Here we will see how we can remove a key-value pair from an object.

Let's revisit our foods object example one last time. If we wanted to remove the apples key, we can remove it by using the delete keyword like this: */

/* let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
console.log(foods); */

//-------------------------------------------------------------------------------------------------------


// C17.Check if an Object has a Property------------------------------------------------------------------

/* Now we can add, modify, and remove keys from objects. But what if we just wanted to know if an object has a specific property? JavaScript provides us with two different ways to do this. One uses the hasOwnProperty() method and the other uses the in keyword. If we have an object users with a property of Alan, we could check for its presence in either of the following ways: */

/* users.hasOwnProperty('Alan');
// or 
'Alan' in users; */

/* let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function isEveryoneHere(obj) {
  // Only change code below this line
  if (
    obj.hasOwnProperty('Alan') &&
    obj.hasOwnProperty('Jeff') &&
    obj.hasOwnProperty('Sarah') &&
    obj.hasOwnProperty('Ryan')

  ) {

    return true;
  }
  return false;
  // Only change code above this line
} */


//-----------------------------------------------------------------------------------------------------------

// C18. Iterate Through the Keys of an Object with a for...in Statement-----------------------------------------

let usersObj = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
function countOnline(usersObj) {
  let result = 0;
  for (let user in usersObj){
    if(usersObj[user].online == true){
      result++;
    }
    return result;


  }
  // Only change code above this line
}

//------------------------------------------------------------------------------------------------------------------

// C19. Generate an Array of All Object Keys with Object.keys()----------------------------------------------------

/* We can also generate an array which contains all the keys stored in an object using the Object.keys() method and passing in an object as the argument. This will return an array with strings representing each property in the object. Again, there will be no specific order to the entries in the array. */

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line
return Object.keys(obj);
  // Only change code above this line
}

console.log(getArrayOfUsers(users));


//---------------------------------------------------------------------------------------------------------------


// C20. Modify an Array Stored in an Object ---------------------------------------------------------------------

/* Take a look at the object we've provided in the code editor. The user object contains three keys. The data key contains five keys, one of which contains an array of friends. From this, you can see how flexible objects are as data structures. We've started writing a function addFriend. Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array. */


let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));