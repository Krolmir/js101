// write a function that determines the ascii total of a string
// ascii values all added up

// input = string
// output = number

// itterate over the string length and find the ascii key for each position
// add the total as you itterate threw

function asciiValue(string) {
  let total = 0;

  string.split("").forEach(char => {
    total += char.charCodeAt();
  });
  return total;
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0