// Problem: Write a function that takes the three angles of a triangle and
//          returns one of the following strings: 'right', 'acute', 'obtuse',
//          'invalid'

// Rules: Right: one angle is 90 degrees
//        Acute: all three angles are less than 90 degrees
//        Obtuse: one angle is greater than 90 degrees
//        Valid: sum of the angles must be 180 degrees, and every angle must be
//               greater than 0 degrees

// Input: 3 numbers (degrees)
// Output: string of the result

// Steps:

// Check validity
//   if degree1 + degree2 + degree3 === 180 valid
//   if degree !== 0 valid
//

function triangle(degree1, degree2, degree3) {
  if ((degree1 + degree2 + degree3 !== 180) ||
      (degree1 === 0) || (degree2 === 0) || (degree3 === 0)) {
    return 'invalid';
  } else if (degree1 === 90 || degree2 === 90 || degree3 === 90) {
    return 'right';
  } else if (degree1 < 90 && degree2 < 90 && degree3 < 90) {
    return 'acute';
  } else {
    return 'obtuse';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"