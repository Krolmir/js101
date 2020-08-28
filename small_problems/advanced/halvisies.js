// Write a function that takes an array and returns an array containing 2 elements.
// First half in first second half in second. If Odd extra in first

// Input: Array
// Output: 1 Level nested array

// Steps:
// alice the array

function halvsies(array) {
  let result = [];
  result[0] = array.slice(0, Math.ceil(array.length / 2));
  result[1] = array.slice(Math.ceil(array.length / 2), array.length);

  return result;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]