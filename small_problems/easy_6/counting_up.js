// Problem: Write a function that takes an integer argument and returns an
//          array containing  all integers between 1 and the argument

// Rules: Inclusive & ascending order

// Input: Positive Integer
// Output: Array of numbers

// Steps:

// Initialize a results array
// create a for loop that itterates the amount of times based on the argument passed
//   each time we itterate add the idx to the results array

function sequence(number) {
  let results = [];

  for (let idx = 1; idx <= number; idx +=1) {
    results.push(idx);
  }

  return results;
}


console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]