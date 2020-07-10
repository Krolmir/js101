// Write a function that takes 2 arrays as an argument and combines them
// making sure to not have any duplicate values.

// input: 2 arrays
// Output: one combined array no duplicates

// steps:
// itterate over each array and push values to a new array if they arent already
// in the array

function copyNonDups(resultArray, array) {
  array.forEach(value => {
    if (!resultArray.includes(value)) {
      resultArray.push(value);
    }
  });
}

function union(array1, array2) {
  let resultArray = [];
  copyNonDups(resultArray, array1);
  copyNonDups(resultArray, array2);
  console.log(resultArray);
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]