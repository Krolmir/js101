// Problem write a function that sorts the arrays but does not actually use sort

// Example: [1, 5, 9], [2, 6, 8]
//         =[1, 2, 5, 6, 8, 9]
// Rules: do not mutates arrays
//        cant use sort

// Input: Array with 2 arrays
// Output: Array sorted

// Steps:
// Initialize a results array = []
// initialize 2 index counters to 0
// itterate while both index counters are < array[0 and 1].lengths
//

function merge(array1, array2) {
  let result = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < array1.length || index2 < array2.length) {
    if (array1[index1] <= array2[index2] && index1 < array1.length || index2 >= array2.length) {
      result.push(array1[index1]);
      index1++;
    } else {
      result.push(array2[index2]);
      index2++;
    }
  }

  return result;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]