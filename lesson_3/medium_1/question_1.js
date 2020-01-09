// Write a program that prints the flintstones rock! 10 times indending everytime by 1
let string = 'The Flintstones Rock!';

for (let count = 0; count < 10; count++) {
  console.log(string.padStart(string.length + count, ' '));
}
