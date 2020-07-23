// Problem: Write a function that returns a number based on the length of the longest substring palindrome

// Rules: If the string is 0 length return 0
//        Palindrome is written the same backwords as forwards ie dad === dad.reverse

// Input: String
// Output: Number

// Steps:

// Sub Problem: Return all palindromes function
// function that takes a string
// checks if its a palindrom
// returns the true or false
// string.slice(0, string.length / 2) === (string.length / 2, string.length - 1)

//Sub Problem return all substring
// initialize a result array = []
// itterate
// capture each substring using for loop and idx
// for loop idx = 0
//   result.push(string.slice(idx, string.length)
//   idx ++
//

// Sub Problem pass the orginal string into the getsubstrings and build a big array
// of all substrings
// initialize a result variable
// itterate over the lenght of the string
// each itteration slice the last char and repass it as an argument to get substrings
// for (idx = string.length; idx > 0; idx -= 1)
//  result.push(getSubstrings(string.slice(0, idx)))


// initialize a result variable to 0
// call is palindrone on our array by itterating over it
//

function longestPalindrome(string) {
  let result = 0;
  let arrayOfSubstring = getAllSubstrings(string);

  let palindrom = arrayOfSubstring.flat().filter(subString => {
    return isPalindrome(subString);
  });

  palindrom.forEach(word => {
    if (word.length  > result) {
      result = word.length;
    }
  });
  return result;
}

function getAllSubstrings(string) {
  let result = [];
  for(let idx = string.length; idx > 0; idx -= 1) {
    result.push(getSubstrings(string.slice(0, idx)));
  }
  return result;
}

function getSubstrings(string) {
  let result = [];
  for (let idx = 0; idx < string.length; idx += 1) {
    result.push(string.slice(idx, string.length));
  }
  return result;
}

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

// console.log(isPalindrome("test"));
// console.log(isPalindrome("testset"));
// console.log(isPalindrome("dad"));

// console.log(getSubstrings('baablkj12345432133d'));
// console.log(getAllSubstrings('baablkj12345432133d'));

console.log(longestPalindrome("a")); // 1
console.log(longestPalindrome("aa")); // 2
console.log(longestPalindrome("baa")); // 2
console.log(longestPalindrome("aab")); // 2
console.log(longestPalindrome("baabcd")); // 4
console.log(longestPalindrome("baablkj12345432133d")); // 9