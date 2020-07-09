// Write a function that takes a string of words or word and swaps the first
// and last charcter of each individual word.  Spaces delimit the words.

// split the string to an array
// change the word vlaues into an array
// swap values with naming


function swap(string) {
  let arr = string.split(' ');
  let resultArray = [];

  for (let idx = 0; idx < arr.length; idx += 1) {
    let tempArr = arr[idx].split('');
    let firstLetter = tempArr[0];
    let lastLetter = tempArr[tempArr.length - 1];

    if (tempArr.length > 1) {
      tempArr[0] = lastLetter;
      tempArr[tempArr.length - 1] = firstLetter;
      resultArray.push(tempArr.join(''));
    } else {
      resultArray.push(tempArr.join());
    }
  }
  console.log(resultArray.join(' '));

}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"