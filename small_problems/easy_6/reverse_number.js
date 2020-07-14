// Write a function that takes a positive number and returns the number reversed

// Input: Number (poisitive)
// Output: Number

// Steps:
// cooerce number to a string,
// split it
//reverse it
// coerce it back to a number
// if leading 0's delete them
// convert to string , itterate over string
// loop over the arr with a for loop
// call slice on first non 0 number
//    break out of loop


function removeZeros(arr) {
  for (let idx = 0; idx < arr.length; idx += 1) {
    if (arr[idx] !== '0') return arr.slice(idx);
  }
}

function reverseNumber(number) {
  return Number((String(number).split('').reverse().join('')));
  // return result.join('');
}


console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1