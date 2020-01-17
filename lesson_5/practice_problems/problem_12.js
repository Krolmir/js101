// return a new array identical in structure to the original, but containing
// only the numbers that are multiples of 3.

// input/output/example [[3],[9],[15, 18]]

// Rule : num % 3 === 0;
// A -
// itterate over the outer array, .forEach
// itterate over the inner array with filter, then append the return to a new
// array if array is not empty
//

function multipleOfThree(number) {
  return number % 3 === 0;
}

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

console.log(arr.map(element => {
  return element.filter(num => multipleOfThree(num));
}));


