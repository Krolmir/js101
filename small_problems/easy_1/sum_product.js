// write a program that takes an integer greater than 0 and then asks
// the user either the sum or product of all nummbers between 1 and the number

// input will be a string converted to a number
// output will be a number

// algorithm:
// an array of numbers from 1 to the number will be created  through some itteration
// will call ./ reduce either product or addition to that array

let rsync = require('readline-sync');

console.log("Please enter an integer greater than 0: ");
let number = parseInt(rsync.question());

console.log("Please enter 's' to compute the sum, or 'p' to compute the product.");
let operation = rsync.question();

let arr = [];

for (let index = 1; index <= number; index++) {
  arr.push(index);
}

let addition = (total, next) => total + next;
let product = (total, next) => total * next;

if (operation === 's') {
  console.log(arr.reduce(addition));
} else if (operation === 'p') {
  console.log(arr.reduce(product));
}
