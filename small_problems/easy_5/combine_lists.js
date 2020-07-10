// Write a function that takes 2 arrays of equal elements and returns a new
// array with alternating values from the previous arrays

// Input: 2 Arrays of equal length and not empty
// Output: new Array

// Steps:
// for loop that itterates count < one of the arrays length
// pushes elements to a new array 1 then 2

// function interleave(array1, array2) {
//   let result = [];

//   for (let idx = 0; idx < array1.length; idx += 1) {
//     result.push(array1[idx]);
//     result.push(array2[idx]);
//   }

//   return result;
// }

function interleave(array1, array2) {
  let result = [];

  array1.forEach((value, idx) => {
    result.push(value, array2[idx]);
  });

  return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]