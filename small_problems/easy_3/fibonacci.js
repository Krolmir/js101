// Write a function that calculates and returns the index of the first
// fibonacci number that has the number of digits specified by the argument

// Assumption: argument is always an integer greather than  or equal to 2

// Define an array where our fibonacci sequence numbers will be stored


function findFibonacciIndexByLength(number) {
  let array = [1, 1];
  let counter = 1;

  while (true) {
    array.push(array[counter - 1] + array[counter]);
    if (number === array[counter + 1].toString().length) break;
    counter += 1;
  }
  console.log(array.length);
  return array.length;
}

findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74