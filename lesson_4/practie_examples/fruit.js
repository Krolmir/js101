let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(objectValue) {
  let result = {};

  for (let key in produce) {
    if (produce[key] !== 'Fruit') continue;
    result[key] = produce[key];
  }
  return result;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }