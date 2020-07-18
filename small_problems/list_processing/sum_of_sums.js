// Problem:  Write a function that takes the sum of sums of an array.

// Rules: Can assume that the array wil always have atleast 1 number
//        [1, 2, 3] = 1 + (1 + 2) + (1 + 2 + 3) = 10'

// Input: Array
// Output: Number

// Steps

// Initialize and set to 0 a results variable.
// Itterate over the array and slice the idx as the end value everytime
// forEach(let idx = 1; idx <= array.length; idx += 1)
// result = array.slice(0,idx).reduce((a, b) => a +b);
// return result

function sumOfSums(array) {
  let result = 0;
  for (let idx = 1; idx <= array.length; idx += 1) {
    result += array.slice(0, idx).reduce((a,  b) => a + b);
  }

  return result;
}


console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35