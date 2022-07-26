// // ***** Math.floor, Math.random, Math.ceil practice  ***** //

// // Math.random practice
// console.log(Math.random() * 100);

// // Math.random and Math.floor (function)
// function randomNum() {
//   console.log(Math.floor(Math.random() * 50));
// }
// randomNum();

// // Math.ceil practice
// console.log(Math.ceil(43.8)); // 44

// // Math.ceil practice (in a function)
// function roundUp(a, b) {
//   return Math.ceil(a + b); // You have to use Math.ceil (you cannot just append .ceil to your function or equation)
// }
// console.log(roundUp(4.6, 5)); // 10

// *************************
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
// *************************
