// Write a program that asks the user for 6 numbers, then logs a message that
// describes whether or not the sixth number appears amongst the first five

// input: user input 6 strings that we will store in and array
// output: console.log that shows if the last number is in the array
//



const readLineSync = require('readline-sync');
let array = [];

function checkArray(number, array) {
  return array.includes(number);
}

array.push(readLineSync.question("Enter the 1st number: "));
array.push(readLineSync.question("Enter the 2nd number: "));
array.push(readLineSync.question("Enter the 3rd number: "));
array.push(readLineSync.question("Enter the 4th number: "));
array.push(readLineSync.question("Enter the 5th number: "));
let number = readLineSync.question("Enter the 6th number: ");

if (checkArray(number, array)) {
  console.log(`The number ${number} appears in ${array.join(', ')}`);
} else {
  console.log(`The number ${number} does not appear in ${array.join(', ')}`);
}

console.log(array);