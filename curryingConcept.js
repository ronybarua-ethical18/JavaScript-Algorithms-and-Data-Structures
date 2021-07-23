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