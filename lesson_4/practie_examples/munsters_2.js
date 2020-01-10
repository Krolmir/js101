let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// pick out the minimum age from the munster family
// itterate over the munsters values.
// save the current value, compare it to the next value
// save the lowest value

function lowestAge(object) {
  let minimumAge;
  Object.values(object).forEach((number, idx) => {
    if (idx === 0) {
      minimumAge = number;
    } else if (minimumAge > number) {
      minimumAge = number;
    }
  });

  return minimumAge;
}

console.log(lowestAge(ages));