// Write a function that returns true if the argument passed is a palindrome.

// Rules: A palindrome reads the same forwards and backwards
//        A and a are not the same

// initialize a function with 1 parameter, a string
// cut the string in half, reverse one , compare it

// if .length % 2 === 1

// function isPalindrome(string) {
//   let str1 = '';
//   let str2 = '';

//   if (string.length % 2 === 0) {
//     str2 = string.slice(string.length / 2, string.length);
//     str1 = string.slice(0, string.length / 2);
//   } else {
//     str2 = string.slice(string.length / 2 + 1, string.length);
//     str1 = string.slice(0, string.length / 2);
//   }

//   return (str2.split('').reverse().join('') === str1);
// }

function isPalindrome(string) {
  return (string.split('').reverse().join('') === string);
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true