function isOdd(number) {
  return number % 2 === 1 || number % 2 === -1;
}

for (let counter = 1; counter < 100; counter++) {
  if (!isOdd(counter)) {
    console.log(counter);
  }
}