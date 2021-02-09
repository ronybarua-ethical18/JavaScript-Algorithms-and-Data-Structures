/* The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate. */

const array1 = [1, 2, 3];
console.log(array1.includes(2));

const array2 = ['Cat', 'Dog', 'Bird'];
console.log(array2.includes('Dog'));

//differnce between two arrays
function diffArray(arr1, arr2) {
    return arr1.concat(arr2
    ).filter(item => !arr1.includes(item) || !arr2.includes(item));
   }
   
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));