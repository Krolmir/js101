// Problem: Write a function that takes 2 arguments. First number determines the
//          count for the size of the return array or the amount of itterations
//          The second number determines the starting point.

// Rules: Start from the second number and get multiples based on the count for
//        amount of times.
//        return empty array if count === 0
//        count must be an integer 0 or greater

// Input: 2 Numbers
// Output: Array

// Steps:

// Initialize a results Array.
// create a for loop that will itterate the amount of times === to count
//   push the second argument to the resultsArray
//   double the second argument and push it to results array for every other itteration
// return results array

function sequence(count, number) {
  let resultsArray = [];

  for (let idx = 1; idx <= count; idx += 1) {
    resultsArray.push(idx * number);
  }

  return resultsArray;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []