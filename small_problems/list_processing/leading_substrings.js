// Problem: Write a function  that takes a string argument and returns a list
//          of all substrings that start from the beginning of the string,
//          ordered from shortest to longest.

// Input: String
// Output: Array of strings

// Steps:

// initialize a results array
// write a for loop that itterates string.length times
// push slice with (0, index) to the results array

function leadingSubstrings(string) {
  let result = [];
  for (let idx = 1; idx < string.length + 1; idx += 1) {
    result.push(string.slice(0, idx));
  }

  return result;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]