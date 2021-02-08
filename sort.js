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

const descending = numbers.sort((c, d) =>{
    return d - c;
}) 
// console.log(descending);

//here the sort method mutate the original array element, it will takes the last result that it operates and replace the values with original array
// console.log(numbers);

//to solve this side effect we can use slice method with sort method
const imutateArray = numbers.slice().sort((e, f) =>{
    return f - e;
}) 
console.log(imutateArray);
// console.log(numbers);

const students = [
    {name: 'Kamal', number:45, subject: 'Math'},
    {name: 'Jamal', number:60, subject: 'Bangla'},
    {name: 'Dhamal', number:25, subject: 'Religion'},
    {name:'Pamal', number:13, subject: 'English'},
    {name:'Famal', number: 77, subject: 'Psychologi'}
];

const sortingElements = students.slice().sort((a, b) =>{
    return a.number - b.number;
});
console.log(sortingElements);