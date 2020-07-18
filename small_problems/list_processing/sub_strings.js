// Problem: Write a function that takes a string and returns all the possible
//          substring.

// Rules: The return should be an array that is ordered by strings that start from
//        index 0 then index 1 etc, Shortest strings to longest.

// Input: String
// Output: Array of subStrings

// Steps:

// initialize a retults array;
// itterate over the whole string with string.length() in a for loop
// for (idx = 0 ; idx < string length; idx + 1)
//  string.slice(idx)
// result.push(leadingSubstrings(string.slice(idx))
//

function leadingSubstrings(string) {
  let result = [];
  for (let idx = 1; idx < string.length + 1; idx += 1) {
    result.push(string.slice(0, idx));
  }

  return result;
}

function substrings(string) {
  let result = [];
  for (let idx = 0; idx < string.length; idx += 1) {
    result.push(leadingSubstrings(string.slice(idx)));
  }

  return result.flat;
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]