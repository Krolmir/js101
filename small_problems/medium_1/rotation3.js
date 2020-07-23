// Problem: Write a function that takes a number argument and returns that
//          number fully rotated.

// Rules: By fully rotated we mean, rotate the full thing, then rotate with
//        slicing the last numbers excluding t he first and continune until there
//        are no more numbers

// Input: Number
// Output: New fully rotated Number

// Steps:

// initialize a results variable = [];
// initialize an array = String(number).split('');
// initalize a length = array.length

//
// itterate over array for loop
// invoke rotateRightMO.. on array
// push front number to result
// length needs to decrement b y 1
// array needs to be reassigned to the sliced value with -length to end

function maxRotation(number) {
  let numberDigits = String(number).length;
  for (let count = numberDigits; count >= 2; count--) {
    number = rotateRightmostDigits(number, count);
  }
  return number;
}

// function maxRotation(number) {
//   let result = [];
//   let array = String(number).split('');
//   let length = array.length;
//   let tempNumber;

//   for (let idx = 0; idx < String(number).split('').length; idx += 1) {
//     tempNumber = (rotateRightmostDigits(Number(array.join(''), length)));
//     result.push(String(tempNumber).split('')[0]);
//     array = String(tempNumber).slice(1, length).split('');
//     length -= 1;
//   }

//   return Number(result.join(''));
// }



function rotateRightmostDigits(number, count) {
  let array = String(number).split('');
  let backSide = rotateArray(array.slice(-count, array.length));
  return Number(array.slice(0, -count).concat(backSide).join(''));
}

function rotateArray(array) {
  if(!Array.isArray(array)) return undefined;
  if(array.length === 0) return [];

  let result = [];
  result = array.slice(1, array.length);
  result.push(array[0]);

  return result;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845