const numbers = [12, 15, 18, 23, 24, 76, 90, 34, 98, 45, 1000];
const alphabets = ['ant', 'goat', 'orange', 'ball', 'cat', 'pineapple'];
const students = [
    {name: 'Kamal', number:45, subject: 'Math'},
    {name: 'Jamal', number:60, subject: 'Bangla'},
    {name: 'Dhamal', number:25, subject: 'Religion'},
    {name:'Pamal', number:13, subject: 'English'},
    {name:'Famal', number: 77, subject: 'Psychologi'}
];
// every method returns boolean value true or false when every elements of any array fulfill the condition it returns true else it returns false.
const lessThan20 = numbers.every((num) =>{
    return num < 20;
})
console.log(lessThan20);

// some method returns boolean value true or false when some elements of any array fulfill the condition it returns true else it returns false.
const somelessThan20 = numbers.some((nums) =>{
    return nums < 20;
});
console.log(somelessThan20);

const names = alphabets.every(name =>{
    return name.length === 3;
})
console.log(names);

const named = alphabets.some(names =>{
    return names.length === 3;
})
console.log(named);

const hasFailed = students.some(exam =>{
    return exam.number < 33;
})
console.log(hasFailed);

const hasMin = students.every(exams =>{
    return exams.number > 10;
})
console.log(hasMin);