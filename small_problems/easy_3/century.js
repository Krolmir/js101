// Write a function that takes a year as inpout in the form of a number and returns
// a string that begins with the century and ends with 'st' 'nd' rd' 'th'

// Rules:
// - Century begins in years that end with 01. So, the years 1901 - 2000 is 20th century
// - 1st, 2nd, 3rd, 4th - 20th, 21st, 22nd, 23rd , 24th-30th etc
//-  11th 12th 13th exceptions

function century(year) {
  let result = Math.ceil(year / 100);

  result = result.toString();
  if (result.endsWith('11') || result.endsWith('12') || result.endsWith('13')) {
    result = result + 'th';
  } else if (result.endsWith('1')) {
    result += 'st';
  } else if (result.endsWith('2')) {
    result += 'nd';
  } else if (result.endsWith('3')) {
    result += 'rd';
  } else {
    result += 'th';
  }

  console.log(result);
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"