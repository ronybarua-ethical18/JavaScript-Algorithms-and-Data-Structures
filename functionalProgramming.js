// Learn functional programming 

/* Functional programming (also called FP) is a way of thinking about software construction by creating pure functions. It avoid concepts of shared state, mutable data observed in Object Oriented Programming. Functional langauges empazies on expressions and declarations rather than execution of statements. */

// C1.Learn About Functional Programming ------------------------------------------------------

/* Functional programming is about:

Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

Pure functions - the same input always gives the same output

Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled */

//-------------------------------------------------------------------------------------------

// C2.Understand Functional Programming Terminology -----------------------------------------

/* Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions. In JavaScript, all functions are first class functions. */

/* The functions that take a function as an argument, or return a function as a return value are called higher order functions. */

//--------------------------------------------------------------------------------------------

// C3.Core concepts of functional programming ------------------------------------------------

// One of the core principles of functional programming is to not change things. Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.

// The previous example didn't have any complicated operations but the splice method changed the original array, and resulted in a bug.

// Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a side effect. A function, ideally, should be a pure function, meaning that it does not cause any side effects.

// functional programming is a form of declarative programming. 

//------------------------------------------------------------------------------------------

// C4.Use the map Method to Extract Data from an Array -------------------------------------

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];
// for (let i = 0; i < users.length; i++) {
//     const element = users[i].name;
//     console.log(element);   
// }
/* const names = users.map(user => user.name);
console.log(names); */

/* var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    }];
    const ratings = watchList.map(({Title:title, imdbRating:rating} )=> ({title, rating}));
    console.log(ratings); */

//------------------------------------------------------------------------------------------

// C6. Use the filter Method to Extract Data from an Array ---------------------------------

/* const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];
  
  const usersUnder30 = users.filter(user => user.age < 30);
  console.log(usersUnder30); */

/* var filteredList = watchList.map(movie =>{
  return {
    title:movie.Title,
    rating:movie.imdbRating
  }
  })
  .filter(movie =>{
    return parseFloat(movie.rating) >= 8.0; 
}) */
//----------------------------------------------------------------------------------------

// C7. Return Part of an Array Using the slice Method ------------------------------------

/* function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line

 return anim.slice(beginSlice, endSlice);
  // Only change code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3); */

//----------------------------------------------------------------------------------------

// C8. Remove Elements from an Array Using slice Instead of splice------------------------

/* function nonMutatingSplice(cities) {
  return cities.slice(0, 3);
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities); */

//-----------------------------------------------------------------------------------------

// C9. Combine Two Arrays Using the concat Method------------------------------------------

function nonMutatingConcat(original, attach) {
  // Only change code below this line
  return original.concat(attach);
  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];

//console.log(nonMutatingConcat(first, second));

//----------------------------------------------------------------------------------------

// C10.Use the reduce Method to Analyze Data ---------------------------------------------

// sum of an array 
const numbers = [32, 42, 52, 62, 72, 82, 92, 100];
const newResult = numbers.reduce(function (acc, value) {
  const sum = acc + value;
  return sum;
});
console.log(newResult);

// find out max number 
const max = numbers.reduce((acc, val) => {
  return Math.max(acc, val);
})
// console.log(max);

const maximum = numbers.reduce((acc, val) => Math.max(acc, val));
console.log(maximum);

// total cost for products 
const products = [{
  name: 'Pen',
  amount: 3,
  price: 10
}, {
  name: 'Khata',
  amount: 5,
  price: 60
}, {
  name: 'Scale',
  amount: 4,
  price: 15
}]

const totalCost = products.reduce((acc, item) => {
  return acc + item.amount * item.price;
}, 0)
console.log(totalCost);

const votes = ['Yes', 'No', 'Yes', 'Yes', 'No', 'Yes', 'Na Vote', 'No', 'Absent'];
const result = votes.reduce((acc, vote) => {
  if (acc[vote]) {
    acc[vote]++;
  }
  else {
    acc[vote] = 1;
  }
  return acc;
}, {});
console.log(result);

//---------------------------------------------------------------------------------------------

// C11. find out the powers of positive number using high order function ----------------------

const squareList = arr => {
  return arr
    .filter(num => num > 0 && num % parseInt(num) === 0)
    .map(num => Math.pow(num, 2));
};
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

//--------------------------------------------------------------------------------------------

// C13.Solving problems with sort method -----------------------------------------------------

const numbers = [23, 24, 76, 90, 34, 98, 45, 1000];
const alphabets = ['ant', 'goat', 'orange', 'ball', 'cat', 'pineapple'];

//by default sort method sorts the elements from small to large and it takes the first number or element from an array elements to sort for examples
const sorting = numbers.sort();
// console.log(sorting);

const sortingletter = alphabets.sort();
// console.log(sortingletter);

//if we want to sort elements in a dynamic way
// the rules of sort methods are 
// 1. if value is less than 0 a is sort before b
// 2. if value is greater than 0 b is sort before a
// 3. if value is equal to same then a is sort before b

// it returns value in an ascending order 
const ascending = numbers.sort((a, b) => {
  return a - b;
})
// console.log(ascending);

const descending = numbers.sort((c, d) => {
  return d - c;
})
// console.log(descending);

//here the sort method mutate the original array element, it will takes the last result that it operates and replace the values with original array
// console.log(numbers);

//to solve this side effect we can use slice method with sort method
const imutateArray = numbers.slice().sort((e, f) => {
  return f - e;
})
console.log(imutateArray);
// console.log(numbers);

const students = [
  { name: 'Kamal', number: 45, subject: 'Math' },
  { name: 'Jamal', number: 60, subject: 'Bangla' },
  { name: 'Dhamal', number: 25, subject: 'Religion' },
  { name: 'Pamal', number: 13, subject: 'English' },
  { name: 'Famal', number: 77, subject: 'Psychologi' }
];

const sortingElements = students.slice().sort((a, b) => {
  return a.number - b.number;
});
console.log(sortingElements);

//-----------------------------------------------------------------------------------------

// C14. Combine an Array into a String Using the join Method ------------------------------

function sentensify(str) {
  return str.split(/\W/).join(" ");
}
sentensify("May-the-force-be-with-you");