// create a new array that will have the same datya structure as the original
// array but all num,bers are incrementerd by 1

// itterating with map
// if this doesnt work add a .slice so we dont mutate the original array


let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
let serializedArr = JSON.stringify(arr);
let deepCopiedArr = JSON.parse(serializedArr);

let newArr = deepCopiedArr.map(element => {
    Object.entries(element).forEach(pair => {
      let [key, value] = pair;
      return element[key] = value + 1;
    });
  return element;
});

console.log(arr);
console.log(newArr);