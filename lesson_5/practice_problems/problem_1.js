// sort the array based on the numerical value of the string
// input is an array of strings;
// output will be an array of strings;

// convert the array of strings into and array of numbers

// itterate over the array and convert using Number.

let arr = ['10', '11', '9', '7', '8'];

arr.sort((a, b) => Number(a) - Number(b));

console.log(arr);