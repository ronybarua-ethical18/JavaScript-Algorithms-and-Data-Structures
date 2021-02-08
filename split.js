// split method is used to convert a string to a substring and return values with an array

const str ='a quick brown fox jumps over the lazy dog';
const str2 = '';
const words = str.split(' ');
const chars = str.split('');
const emptyStr = str2.split();
console.log(words);
console.log(chars);
console.log(emptyStr);

function splitify(str) {
    // Only change code below this line
  
    return str.split(/\W/);
    // Only change code above this line
  }
  splitify("Hello World,I-am code");