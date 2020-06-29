// Using the multiply function , write a function that computes the square

// Input: number
// Output: number

// Rules: Must use the last function inside of the square function

const multiply = (number1, number2) => number1 * number2;
function power(number, toPowerOf = 2){
  var total = number, numberTemp;
  for (let i = toPowerOf; i > 1; i--) {
    numberTemp = total;
    total = multiply(numberTemp, number);
  }
  console.log(total);
  return total;
}

console.log(power(5) === 25); // logs true
console.log(power(-8) == 64); // logs true
console.log(power(3, 3) == 27); // logs true
console.log(power(2, 4) == 16); // logs true
