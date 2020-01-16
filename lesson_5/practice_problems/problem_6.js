let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

// Output : string with (name) is a (age)-year-old (male or female).


// use a for in to out put each line.

for (let name in munsters) {
  console.log(`${name} is a ${munsters[name]['age']}-year-old ${munsters[name]['gender']}.`);
}