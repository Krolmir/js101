// Problem: Write9 a function that returns a one dimensional array of fruits in
//          which the number of times you see the fruit is based on the 2
//          dimensional array

// Rules:   Format of input [['apple', 5], ['orange', 7]];

// Input:   2 dimenstional array
// Output:  Array

// Steps:

// initialize an empty result array
// itterate over the original array
// store the values in a key value pair based on destructureing
// let i = 0
// while(i < value)
// result.push( key )
// i++
// return i

function buyFruit(array) {
  let result = [];
  array.forEach(keyValue => {
    let [key, value] = keyValue;
    let counter = 0;
    while(counter < value) {
      result.push(key);
      counter += 1;
    }
  });

  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]