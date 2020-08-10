// Problem: Modify my Transpose 3x3 function to work for an M x N array

// Input: Nestest array 2 layers
// Output: Nesxted Array 2 layers

// Steps:

// Modify result so we build it based on the input


function transpose(array) {
  let result = [];
  for (let size = 0; size < array[0].length; size += 1) {
    result.push(new Array());
  }

  for (let count = 0; count < array.length; count += 1) {
    for (let innerCounter = 0; innerCounter < array[0].length; innerCounter += 1) {
      result[innerCounter].push(array[count][innerCounter]);
    }
  }

  return result;
}

let matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]