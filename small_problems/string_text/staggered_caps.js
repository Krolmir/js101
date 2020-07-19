// Problem: Write a functioin that takes a string as an argement and returns
//          a new string with alternating characters uppercase and lowercase.
//          Example: 'this string' should be 'ThIs sTrInG'

// Rules: All non alphabetic characters including whitespaces count as a swap spot

// Input: String
// Output: new String

// Steps:

// itterate over the string by splitting then calling .map since we want a new
// string with the same string length
// check if index is even or not. if even upcase if odd lowcase

function staggeredCase(string) {
  return string.split('').map((char, idx) => {
    if (idx % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"