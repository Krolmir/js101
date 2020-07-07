// create a function that returns a double number if its double or it returns
// the argument mulktiuplied by 2

// input: number
// output: number

// explicit rules: if number is a double number return it else double the number
//                 5 would return 10 while 55 returns 55

// Convert the number to a string
// check to see if first half of string = second half of string
//
// if true return the number
// else return the number * 2
function checkDouble(string) {
  return (string.slice(0, (string.length / 2)) ===
         (string.slice(string.length / 2)));
}

function twice(number) {
  let string = number.toString();

  if (checkDouble(string) === true) {
    return number;
  } else {
    return number * 2;
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676