/* reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function for each value of the array (from left-to-right) and the return value of the function is stored in an accumulator */

// sum of an array 
const numbers = [32, 42, 52, 62, 72, 82, 92, 100];
const newResult = numbers.reduce((accumulator, currentValue) => accumulator + currentValue)
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
  name:'Pen',
  amount: 3,
  price:10
},{
  name:'Khata',
  amount: 5,
  price:60
},{
  name:'Scale',
  amount: 4,
  price:15
}]

const totalCost = products.reduce((acc, item) =>{
  return acc + item.amount * item.price;
}, 0)
console.log(totalCost);

//count total votes for individual property
const votes = ['Yes', 'No', 'Yes', 'Yes', 'No', 'Yes', 'Na Vote', 'No', 'Absent'];
const result = votes.reduce((acc, vote) => {
  if(acc[vote]){
    acc[vote]++;
  }
  else{
    acc[vote] = 1;
  }
  return acc;
}, {});
console.log(result);