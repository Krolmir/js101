// Write a program that Asks for user's name.
// Greet the user. "Hello "name"

// Rules
// If the user replys with a "!" at the end of their name, The computer will
// respond in all Caps with "HELLO "NAME". WHY ARE WE SCREAMING?

// User Input: String
// Output: String

const readlineSync = require('readline-sync');

console.log('What is your name? ');
var input = readlineSync.question();

if (input.endsWith('!')){
  console.log(`HELLO ${input.toUpperCase().substring(0,input.length - 1)}. ` +
              `WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${input}.`);
}

