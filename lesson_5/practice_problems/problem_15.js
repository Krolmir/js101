// Write some code that returns an array of all the objects in the array
// that have all even numbers


// initialize a function that takes an array as an argument
// declated a new array or .filter
// itterate over the array

// use obj.values to have an array of all values per object
// itterate over that array and check if there is an odd number
// if odd dont return object
// if even add object to result array

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

function isEven(number) {
  return number % 2 === 0;
}

function filterEvens(array) {
  let resultArray = [];

  array.forEach(obj => {
    if(Object.values(obj).flat().every(isEven)) {
      resultArray.push(obj);
    };
  });
  console.log(resultArray)
}

filterEvens(arr);