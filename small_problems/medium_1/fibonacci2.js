// Problem: Write a function to computer the fibonacci nth number without recursion

// Rules: No recursion
//        F(n) = f(n - 1) + f(n - 2)

// Input: Number
// Output: Number

// Steps:

// Initialize an array and set it to [1, 1]
// create a for loop that will itterate number times
// add result.push(result[idx] + result[idx + 1]
// idx ++

function fibonacci(num) {
  let result = [1, 1];
  if (num === 1 || num === 2) return 1;
  for (let idx = 0; idx < num - 2; idx += 1) {
    result.push(result[idx] + result[idx + 1]);
  }

  return result[result.length - 1];
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050