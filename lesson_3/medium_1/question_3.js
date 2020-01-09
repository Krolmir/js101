function factors(number) {
  let factors = [];

  for (let divisor = number; divisor >= 1; divisor--) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
  }
  return factors;
}

console.log(factors(5));
console.log(factors(15));
console.log(factors(0));
console.log(factors(-5));