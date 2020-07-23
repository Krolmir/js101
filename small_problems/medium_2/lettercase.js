// Problem: Write a function that takes a string, and returns an object
//          containing the following three properties:

// Rules: the percentage of characters in the string that are lowercase letters
//        the percentage of characters that are uppercase letters
//        the percentage of characters that are neither

// Input: String
// Output: Object

// Steps:

// Initlaize a result object and assign it 3 key pair values
// itterate over the string split into an array
// each time compare it with one of 3 conditions and determine wether we are
// adding towards the lower,upper, or nether total
// intialize 3 vars lower upper neitehr



function letterPercentages(string) {
  let result = { lowercase: '0', uppercase: '0', neither: '0' }
  let lower = 0;
  let upper = 0;
  let neither = 0;

  string.split('').forEach(char => {
    if (char >= 'a' && char <= 'z') {
      lower += 1;
    } else if (char >= 'A' && char <= 'Z') {
      upper += 1;
    } else {
      neither += 1;
    }
  });

  result.lowercase = ((lower / (string.length)) * 100).toFixed(2);
  result.neither = ((neither / (string.length)) * 100).toFixed(2);
  result.uppercase = ((upper / (string.length)) * 100).toFixed(2);
  return result;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }