// Write a function that returns an array that contains every other element
// of an array.
// Rules: return 1st 3rd 5th etc

// Input: Array of something
// Output: Array of values

// Steps:

function oddities(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
      result.push(array[i]);
    }
  }
  return result;
}

function evens(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (i % 2 == 1) {
      result.push(array[i]);
    }
  }
  return result;
}

//Test Cases
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

console.log(evens([2, 3, 4, 5, 6]));
console.log(evens([1, 2, 3, 4, 5, 6]));
console.log(evens(["abc", "def"]));
console.log(evens([123]));
console.log(evens([]));