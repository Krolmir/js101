// Problem: Write a function that takes a string and capitalizes the first
//          character of every word and lower cases the rest.

// Rules: A word is any sequence of non-whitespace characters

// Input: String
// Output: New String

// Steps:

// Initailize a results string
// split the string passed in as an argument and itterate over it with forEAch
// slice each callback value and return first letter with captitalize on it
//    - new string + = ' ' + word[0].upperCase() + word.slice(1,word.length)
// return new string

function wordCap(string) {
  let result = '';
  string.split(' ').forEach(word => {
    result += ' ' + word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
  });

  return result;
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'