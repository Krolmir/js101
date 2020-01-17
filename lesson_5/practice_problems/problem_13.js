// sort the array so that the sub arrays are ordered based on the sum of the
// off numberts

// I need to add all the odd numbers in the inner arrays

// input 2 layer nested array
// output will bne the same

// A:
// itterate over the outer array with a loop
// write a function to sum odd nnmbers in an array
// ujse sort on arr that uses the function we wrote

function addOddNumbers(array) {
  let total = 0;

  array.forEach(number => {
    if (number % 2 !== 0) total += number;
  });

  return total;
}

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort(function(a, b) {
   return addOddNumbers(a) - addOddNumbers(b);
});

// for (let index = 0; index < arr.length; index++) {
//   arr.sort(function(a, b) {
//     a - b;
//   });
// }

console.log(arr);
