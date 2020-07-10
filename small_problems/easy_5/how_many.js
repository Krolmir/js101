// Write a function that takes an array of elements and adds up all the duplicates
// as well as logs the amount that each element comes up to the console.

// input: array
// output: strings showing the amount of duplicates or valus

// Steps:
// Create an object
// itterate over the array checking if each element already exists as a key in
// the object. If it does then += 1 to the value else create the key and put 1 as
// value

function countOccurrences(array) {
  let result = {};

  vehicles.forEach(key => {
    if (Object.keys(result).includes(key)) {
      result[key] += 1;
    } else {
      result[key] = 1;
    }
  });

  logToConsole(result);
}

function logToConsole(result) {
  Object.keys(result).forEach(key => {
    console.log(`${key} => ${result[key]}`);
  });
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// // console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2