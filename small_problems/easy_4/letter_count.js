// Write a function that takes a string and returns an object that has key
// value pairs with key being string size and value being the amount or words
// with that length

// Rules: a word is any sequence of non-space characters

// input: string
// output: object

// split the string into an array .split(' ');
// itterate over the array
// check the size of the array object and see if it exists in our object
//   if it exists add + 1 to the value total,
//   else create new key with name being the string verrsion of length
//     1 = value

const regex = /[^a-z0-9\s]/gi;

function wordSizes(string) {
  string = removeSpecialCharacters(string);
  console.log(string);
  let resultObj = {};

  string.split(' ').forEach(word => {
    let len = word.length;

    if (len === 0) {
    } else if (Object.keys(resultObj).includes(String(len))) {
      resultObj[len] += 1;
    } else {
      resultObj[len] = 1;
    }
  });

  console.log(resultObj);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

// Part 2

function removeSpecialCharacters(string) {
  return string.replace(regex, '');
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}