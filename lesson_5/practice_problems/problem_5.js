let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

console.log(munsters);

// itterate over the object, check if it's a male, if yes add age to total

let totalAge = 0;

for (let name in munsters) {
  if (munsters[name]['gender'] === 'male') {
    totalAge += munsters[name]['age'];
  }
}
console.log(totalAge);