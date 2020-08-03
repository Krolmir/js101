// Problem: Write a function that takes an integer and returns the next greatest
//          number that is a featured number

// Rules: Featured numbers need 3 things to be true:
//        1 - multiple of 7
//        2 - Odd number
//        3 - cant have duplicated digits in it
//        Largest number is 9876543201

// Input: Number
// Output: Featured Number

// Steps:

// itterate from the argument passed up until we find a number
// check odd, check multiple of 7,  check duplicates

// Check odd
//  if num % 2 === 1 return true

// isUnique;
// itterate over the number into an array
// set a counter to 0,
// set a compareVar to the current number
// Compare by itteratine over the array again
// if match + coiunter if counter === > 1 we got a problem
// return true por false based on this

function featured(number) {
  if (number > 9876543200) return false;
  let count = number + 1;


  while(true) {
    if (isOdd(count) && isMultipleOfSeven(count) && isUnique(count)) {
      return count;
    }
    count += 1;
  }
}

function isOdd(number) {
  return number % 2 === 1;
}

function isMultipleOfSeven(number) {
  return number % 7 === 0;
}

function isUnique(number) {
  let counter;
  let compareNumber;
  let isTrue = true;

  String(number).split('').forEach(num => {
    counter = 0;
    compareNumber = num;
    String(number).split('').forEach(numTwo => {
      if (compareNumber === numTwo) {
        counter += 1;
      }
    });
    if (counter > 1) {
      isTrue = false;
    }
  });
  return isTrue;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."