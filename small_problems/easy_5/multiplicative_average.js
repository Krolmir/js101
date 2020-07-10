// Write a function that takes an array of integers.  Multiplies them together
// then divides them by the array.length and returns the result as a string
// rounded to 3 decimal places

// Input: array
// Output: string

// Steps:
// use .reduce to  multiply everything
// then divide by the length
// then use Math something to get decimals or something

function multiplicativeAverage(array) {
  return ((array.reduce((a, b) => a * b)) / array.length).toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"