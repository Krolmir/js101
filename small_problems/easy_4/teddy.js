// Build a program that randomly generates Teddy's age, and logs it to the
// console.

// Age is a random number between 20 and 120 inclusive. 20 and 120 are acceptable

function getTeddyAge(min, max) {
  return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

console.log(`Teddy is ${getTeddyAge(20, 120)} years old!`);