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


// Write a function that sorts an array by breaking it down into a nested
// subarrays, then work back to a flat array by using our merge function
// on 2 arrays until we get our flat array back.

// Example: [1, 6, 15, 2, 7]
//          [[1, 6], [15, 2, 7]]
//          [[[1], [6]], [[15, 2], [7]]]
//          [[[1], [6]], [[[15], [2]], [7]]]
//          [[1, 6], [2, 15], [7]]
//          [[1, 2, 6, 15]], [7]]
//          [1, 2, 6, 7, 15]

// array length 2 breaks down: 1
//                          3: 2
//                          4: 2
//                          5: 3
//                          length / 2 || if odd length / 2 + 1

// Rules: Can assume that every element of the array will be same data type
//        Can use our merge function

// Input: Array
// OutputL Sorted array

// Steps:
// Break down our array into nested arrays
// Sort with merge function until we have a flat array

// createNestedArray
// exit will be if array.length === 1 return array
// else breakArray;

function breakArray(array) {
  // console.log([array.slice(0, array.length / 2), array.slice(array.length / 2, array.length1)]);
  return [array.slice(0, array.length / 2), array.slice(array.length / 2, array.length1)];
}

function createNestedArray(array) {
  if (array.length === 1) return array;

  array = breakArray(array);
  array[0] = createNestedArray(array[0]);
  array[1] = createNestedArray(array[1]);

  return merge(array[0], array[1]);
}

function mergeSort(array) {
  let nestedArray = createNestedArray(array);


  return nestedArray;
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// // [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]