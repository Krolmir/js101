// create a function that takes an array of numbers and a second argument that
// will tell us what to multiply each number in the array by.
// return a new arraydont mutate
//algorithm:
// declate a enw array variable set it to empty
// itterate over the passed array
// multiply each value by the number passed
// push it to the new array

function multiply(array, num) {
  let newArray = [];

  for (let index = 0; index < array.length; index++) {
    newArray.push(array[index] * num);
  }
  return newArray;
}




let myNumbers = [1, 4, 3, 7, 2, 6];

console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]