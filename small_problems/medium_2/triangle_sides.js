// Problem: Write a function that takes 3 argumenets which will be the lengths
//          of the three sides of the triangle.  Return one of the following
//          results: 'equilateral', 'isosceles', 'scalene', 'invalid'

// Rules: Equilateral: All three sides are of equal length
//        Isosceles: Two sides are of equal length
//        Scalene: All three sides are different length
//        To be a valid trianle the sum of the lengths of the 2 shortest sides must
//        be greater than the length of the longest side, and every side must
//        have a length greater than 0.  Invalid otherwise

// Input: 3 Numbers for side lengths
// Output: String result

// Steps:

// use side1 side2 side3 for the arguments
// check validity first
//   add all the sides to an array and sort it from lowest to highest
//   add array[0] + array[1] and make sure its > than array[2]
//   check if any length is 0
//   return 'invalid'
// check if equilateral
//   check if all sides are equal
// check isosceles
//  if (side 1 === side 2 || side 2 === side 3 || side 1 === side 3 )
// else
//   return scalene

function triangle(side1, side2, side3) {
  let array = [side1, side2, side3];
  array.sort((a, b) => a - b);
  if (array[0] === 0 || array[0] + array[1] < array[2]) {
    return 'invalid';
  } else if (side1 === side2 && side2 === side3) {
    return 'equilateral';
  } else if (side1 === side2 || side2 === side3 || side3 === side1) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
