// Write a function that returns a string that replaces all special chartacters
// with spaces.

// Explicit Rules: If there is multiple speciual characters in a row then they
//                 turn into 1 single space not multiple. There cant be multiple
//                 spaces in a row.

// Input: string
// output: new string

// split the string into an array/.

const VALID_CHAR = /[A-Za-z]/;

function cleanUp(string) {
  let array = string.split('');
  let newArray = [];


  array.forEach(char => {
    if (char.match(VALID_CHAR)) {
      newArray.push(char);
    } else {
      newArray.push(' ');
    }
  });

  newArray = removeSpaces(newArray);
  return newArray.join('');
}

function removeSpaces(array) {
  let newArray = [];

  for (let idx = 0; idx < array.length; idx += 1) {
    if (!((array[idx] === ' ') && (array[idx] === array[idx - 1]))) {
       newArray.push(array[idx]);
    }
  }
  return newArray;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "