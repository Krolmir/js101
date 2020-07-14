// Problem:  Write a function that takes a string argment consisting of a first
//           name, a space, and a last name. Return a new string containing the
//           last name, a comma, a space, and the first name.

// Input: String format FirstName Space LastName
// Output: String LastName Comma Space FirstName

/// Steps:

// Initialize a results string
// Split the original string
// set firstName = array[0] and lastName = array[1]
// return lastName + ', ' + firstName

// If arra length > 2
//   slice off arr[1], arr[arr.length - 2]

function swapName(string) {
  let arr = string.split(' ');
  let firstName = arr[0];
  let lastName = arr[arr.length - 1];
  let middleName = '';

  if (arr.length > 2) {
    middleName = arr.slice(1, arr.length - 1);
    return lastName + ', ' + firstName + ' ' + middleName.join(' ');
  } else {
    return lastName + ', ' + firstName;
  }
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals')); // Ragvals, Karl Oskar Henriksson