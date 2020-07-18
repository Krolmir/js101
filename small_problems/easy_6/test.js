function isEmpty(value) {
  let type = typeof value;
  if (Array.isArray(value)) {
    return value.length === 0;
  } else if (type === 'object') {
    return Object.keys(value).length === 0;
  } else if (type === 'string') {
    return value.length === 0;
  }
}

// // current test cases
// console.log(isEmpty({}));                  //'This is an object' true
// console.log(isEmpty({ name: 'Janice' }));  //'This is an object' false

// console.log(isEmpty(''));                  //This is an string true
// console.log(isEmpty('Janice'));            //This is an string false

// console.log(isEmpty([]));                  //'This is an array'  true
// console.log(isEmpty(['Janice']));          //'This is an array'  false


// function isEmpty(value) {
//   console.log(value);
//   let type = typeof value;
//   if (type === 'object') {
//     return Object.keys(value).length === 0;
//   } else if (type === 'string') {
//     return value.length === 0;
//   }
// }

let arr = [];
arr.length = 3;
console.log(arr);

let arr2 = [];
arr2[24] = 4;
console.log(arr2.length);
console.log(Object.keys(arr).length === 0);

// current test cases
console.log(isEmpty({}));                  // true
console.log(isEmpty({ name: 'Janice' }));  // false

console.log(isEmpty(''));                  // true
console.log(isEmpty('Janice'));            // false

console.log(isEmpty([]));                  // true
console.log(isEmpty(['Janice']));          // false

console.log(isEmpty([[], []]));
console.log(isEmpty(arr));
console.log(isEmpty(arr2));