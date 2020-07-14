// Problem: Write a function that takes a string as an argument and reverses
//          all the words that are 5 or more letters.

// Rules: String argument will consist of only letters and spaces
//        Words will be seperated by a single space

// Input: String
// Output: new String

// Steps:

//  initalize a results string
//  split the original string and itterate over it with map
//    if the word.length > 4 return the reverse the word
//    else return the word

function reverseWords(string) {
  let newString = string.split(' ').map(word => {
    if (word.length > 4) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  });

  return newString.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"