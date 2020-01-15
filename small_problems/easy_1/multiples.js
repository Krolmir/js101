// write a function that computes the sum of all numbers between 1 and some other number
// inclusive that are multiples of 3 and 5

// input is a number
// output is a number

// create a loop for every number from 1 to number
// check if it is a multiple of 3 or five then add it to the total

function multisum(number) {
  let total = 0;
  for (let counter = 1; counter <= number; counter++) {
    if (counter % 3 === 0) {
      total += counter;
    } else if (counter % 5 === 0) {
      total += counter;
    }
  }
  return total;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168