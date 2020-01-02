let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

function checkString(string) {
  return string.includes('Dino');
}

console.log(checkString(str1));
console.log(checkString(str2));