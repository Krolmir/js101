// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log('What\'s the first number?');
let number1 = readline.question();

console.log('What\'s the second number?');
let number2 = readline.question();

console.log('What operation would you like to perform? \n 1) Add\n ' +
  '2) Subtract\n 3) Multiply\n 4) Divide');
let operation = readline.question();

// console.log(`number 1 = ${number1}, number 2 = ${number2}, operation = ` +
//   `${operation}`);

let output;
if (operation === '1') {
  output = Number(number1) + Number(number2);
} else if (operation === '2') {
  output = Number(number1) - Number(number2);
} else if (operation === '3') {
  output = Number(number1) * Number(number2);
} else if (operation === '4') {
  output = Number(number1) / Number(number2);
} else {
  console.log('That is not a valid option.');
}
console.log(output);