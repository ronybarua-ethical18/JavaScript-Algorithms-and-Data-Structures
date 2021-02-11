// palindrome checker 
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

function palindrome(str) {
    let regex = /[\W_]/g;
    let finalStr = str.toLowerCase().replace(regex, '');
    let reversed = finalStr.split('').reverse().join('');
    if (reversed === finalStr) {
        return true;
    }
    else {
        return false;
    }
}
// console.log(palindrome('kick'));

//Roman Numeral Converter-----------------------------------------------------------------
function convertToRoman(num) {
    let romanToNumber = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let romans = '';
    for (let keyValue in romanToNumber) {
        while (num >= romanToNumber[keyValue]) {
            romans += keyValue;
            num -= romanToNumber[keyValue];
            // console.log('num is decreased:', num, romans);
        }
    }
    return romans;
}
convertToRoman(15);

//----------------------------------------------------------------------------------------------

// Caesars Cipher ------------------------------------------------------------------------------
//findout ascii code of letters
function rot13(str) {
    let done = " ";
    for (let i = 0; i < str.length; i++) {
        let asciiNum = str[i].charCodeAt();
        if (asciiNum >= 65 && asciiNum <= 77) {
            done += String.fromCharCode(asciiNum + 13);
        } else if (asciiNum >= 78 && asciiNum <= 90) {
            done += String.fromCharCode(asciiNum - 13);
        }
        else {
            done += str[i];
        }
    }
    return done;
}
console.log(rot13("SERR PBQR PNZC"));

//--------------------------------------------------------------------------------------------

// Telephone number validator-----------------------------------------------------------------

function telephoneCheck(str) {
    let regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
    return regex.test(str);
  }  
console.log(telephoneCheck("555-555-5555"));

//Cash Register------------------------------------------------------------------

const currencyUnit = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
};
const checkCashRegister = (price, cash, cid) =>{
    let changeSum = cash * 100 - price * 100;
    let changeSumCheck = changeSum;
    let change = [];
    let status = '';

    let cidSum = 0;
    let filteredCid = cid.filter(elem => elem[1] !== 0).reverse();
    filteredCid.forEach(elem => {
        let curr = elem[0];
        let currSum = elem[1] * 100;
        cidSum += currSum;
        let amount = 0;
        while(changeSum >= currencyUnit[curr] && currSum > 0) {
            amount += currencyUnit[curr];
            changeSum -= currencyUnit[curr];
            currSum -= currencyUnit[curr];
        }
        if(amount !== 0){
            change.push([curr, amount / 100]);
        }
    });
    if(changeSum > 0){
        status = 'INSUFFICIENT_FUNDS';
        change = [];
    }else if(changeSum == 0 && changeSumCheck == cidSum){
        status = 'CLOSED';
        change = cid;
    }else{
        status = 'OPEN';
    }
    return {'status': status, 'change': change};
}
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);