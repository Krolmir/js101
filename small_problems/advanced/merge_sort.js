// Wirte a function that sorts an array using recursion.  We want to take an array
// of values and sort it based the merge sort algorithm.  Breaking the elements
// into nested subarrays then combining them back sorted

// Example: [4,6,3,1]
//          [[4,6],[3,1]]
//          [[[4],[6],[3],[1]]]
//          [[4,6],[1,3]]
//          [1,3,4,6]

// INput: array
// Output: sorted array

// Steps:

// Break the array down into a 1 value nested array


function breakArray(array) {
  if (array.length === 1) {
    return array;
  } else {
    console.log(`Array before break ${array}`);
    array[0] = breakArray(array.slice(0, array.length / 2));
    array[1] = breakArray(array.slice(array.length / 2, array.length));
    console.log(`Array after break ${array}`);
    console.log(`Array[0] : ${array[0]}`);
    console.log(`Array[1] : ${array[1]}`);

  }
  return array;
}

function mergeSort(array) {
  breakArray(array);

  console.log(array);
}

mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
mergeSort([5, 3]);                 // [3, 5]
mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

// mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]