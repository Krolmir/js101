let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// add up all the values
// iterate over the .values.
// think there is a method to do this in 1 easy shot .reduce

let addition = (first, second) => first + second;
console.log(Object.values(ages).reduce(addition));