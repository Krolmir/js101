// Write a function that takes 2 arrays of integers(same amount of elements)
// and returns a new array with the product of the integers at same indexs

// Input: 2 arrays
// Output: new array

// Steps:
// use .map to itterate over first arary , set an indx
// send the product to the new array

function multiplyList(array1, array2) {
  return array1.map((value, idx) => value * array2[idx]);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]