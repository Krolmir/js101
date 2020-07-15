// Problem: Write a function that takes a string argument and returns true
//          if all paranetheses in the string are properly balanced. False otherwise.

// Rules: To be properly balanced, parentheses must occer in matching '(' ')' pairs

// Input: String
// Output: boolean

// Steps:

// Convert string to array. Split with ''
// Itterate over string
// initialize a counter vairbale.
// everytime a match of '(' happens += 1 to counter
// everytime a ')' happens -= 1 to counter
//  if counter ever goes in negative return false
//  if counter does not end at 0 return false

function isBalanced(string) {
  let counter = 0;
  let wentNegative = false;

  string.split('').forEach(char => {
    if (char === '(') {
      counter += 1;
    } else if (char === ')') {
      counter -= 1;
    }
    if (counter < 0) wentNegative = true;
  });

  if (wentNegative || counter !== 0) {
    return false;
  } else {
    return true;
  }
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);