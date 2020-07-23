// Problem: Write a functin that takes a sentence and returnsthe string with every
//          Occurance of a "number word"- zero one etc converted t its corresponding
//          digit

// Rules: Watch out for punctuation attached to numbers

// Input: String
// Output: String

// Steps:

// I want to try regex to replace each number while we search
// Split the string into an array and itterate over it
// Compare the word with our NUM array and see if there is a match
// if match replace the current word with the index of itsd match on NUM



const NUM = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
           'eight', 'nine'];
const REGEX = /[^a-z0-9]/gi;

function wordToDigit(string) {
  NUM.forEach(number => {
    let regex = new RegExp(number, 'g');
    string = string.replace(regex, NUM.indexOf(number));
  });

  return string;
}

// function wordToDigit(string) {
//   return string.split(' ').map(word => {
//     if (NUM.includes(word.replace(REGEX, ''))) {
//       return NUM.indexOf(word.replace(REGEX, ''));
//     } else {
//       return word;
//     }

//   }).join(' ');
// }

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

