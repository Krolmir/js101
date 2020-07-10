// Write a function that takes a floating point number representing an angle
//  returns a string representing that angle in degrees, minutes, and seconds

// Rule: when converting from degress you multiply decimal * 60 then the reminder
//       of that by 60 to get seconds
// ie. 76.73 = .73 * 60 = 43.8 = .8 * 60 = 48 or 76°43'48

// input: floating point number
// output: string in the format 30°00'00"

// Steps:
// split the floating number. Get decimal and whole number
// num - Math.floor(num)


function dms(float) {
  let degrees = 0;
  if (float < 0) {
    degrees = 360 + (Math.floor(float) % 360);
  } else {
    degrees = (Math.floor(float) % 360);
  }
  let minutes = Math.floor((float - Math.floor(float)) * 60);
  let seconds = Math.floor((((float - Math.floor(float)) * 60) - minutes) * 60);

  if (minutes <= 9) minutes = addZero(minutes);
  if (seconds <= 9) seconds = addZero(seconds);
  console.log(`${degrees}°${minutes}'${seconds}"`);
}

function addZero(number) {
  return '0' + number;
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 300°00'00"