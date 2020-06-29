// Write a program that prompts the user for 2 positive integers
// Return the results of the following: addition, Subtraction, Product, Quotiont
// Remainder, and Power. (No need to validate)

// Input: Positive Integer
// Output: Strings with the information above

// Rules: Must be Positive Integers

const readlineSync = require('readline-sync');

var number1 = readlineSync.question('==> Enter the first number: ');
var number2 = readlineSync.question('==> Enter the second number: ');

function mathematicalOperations(number1, number2) {
  console.log(`${number1} + ${number2} = ${number1 + number2}`);
  console.log(`${number1} - ${number2} = ${number1 - number2}`);
  console.log(`${number1} * ${number2} = ${number1 * number2}`);
  console.log(`${number1} / ${number2} = ${number1 / number2}`);
  console.log(`${number1} % ${number2} = ${number1 % number2}`);
  console.log(`${number1} ** ${number2} = ${number1 ** number2}`);
}

mathematicalOperations(parseInt(number1), parseInt(number2));