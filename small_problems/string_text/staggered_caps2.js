// Problem: Write a function that builds on the last exercise that ignores
//          non-alphabetic characters.

// Rules: Anything that is non-alphabetic will be ignored as an alternating
//        rule. We need to still output them though

// Input: String
// Output: newString

// Steps:

// Similar to before itterate over the strinng after splitting it with map.
// intialize an uppercase variable taht swaps everytime its used.
// if char === a chara a- z or A-Z then swap char based on the variable  above

function staggeredCase(string) {
  let upcase = true;

  return string.split('').map((char) => {
    if (((char <= 'z') & (char >= 'a')) || ((char <= 'Z') & (char >= 'A'))) {
      if (upcase === true) {
        upcase = false;
        return char.toUpperCase();
      } else {
        upcase = true;
        return char.toLowerCase();
      }
    } else {
      return char;
    }
  }).join('');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs");