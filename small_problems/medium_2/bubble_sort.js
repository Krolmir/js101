// Problem: Write a function that sorts an array using bubble sort

// Rules: works by making multiple passes through an array
//        on each pass 2 values of each pair of consecutive elements are compared
//        swap if first is greater than second
//        do this until a pass is done with no swaps

// Input: Array
// Output: Sorted Array Destructive

// Steps:

// create a main loop that continues to loop until no swaps were made.
// - everytime a swap is made we declare a swapvariable true;
// - break out of loop once swap is false at the end
// create a loop that itterates n - 1 times
// takes first value compares to second
// takes second compares to third
// etc
//  if first is bigger then second swap - mutate/destructive

function bubbleSort(array) {
  let swap = true;
  while (swap) {
    swap = false;
    for (let idx = 0; idx < array.length - 1; idx += 1) {
      if (array[idx] > array[idx + 1]) {
        [array[idx], array[idx + 1]] = [array[idx + 1], array[idx]];
        swap = true;
      }
    }
  }
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]