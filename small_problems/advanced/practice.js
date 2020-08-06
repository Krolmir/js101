// Problem: Write a function that takes a sentence string as an argument and
//          returns that string with every occurence of a number word converted
//          to its corresponding digit.

// Rules: Watch Out for punctuation

// Input: String
// Output: String

// Steps:

// Itterate over our NUM constant and we assign a new RegExp to current itteration
//

const NUM = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function wordToDigit(string) {
  NUM.forEach(number => {
    let regex = new RegExp(number, 'g');
    string = string.replace(regex, NUM.indexOf(number));
  });

  return string;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));