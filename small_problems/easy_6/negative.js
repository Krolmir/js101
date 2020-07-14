// Problem: Write a function that takes a number as an argument and returns
//          a number as a negative regardless of what it is

// Input: number
// Output: negative number

// Steps:
// if number < 0 return number
// else coerce to string add '-' ocnvert back to number

function negative(number) {
  if (number < 0) {
    return number;
  } else {
    return Number('-' + String(number));
  }
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0