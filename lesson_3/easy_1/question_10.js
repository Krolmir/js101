let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

function removeStuff(string) {
  let index = string.indexOf('house');
  return string.slice(0, index);
}

console.log(removeStuff(advice));