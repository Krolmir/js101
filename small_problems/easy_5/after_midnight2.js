// Write 2 functions. 1 that determines the number of minutes before midnight,
// and one that returns the number of minutes aftermidnight

// Rules: No using Date class methods.

// Input: Date in the format of "xx:xx"
// output: number of minutes

// Steps:
// after midnight -
// Break the date up into 2 numbers
//   xx and xx
//   once you have the 2 numbers multipliy the first xx by 60 then + the second
//   xx

const MINUTES_IN_HOUR = 60;

function afterMidnight(time) {
  if (time === '24:00') return 0;
  let firstNumber = time.split(":")[0];
  let secondNumber = time.split(":")[1];

  return (Number(firstNumber) * MINUTES_IN_HOUR) + Number(secondNumber);
}

function beforeMidnight(time) {
  if (1440 - afterMidnight(time) === 0 || 1440 -afterMidnight(time) === 1440) {
    return 0;
  } else {
    return 1440 - afterMidnight(time);
  }
}


console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);