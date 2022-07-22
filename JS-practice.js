// Math.floor and Math.random practice
function randomNum() {
  console.log(Math.floor(Math.random() * 50));
}
randomNum();
console.log(Math.random() * 100);

// Math.ceil practice

console.log(Math.ceil(43.8)); // 44

// Math.ceil practice (in a function)

function roundUp(a, b) {
  return Math.ceil(a + b);
}
console.log(roundUp(4.6, 5)); // 10
