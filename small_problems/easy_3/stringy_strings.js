// Write a function that takes an integer and returns a string of alternating
// '1's and '0's. Always starts with a 1

// Create a loop that loops through number times and just alternates writeing
// 1 and 0

function stringy(number) {
  let result = '';
  for (let i = 0; i < number; i++) {
    if (i % 2 === 0) {
      result += '1';
    } else {
      result += '0';
    }
  }
  return result;
}


console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"