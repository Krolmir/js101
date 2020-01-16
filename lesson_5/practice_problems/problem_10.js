let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

// sort the inner arrays numerically or alphabetically makeing sure to leave
// the structure of the outer array the same

// loop to itterate over the outer array. probably .map since we want a new array
// retuirned

let newArr = arr.map(innerArr => {
  if (typeof innerArr[0] === 'string') {
    innerArr.sort().reverse();
  } else {
    innerArr.sort((a, b) => b - a);
  }
  return innerArr;
});

console.log(newArr);