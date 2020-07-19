// Problem: Write a function that takes a string an reverses all the cases.
//          Uppercase letters will be swapped to lowercase and lower case will be
//          swapped to uppercase. Everything else will be left unchanged

// Input: string
// Output: new String

// Steps:

// .split the string and itterate over it with map
// check if char falls between a-z and A-Z and return swpped value or return original char

function swapCase(string) {
  return string.split('').map(char => {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else if (char === char.toLowerCase()) {
      return char.toUpperCase();
    } else {
      return char
    }
  }).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"