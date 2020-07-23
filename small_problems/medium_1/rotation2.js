// Problem: Write a function that takes a Number and a counter and returns
//          the number with the last digits rotated based on the count

// Rules: you have to move the count digit from the end and then shift everything
//        else one over. Similar to our rotateArray from last exercise

// Input: Number & Count Number
// Output: new Number

// Steps:

// Convert to string, convert to array.
// set result variable as an array [];
// call rotateArray on the converted array.slice(-count, array.length)
// return result added back to the front of the array
//  result = array.slice(0, -count).concat(return from above)

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

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
