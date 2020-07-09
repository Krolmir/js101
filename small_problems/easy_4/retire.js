// Write a program that logs when the user will retire, and how many more years
// the user has to work until retirement

// input: userInput 2 strings that will coerce to numbers
// output: The current Date, year of retireing, years of work left to go. All
//         outputed in String format to the console.

// Example:
// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

// Write some prompts for the user to input data
// write a function that takes age & retire age and figures out what year the
// usert can retire at and how many years it will take.

// gonna need to look at Date
// create a const with the current date


const readLineSync = require('readline-sync');
let date = new Date();
let age = readLineSync.question('What is your age? ');
let retireAge = readLineSync.question('At what age would you like to retire? ');

function calculaterRetirement(age, retireAge, date) {
  let retireYear = date.getFullYear() + (retireAge - age);

  console.log(`It's ${date.getFullYear()}. You will retire in ${retireYear}`);
  console.log(`You have only ${retireYear - date.getFullYear()} years of work to go!`);
}

calculaterRetirement(age, retireAge, date);