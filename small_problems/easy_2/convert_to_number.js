// Write a function that turns a string of numeerical values into a number

// Input: string of numbers
// Output: Integer

// Steps
// split the numbers into an array and then create a loop to ocmpare them one
// by one

// create a compare case with 1
//

function stringToInteger(string) {
  let tempArray = string.split('');
  let result = [];

  for (let i = 0; i < tempArray.length; i++) {
    switch (tempArray[i]) {
      case '1':
        result.push(1);
        break;
      case '2':
        result.push(2);
        break;
      case '3':
        result.push(3);
        break;
      case '4':
        result.push(4);
        break;
      case '5':
        result.push(5);
        break;
      case '6':
        result.push(6);
        break;
      case '7':
        result.push(7);
        break;
      case '8':
        result.push(8);
        break;
      case '9':
        result.push(9);
        break;
      case '0':
        result.push(0);
        break;
    }
  }
  result.join('');

  let value = 0;
  result.forEach(digit => (value = (10 * value) + digit));
  console.log(value);
  return value;
}


console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true