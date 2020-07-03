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

// Convert a signed Number to String

function signedIntegerToString(number) {
  if (number > 0) {
    return '+' + integerToString(number);
  } else if (number < 0) {
    return '-' + integerToString(Math.abs(number));
  } else if (number === 0) {
    return integerToString(number);
  }
}

console.log(signedIntegerToString(4321)); // === "+4321");
console.log(signedIntegerToString(-123)); // === "-123");
console.log(signedIntegerToString(0)); // === "0");

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");