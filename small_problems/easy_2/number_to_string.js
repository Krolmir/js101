// Write a function that converts a non negative number to a string

// input : Number
// Output : String

// break up the number into single digits
// loop unti lyou can determine how long the number is
// use n > number {
//  do the calculations
// else n * 10

function integerToString(number) {
  let result = '';
  let remainder = number;

  if (number === 0) return '0';
  while (remainder > 0) {
    result = remainder % 10 + result;
    remainder = Number.parseInt(remainder / 10);
  }
 return result;
}

console.log(integerToString(4321) === '4321');      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890));      // "1234567890"z