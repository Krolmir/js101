let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

// using foreach output all the vowels from the strings in the arrays.

// output: string or array of letters.

// forEach

function vowelTest(char) {
  return (/^[aeiou]$/i).test(char);
}

let result = [];

Object.values(obj).forEach(value => {
  let temp = value.join().split('');
  console.log(temp);

  temp.forEach(character => {
    if (vowelTest(character)) {
      result.push(character);
    }
  });
});

console.log(result);