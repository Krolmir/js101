// Write a function that takes an array of elements and returns a new array
// with 2 arrays nested in side. The first array will contain the first half
// of the original array while the second array will contain the second half

// Rules: if the original array is an odd number of elements then the middle
//        element will get added into the first half of the array

// Input:Array
// Output: Array with 2 nested arrays

// Steps: Use slice to split the arary

function halvsies(array) {
  let firstHalf = [];
  let secondHalf = [];

  if (array.length % 2 === 1) {
    firstHalf = array.slice(0, array.length / 2 + 1);
    secondHalf = array.slice((array.length / 2) + 1, array.length);
   } else {
    firstHalf = array.slice(0, array.length / 2);
    secondHalf = array.slice(array.length / 2, array.length);

  }
  let result = [firstHalf, secondHalf];
  console.log(result);
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]