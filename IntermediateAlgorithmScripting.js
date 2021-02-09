                                // Intermediate Algorithm Scripting

// C1. Sum All Numbers in a Range-------------------------------------------------------------
function sumAll(arr) {
    const max = Math.max(arr[0], arr[1]);
    const min =Math.min(arr[0], arr[1]);
    let temp = 0;
    for(let i = min; i <= max; i++){
      temp += i;
    }
    console.log(temp);
    return temp;
  }
  
  sumAll([1, 4]);

  //------------------------------------------------------------------------------------------

  // C2. Differences Two Arrays----------------------------------------------------------------------

  function diffArray(arr1, arr2) {
    return arr1.concat(arr2
    ).filter(item => !arr1.includes(item) || !arr2.includes(item));
   }
   
   console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));


   //----------------------------------------------------------------------------------------

  //  C4.Seek and destroy -------------------------------------------------------------------

  function destroyer(arr) {
    var args = [...arguments];
    return arr.filter((val) => !args.includes(val));
  
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));