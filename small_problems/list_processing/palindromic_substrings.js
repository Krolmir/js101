// Problem: Write a function that returns a list of all palindromic substrings
//          Sorted by the order of appearance in the input string.

// Rules: Case sensitive so AbA is a palindrome but Aba is not
//        Consider all character.
//        A palindrom is anything spelled the same forward and back case sensitive

// Input: String
// Output: array of strings

// Steps:

// Considering we have the initial 2 functions all we really need to do is split
// the string and pass each value into the leadingSubstrings function then check
// for palindromes

// lets initializea results array
// itterate over string by splitting it based on (' ');
// add all the substrings to the results array and flatten it.
// filter over the array and determing weather something is a palindromes

// write a palindrom  function that takes 1 argment thats a string
// if string.length === 1 returne false
// check if string === string.reverse
// true

function palindromes(string) {
  let result = [];
  string.split(' ').forEach(miniString => {
    result.push(substrings(miniString));
  });

  result = result.flat();
  return result.filter(subString => {
    return isPalindrome(subString);
  });
}

function isPalindrome(string) {
  if (string.length === 1) return false;
  return string === string.split('').reverse().join('');
}

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

  return result.flat();
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]