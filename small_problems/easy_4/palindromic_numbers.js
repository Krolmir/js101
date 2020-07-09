// Write a function that returns a boolean based on if the integer argument
// is palindromic or not.

// convert number to string, check if string is palindromic

function isPalindrome(string) {
  return (string.split('').reverse().join('') === string);
}

function isPalindromicNumber(number) {
  return isPalindrome(String(number));
}


console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true