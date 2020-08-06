// Write a function that takes 2 strings, and returns true if a portion of
// string 1 characters can be rearranged to match string.  Else False

// Rules: only lowercase chars

// Input: 2 Strings
// Output: True or False

// Steps:

// split the 2 strings into arrays
// assign an array var to string 1
//  itterate of string 2
//   itterate over string 1 with index comparing
//     [r,k,q,o,d,l,w] w
//     check if matach
//     string1.splice(w);
//     if no matacah set a global var to False else retrun true


function scramble(string1, string2) {
  let arr1 = string1.split('');
  let arr2 = string2.split('');


  for( let index = 0; index < arr2.length; index += 1) {
    if (arr1.indexOf(arr2[index]) === -1) {
      return false;
    }
    arr1.splice(arr1.indexOf(arr2[index]), 1);
  }

  return true;
}



console.log(scramble('javaass', 'jjss') === false); // true
console.log(scramble('rkqodlw', 'world') === true); // true
console.log(scramble('javaass', 'jjss') === false); // true
console.log(scramble('javaass', 'jjss') === false); // true
console.log(scramble('javaass', 'jjss') === false); // true