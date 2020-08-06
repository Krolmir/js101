// Problem: Write a function that takes a 3x3 matrix and returns the transpose
//          of the matrix.

// Rules: Can not mutate the original Array

// Input: Array nested with 3 arrays
// Output: new Array nested with 3 arrays

// Steps:

// Initialize a result Array
// try a _.times(3) and build up 3 arrays then push them to the result

function transpose(array) {
  let result = [[],[],[]];
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];

  for (let count = 0; count < array.length; count += 1) {
    for (let innerCounter = 0; innerCounter < 3; innerCounter += 1) {
      result[innerCounter].push(array[count][innerCounter]);
    // arr2.push(array[count][1]);
    // arr3.push(array[count][2]);
    }
  }

  return result;
}


const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]