// Problem: Write a function that takes 2 string arguments and checks if string 2
//          is some where scrambled up in string 1.

// Input: 2 strings
// Output: Boolean

// Steps:

// itterate over the second string with a forloop
// j j s s
// itterate over javaass with a  for loop
// j a v a a s s

function scramble(str1, str2) {
  let arr1 = str1.split('');
  let arr2 = str2.split('');

  for (let indexArr2 = 0; indexArr2 < arr2.length; indexArr2 += 1) {
    if (arr1.indexOf(arr2[indexArr2]) === -1) return false;
    arr1.splice(arr1.indexOf(arr2[indexArr2]), 1);
  }

  return true;
}


console.log(scramble('javaass', 'jjss') === false); // true
console.log(scramble('rkqodlw', 'world') === true); // true
console.log(scramble('javaass', 'jjss') === false); // true
console.log(scramble('javaass', 'jjss') === false); // true
console.log(scramble('javaass', 'jjss') === false); // truesvv