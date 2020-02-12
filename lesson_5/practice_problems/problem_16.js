// Write a program that turns the array into an object

// rules: each first item in each sub arary is the key while the second it the
//        value

// input: nested array
// output: object

// itterate over the array and assign each subarray index 0 to being the key
// assign index 1 of each sub array to the value

// define a function that takes an array as a paramater
// itterate over the array

// declare a result object
// add each pair to the obeject as u itterate through


let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

function arrayToObject(array) {
  let resultObject = {};

  array.forEach(subArray => {
    resultObject[subArray[0]] = subArray[1];
  });
  return resultObject;
}

console.log(arrayToObject(arr));

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }