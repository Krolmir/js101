// Write a function that returns the next to last word in the string passed
// as an argument

// Input: String
// Output: String

// Rules: Words are any sequence of non-blank characters
//        may assume that string will always contain at least 2 words

// Steps:
//  Write a penultimate function
//  create a variable that stores the string as an array split by ' ' spaces
//  create a variable to store the string stored in the second last variable
//  in the array and return it

function penultimate(string) {
  var array = string.split(' ');
  var result = array[array.length - 2];
  return result.toString();
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

// Write a function that returns the middle word of a string

// Steps:
// Create a variiable to store the split string in an array
// Check if array is .length 1 then return the word
// else if .length is even return middle 2 words
// else return middle word

function middleWord(string) {
  var array = string.split(' ');

  if (string === '') {
    console.log('Your string is blank!!!!!!!!!');
  } else if (array.length === 1) {
    return string;
  } else if (array.length % 2 === 0) {
    var word1 = array[(array.length / 2) - 1];
    var word2 = array[array.length / 2];
    return word1 + ' ' + word2;
  } else if (array.length % 2 === 1) {
    return array[Math.floor(array.length / 2)];
  }
}

// Test Cases + Edge Cases:
console.log(middleWord(''));
console.log(middleWord('This is a long sentence') === 'a');
console.log(middleWord('There are four words') === 'are four');
console.log(middleWord('One') === 'One');
console.log(middleWord('This is a better example of a long sentence') === 'example');