// Write a function that takes an array of numbers, and returns an array with
// the same number of elements, with the elements value being the running total
// from the original array

// say we have 4 element array
// [0] = [0], [1] = [0] + [1], [2] = newArray[1] + [2], [3] = newArray[2] + [3]

function runningTotal(array) {
  let runningTotal = 0;

  let newArray = array.map(value => {
    return runningTotal += value;
  });

  return newArray;
}

// Examples:

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []