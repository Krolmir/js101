// Write a function that takes a string and doubles every character except,
// vowels , digits, punctiation, or whitespace

// Input: String
// Output: new String

// Steps:
// Use a regex const to determine weatrher the above condition is true

const regex = /[aeiou\W+1-9]/gi;

function doubleConsonants(string) {
  let newString = '';

  string.split('').forEach(char => {
    if (char.match(regex)) {
      newString += char;
    } else {
      newString += char + char;
    }
  });

  return newString;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""