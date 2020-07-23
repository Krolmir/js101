// Problem: Write a function that takes an array as an argument and returns
//          a new array without modifying the original. The new array will move
//          the first element to the end of the array.

// Rules: If input is not an array return undefine
//        If the input is [] return []

// Input: Array
// Output: New array or undefined

// Steps:

// intialize a results array;
// slice(array(1, array.length)).push(array[0]);

function rotateArray(array) {
  if(!Array.isArray(array)) return undefined;
  if(array.length === 0) return [];

  let result = [];
  result = array.slice(1, array.length);
  result.push(array[0]);

  return result;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]