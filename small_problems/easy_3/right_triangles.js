// Write a function that draws a triangle based on the number passed as an
// argument. Number is 4 then the triangle is 4 stars high 4 wide at its
// biggest section

// write a for loop that has a counter count down. set counter

function triangle(length) {
  let string = '';
  let starCounter = 1;
  for (let counter = length; counter > 0; counter -= 1) {
    console.log(' '.repeat(counter - 1) + '*'.repeat(starCounter));
    starCounter += 1;
  }
}



triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********