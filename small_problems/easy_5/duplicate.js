// Write a function that takes an unordered array and returns the value of
// the one value that is found twice in the array.

// Input: Array
// Output: Number

// Steps:
// Itterate over the array and check if array.includes(current value) exists
// if it does return that number
// add a counter that starts at 0 and if it hits 2 we found our match

function findDup(array) {
  let result;

  array.forEach(value => {
    let dupCounter = 0;

    array.forEach(secValue => {
      if (value === secValue) {
        dupCounter += 1;
      }
    });

    if (dupCounter === 2) result = value;
  });

  console.log(result);
}

findDup([1, 5, 3, 1]);                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73