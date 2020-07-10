// Write a program that takes an integer as an argument and returns
// the time of day in "xx:xx" Format.

// Rules: integers can be positive or negative
//        of megative its before mid night
//        if poisitive its after midnight
//        format "xx:xx"

// Input: Integer (positive/negative)
// Output: String "xx:xx"

// Steps:
// figure out if its positive or negative. if its 0 return "00:00"
//  helper function
//  popsitive - break up the time into minutes and hours
//   some math: number % 1440 = total minutes
//              total minutes % 60 = minutes
//              hours = (total minutes - miunutes) / 60
//              ie. 4231 % 1440 = 1351 Total Minutes
//                  1351 % 60 = 31 minutes
//                  1351 - 31 / 60 = 22 hours
//                  "22:31" Since this was a negative its revers to "01:29";

const MINUTES_IN_DAY = 1440;
const MINUTES_IN_HOUR = 60;

function isPositive(num) {
  return (num >= 0);
}

function timeOfDay(num) {
  let hours, minutes, totalMinutes;

  if (isPositive(num)) {
    totalMinutes = num % MINUTES_IN_DAY;
    minutes = totalMinutes % MINUTES_IN_HOUR;
    hours = (totalMinutes - minutes) / MINUTES_IN_HOUR;
  };

  hours = addZeros(hours);
  minutes = addZeros(minutes);

  console.log(`${hours}:${minutes}`);

  return `${hours}:${minutes}`;
}

function addZeros(num) {
  if (num <= 9) {
    return '0' + num;
  } else {
    return num;
  }
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");