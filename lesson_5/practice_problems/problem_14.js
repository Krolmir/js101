// Write a program that returns an array containing the colors of the fruits
// and the sizes of the vegtables.

// rules: sizes should be uppercase, colors should be capitalized

// output : array

// A:
// itterate over the outer object,
// itterate over the inner object
//  check if it is a fruit or vegtables
//    if fruit return color
//    if vegtable return size

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let newArr = [];

for (let food in obj) {
  if (obj[food]['type'] === 'fruit') {
    newArr.push(obj[food]['colors'].map(color => {
      return color[0].toUpperCase() + color.slice(1);
    }));
  } else if (obj[food]['type'] === 'vegetable') {
    newArr.push((obj[food]['size']).toUpperCase());
  }
}

console.log(newArr);
// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]