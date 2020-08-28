// Write a function that searches for a value and returns its index based on
// a binary serarch method.

// Rules: Binary search is when you split the array in half see if the value
//        is the current index then slice up or down and reapeat untill the
//        value is found
//        return -1 if it is not in the array

// INput: Array, value
// Output: Index of foudn value

// Steps:
// initialize a temp array so we dont mutate
// initialize an index counter to 0
//  Create a for loop and itterate until the value is found or until, nothing to slice
//  check if value is array[math floor array.length / 2]
//    return index of value in array
//  else
//    check if value is above or below current value
//      if value > then add slice(lower).length to index
//    slice the proper half
//

function arrHalfIndex(arr) {
  return Math.floor(arr.length / 2);
}

function binarySearch(array, value) {
  let arr = array;
  let index = 0;
  while (true) {
    if (arr[arrHalfIndex(arr)] === value) {
      return arrHalfIndex(arr) + index;
    } else if (value < arr[arrHalfIndex(arr)]) {
      arr = arr.slice(0, arrHalfIndex(arr));
    } else {
      index += arrHalfIndex(arr) + 1;
      arr = arr.slice(arrHalfIndex(arr) + 1);
    }
    if (arr.length <= 1 && arr[0] !== value) return -1;
  }
}

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us',
                   'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria',
                   'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 22, 45, 65, 89, 102], 5));    // 1
console.log(binarySearch([1, 5, 7, 11, 22, 45, 65, 89], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 23));     //4

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6