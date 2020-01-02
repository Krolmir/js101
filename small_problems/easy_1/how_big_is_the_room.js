const rSync = require('readline-sync');

function getArea(length, width) {
  return (length * width).toFixed(2);
}

function toSquareFeet(number) {
  return (number * 10.7639).toFixed(2);
}

let length = rSync.question("Enter the length of the room in meters: ");
let width = rSync.question("Enter the width of the room in meters: ");

console.log(`The area of the room is ${getArea(length, width)} square meters` +
            ` (${toSquareFeet(getArea(length, width))} square feet).`);