// Problem: Write a function that takes a string and returns the length of the
//          longest palindrome substring

// Rules: Palindrome are characters the same forward and back

// Input: String
// Output: Length of longest palindrome as integer

// Steps:

// Write a method that returns all substrings of a string.
//  - Use 2 for loops to itterates first over the initial string, and second
//    over intial starting point + 1 with slice

// Write a function that takes an arrayt of strings and returns only the palindromes
// itterate over the array with filter and check if palindrom
// palindrom is string === string.reverse

function longestPalindrome(string) {
  let resultArray = getSubString(string);
  resultArray = getAllPalindromes(resultArray);

  let len = 0;
  resultArray.forEach(palin => {
    if (palin.length > len) {
      len = palin.length;
    }
  });

  return len;
  // resultArray = resultArray.sort((a, b) => a.length - b.length);
  // return resultArray[resultArray.length - 1].length;
}

function getSubString(string) {
  let result = [];
  for (let startIndex = 0; startIndex <= string.length; startIndex += 1) {
    for (let mainIndex = 0; mainIndex <= string.length - startIndex - 1; mainIndex += 1) {
      result.push(string.slice(startIndex, string.length - mainIndex));
    }
  }
  return result;
}

function getAllPalindromes(array) {
  return array.filter(string => {
    return isPalindrone(string);
  });
}

function isPalindrone(string) {
  return string === string.split('').reverse().join('');
}



console.log(longestPalindrome("a")); // 1
console.log(longestPalindrome("aa")); // 2
console.log(longestPalindrome("baa")); // 2
console.log(longestPalindrome("aab")); // 2
console.log(longestPalindrome("baabcd")); // 4
console.log(longestPalindrome("baablkj12345432133d")); // 9