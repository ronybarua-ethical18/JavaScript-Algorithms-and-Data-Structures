function multiply(a, b, c){
    return a * b * c
}
console.log(multiply(4, 5, 6));

// Using Currying pattern
function curriedFunction(a){
    return function(b){
        return function(c){
            return a * b * c
        }
    }
}

// curried pattern using arrow function
const curriedSimple = (a) => (b) => (c) => a + b + c
console.log(curriedSimple(1)(2)(3));


// console.log(curriedFunction(4)(5)(6));
const step1 = curriedFunction(4)
// console.dir(step1);
const step2 =  step1(5)
// console.dir(step2)
const step3 = step2(6)


// real life example 
const productDiscount = (disc) =>{
    return (price) =>{
        return price - price * disc
    }
}

const tenPercentDiscount = productDiscount(0.1)
const twentyPercentDiscount = productDiscount(0.2)
const customer1 = tenPercentDiscount(500)
const customer2  = twentyPercentDiscount(1000)
console.log(customer2);


// curry converter funtion 
const curry = (func) =>{
    return function curried(...args){
        if(args.length >= func.length){
            return func.apply(this, args)
        }else{
            return function(...args2){
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}

const sum = (a, b, c) =>{
    return a + b + c;
}
const curriedSum = curry(sum)
// console.log(curriedSum(1, 2, 3))
// console.log(curriedSum(1)(2, 3))
// console.log(curriedSum(1)(2)(3))

const log = (date, importance, message) =>{
    return console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} : ${importance} : ${message}`)

}
const curriedLog = curry(log)
curriedLog(new Date(), 'Info', 'Some info')

const currentLog = curriedLog(new Date()) //partial function (The function which is a function of curried pattern which i will reuse in future is called partial function) 
currentLog('very important', 'we have a meeting tomorrow')

const currentMessage = curriedLog(new Date(), 'Info') //partial function
currentMessage('Its urgent to meet')
currentMessage('Its urgent to do')