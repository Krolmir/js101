// Write a function that takes an integer (positive) and returns an array
// of all the digits in the number

// Input: Positive Number
// Output: array

// Steps:
// call string on the number. Then split it

function digitList(number) {
  let string = String(number).split('');

  return string.map(value => Number(value));
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]