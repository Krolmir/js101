// Problem: Write a function that takes a year as an argument and returns the
//          amount of friday the 13's are in that year

// Rules: Assume that the year is greater than 1752

// Input: Year
// Output: Number

// Steps:

// itterate over a constant array of months to create new dateobjects to call
// getDay
// initialize a counter that will incremenet when getDay returns 4

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                'August', 'September', 'October', 'November', 'December'];

function fridayThe13ths(year) {
  let fridayCounter = 0;

  MONTHS.forEach(month => {
    if (new Date(`${month} 13, ${year}`).getDay() === 5) {
      fridayCounter += 1;
    }
  });

  return fridayCounter;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2