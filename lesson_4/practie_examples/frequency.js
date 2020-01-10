let statement = "The Flintstones Rock";

// write a function that finds out the frequency of characters in a string
// returns it as an object
// A -
//  itterate over the string
//  save each letter as a key in the objecty and put 1 as the value
//  if the key exists add + 1 to the value

function characterCounter(string) {
  let resultObject = {};

  string.split('').forEach(letter => {
    if (letter === ' ') {

    } else if (Object.keys(resultObject).includes(letter.toLowerCase())) {
      resultObject[letter.toLowerCase()] += 1;
    } else {
      resultObject[letter.toLowerCase()] = 1;
    }
  });
  return resultObject;
}

console.log(characterCounter(statement));
// Output { T: 1, h: 1, e: 2, F: 1, l: 1, ... }