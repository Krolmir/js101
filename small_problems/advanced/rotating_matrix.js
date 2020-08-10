// Write a function that takes a matrix N x N and returns the result rotated
// by 90 degrees.

// Example - [1, 2, 3]
//           [4, 5, 6]
//           [7, 8, 9]

//         = [7, 4, 1]
//           [8, 5, 2]
//           [9, 6, 3]

// Input: Nested array
// Output: Nested array rotated  1 level

// Steps:
// Create the base array size we need as a result

// array.length will be  the amount of new arrays we need

// assign a index 1 counter
// itterate abackwards over array.length indx == array.legnth - 1 --
//   idx
//

function rotate90(array) {
  if (array.length === 0) return console.log('Array is empty');
  let result = [];
  for (let index = 0; index < array[0].length; index++) {
    result.push(new Array());
  }

  for (let idx = 0; idx < array[0].length; idx++) {
    for (let idxTwo = array.length - 1; idxTwo >= 0; idxTwo--) {
      result[idx].push(array[idxTwo][idx]);
    }
  }


  return result;
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]