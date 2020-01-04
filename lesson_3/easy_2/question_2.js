let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];

let newArray = numbers.slice();
newArray.reverse();

console.log(newArray);
console.log(numbers);

numbers = [1, 2, 3, 4, 5];
let newArrayTwo = [];

numbers.forEach(num => {
  newArrayTwo.push(num);
});

newArrayTwo.sort((num1, num2) => num2 - num1);

console.log(newArrayTwo);
console.log(numbers);