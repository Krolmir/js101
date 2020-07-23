// Problem: Write a recursive function that computes the nth Fibonacci number
//          where nth is an argument passed

// Rules: f(1) = 1
//        f(2) = 1
//        f(n) = F(n-1) + F(n-2) where n > 2
//        f(3) = 2    1 + 1 = 2
//        f(4) = 3    1 + 2 = 3
//        f(5) = 5    2 + 3 = 5

// Input: Number
// Output: Number

// Steps:

// return 1 when num < 3
// else return fibonacci(n - 1) + fibonacci(n - 2)

function fibonacci(num) {
  let obj = {}
  if (num < 3) {
    return 1;
  } else if (obj[num]) {
    return obj[num]
  }
  obj[num] = fibonacci(num - 1) + fibonacci(num - 2);
  return obj[num];
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(25));      //