// Write a funciton that takes the average off all elements in an array.

// Rules: Rounded down
//        The array will never be empty and always have positive integers

// input: array
// output: number rounded down

// Steps:
// Use reduce to find the product then divice by length and round down

function average(array) {
  return Math.floor(array.reduce((a, b) => a + b) / array.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40