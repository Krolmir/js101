// write a function like the one below except ignore case sensitivity
// ignores everything except a-z and 0-9, spaces special characters are ignored

// we should first send the string to a function that returns a new string with
// no non alpha numeric characters

const regex = /[^a-z0-9]/gi;

function removeNonAlphaNumeric(string) {
  return string.replace(regex, '');
}

function isPalindrome(string) {
  return (string.split('').reverse().join('') === string);
}

function isRealPalindrome(string) {
  string = removeNonAlphaNumeric(string);
  return isPalindrome(string.toLowerCase());
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false