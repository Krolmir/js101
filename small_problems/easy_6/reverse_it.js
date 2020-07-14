// Problem:  Write a function that takes a string argument and returns a new
//           string containing the words reversed.

// Input: String
// Output: new String

// Steps:

//  initialize a resultString
//  split the string
//  call reverse on it
//  join it back up
//  return the new string

function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}


console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"