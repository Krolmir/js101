// Problem: Write a funtio nthat computers the difference between the square of'
//          the sum of the first count positive integers, and the sum of the
//          squares of the first count positive intergers.

// Rules: 2 = ( 1 + 2)**2 - (1**2 + 2**2)

// Input: Number
// Sum of the squares subtracted from the sum of the count squared

// Steps:

// itterate up to count times
// do 2 things 1 - add all numbers then square
//             2 - add all squared numbers
// subtract 1 from 2

function sumSquareDifference(count) {
  let sum = 0;
  let squareSum = 0;

  for (let num = 1; num <= count; num += 1) {
    sum += num;
    squareSum = squareSum + (num**2);
  }

  return (sum**2) - squareSum;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150