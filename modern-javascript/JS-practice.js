// ***** Math.floor, Math.random, Math.ceil practice  ***** //

// Math.random practice - returns random number (here, multiplied by 100)
// console.log(Math.random() * 100);
// console.log(Math.random());

// // // Math.random and Math.floor (function) - rounds a number DOWN to the nearest integer
// function randomNum() {
//   console.log(Math.floor(Math.random() * 50));
// }
// randomNum();

// expected output
let a = Math.floor(0.6);
a = 0;
let b = Math.floor(0.4);
b = 0;
let c = Math.floor(5);
c = 5;
let d = Math.floor(5.1);
d = 5;
let e = Math.floor(-5.1);
e = -6;
let f = Math.floor(-5.9);
f = -6;

console.log(a, b, c, d, e, f);

// // Math.ceil practice
// console.log(Math.ceil(43.8)); // 44

// // Math.ceil practice (in a function)
// function roundUp(a, b) {
//   return Math.ceil(a + b); // You have to use Math.ceil (you cannot just append .ceil to your function or equation)
// }
// console.log(roundUp(4.6, 5)); // 10

// **************************************************
// RUBY TO JS
// Read about the Ruby `reduce` method. Then refactor the code below using `reduce`.

// ruby
// numbers = [1, 2, 4, 2]
// p numbers.reduce(:+)

//JS - #1
// var numbers = [1, 2, 4, 2];
// console.log(numbers.reduce((sum, num) => sum + num));

//JS - #2
// var numbers = [1, 2, 4, 2];

// function reduceNumbers(total, num) {
//   return total + num;
// }

// console.log(numbers.reduce(reduceNumbers));
// **************************************************

// Write a function that returns the sum of all numbers in a given array.

// NOTE: Do not use any built-in language functions that do this automatically for you.

// Input: [1, 2, 3, 4]
// Output: 10

// Explanation: (1 + 2 + 3 + 4) = 10

// ruby
// def reduce_sum(input_array)
//   sum = 0
//   index = 0

//   while index < input_array.length
//     sum = sum + input_array[index]
//     index += 1
//   end
//   return sum
// end

// function reduceSum(); {
// let sum = sum + num;
// };
// reduceSum();

// *************************
