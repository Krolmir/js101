// Problem: Write a function that returns a boolean based on if all the characters
//          in the string argument are uppercase

// Rules: Ignore all non alphabetic characters'

// Input: String
// Output: Boolean

// Steps:

// replace all non alphabetic characters with '' using regex
// check to see if all characters are upcase with regex

const NON_ALPHABETIC = /[^a-z]/gi;

function isUppercase(string) {
  let newS =  string.replace(NON_ALPHABETIC, '');

  return newS === newS.toUpperCase();
}



console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true