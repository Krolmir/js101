// Problem: Write a function that takes a non-empty string argument and returns the
//          middle character

// Rules: If the length is even return 2 characters
//        If the length is odd return 1 character

// Input: String (non-empty)
// Output: String 1 or 2 characters

// Steps:
// Get string length / 2 to find index of middle character
// use charAt I think to return the middle char

function centerOf(string) {
  let middle = string.charAt(string.length / 2);
  if (string.length % 2 === 1) {
    return middle;
  } else {
    return middle = string.charAt((string.length / 2) - 1) + middle;
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"