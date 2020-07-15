// Problem: Write a function that takes two arguments. Each an array of numbers
//          return 1 new array that has all the products of multiplying all
//          values freom each array. IE - [1,2] [2,3] = [2,3,4,6]

// Rules: Must be sorted in ascending numerical order
//        The arrays will not be empty ever

// Input: 2 Arrays
// Output: 1 Array

// Steps:

// Use 2 forEach calls  to itterate and multiply each value.
//   Push it to a new result aray
// Sort the result array

function multiplyAllPairs(arr1, arr2) {
  let result = [];

  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      result.push(num1 * num2);
    });
  });

  return result.sort((a, b) => {
    return a - b;
  });
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]