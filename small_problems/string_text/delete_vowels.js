// Problem: Write a functio that takes an array of strings and returns an array
//          with the same values exacept all the vowels are removed

// Rules: Vowels consists of a e i o u

// Input: Arrray of strings
// Output: Same length Array of strings

// Steps:

// First thing that comes to mind is .map might be good here
// creae a regex that matchs all vowels /[aeiou]/gi

// itterate over the array with map
// in the callback call replace on each value that will replace the regex with ''

const VOWELS = /[aeiou]/gi;

function removeVowels(array) {
  return array.map(string => {
    return string.replace(VOWELS, '');
  });
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]