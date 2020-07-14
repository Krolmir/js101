// Write a function that takes a string, doubles every character in the string
//and returns the result as a new string

// Input: String
// Output: new String

// Steps:
// initalize a new string
// invoke foreach on the orriginal string split
// add double the characters back to the new string
// return the string

function repeater(string) {
  let newString = '';

  string.split('').forEach(char => {
    newString += char + char;
  });

  return newString;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""