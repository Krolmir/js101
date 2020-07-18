// Problem: Write a function that takes one argument a number and takes the sum
//          of its digits.

// Rules: Do this without using a for, while, or do while loops. Use method calls

// Input: Number
// Output: Number

// Steps:

// coerce the number into a string
// split the string
// call .reduce on the array
// return new number

function sum(number) {
  return String(number).split('').reduce((a, b) => Number(a) + Number(b))
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45