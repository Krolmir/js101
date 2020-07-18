// Problem: WRite a function that takes a string as an argument and returns an
//          object based on the amount of uppercase lowercase and one for netierh

// Rules: Format of output { lowercase: 0, uppercase: 0, neither: 0 }
//        all special characters number and spaces are neither

// Input: String
// Output: Object with 3 properties

// Steps:

// iniitalize a new object with 3 key pairs
// split the string into an array with .split('')
// itterate over the array with .forEach
// chekc one of 3 condidtions and add + 1 to the value of the key it matches
// return object

function letterCaseCount(string) {
  let result = { lowercase: 0, uppercase: 0, neither: 0 };
  string.split('').forEach(char => {
    if (char.match(/[A-Z]/g)) {
      result.uppercase += 1;
    } else if (char.match(/[a-z]/g)) {
      result.lowercase += 1;
    } else {
      result.neither += 1;
    }
  });

  return result;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

