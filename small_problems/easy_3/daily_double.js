// function crunch(string) {
//   let newArray = [];
//   string.split('').forEach(char => {
//     if (newArray.length === 0) {
//       newArray.push(char);
//     } else if (newArray[newArray.length - 1] !== char) {
//       newArray.push(char);
//     }
//   });
//   return newArray.join('');
// }

function crunch(string) {
  return string.replace(/[^\w\s]|(.)\1/gi, "");
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""