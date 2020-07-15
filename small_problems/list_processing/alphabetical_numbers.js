// Problem: Write a function that takes an array of integers between 0 and 19
//          and returns an array of those integers sorted based on the English
//          word for each Number

// Rules: 0 - 19

// Input: Array of numbers
// Output: Array of numbers sorted by alphabetic order based on string version

// Steps:

// Initialize a constant that stores all the word number values at the equivlant
// spot in the array. Ie 'three' is at WORD_NUMBERS[3];

// call .map on the array and return the string value based on IDX of our constant
// sort the array of words
// convert back to numbers by calling map again and looking up index at WORD_NUMBERS


const WORD_NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
                      'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
                      'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
                      'eighteen', 'nineteen'];

function alphabeticNumberSort(array) {
  let temp = array.map(number => {
    return WORD_NUMBERS[number];
  });

  temp.sort();

  let result = temp.map(word => {
    return WORD_NUMBERS.indexOf(word);
  })
  console.log(result);
}



alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]