// Write a function that takes 2 arguments and returns true if exactly 1
// of its arguments is truthy. False otherwise.

// Input: 2 values equating to truthy or falsy
// Output: boolen - true or false

// Knowns , - know what is considered truthy or falsy
// FALSEY VALUES
// false
// undefined
// null
// 0
// "" (an empty string)
// NaN

// Steps:
// Write a function xor
// Check if the first element is truthy or falsey
// if first element is truthy check if second element is the opposite.
// if it is then return True else return false

function xor(variable1, variable2) {
  if ((variable1 && !variable2) || (!variable1 && variable2))  {
    return true;
  } else {
    return false;
  }
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);