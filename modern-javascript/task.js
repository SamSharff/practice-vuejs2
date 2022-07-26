setTimeout(function () {
  console.log("First task done!");
  setTimeout(function () {
    console.log("second task done!");
    setTimeout(function () {
      console.log("third task done!");
    }, 2000);
  }, 2000);
}, 2000);

// console.log('Second task done!');

// Write JavaScript code using the setTimeout function to print 3 lines asynchronously. Use anonymous functions in your setTimeout calls. The output should do the following:
// Wait 2 seconds
// Print out “First task done!”
// Wait another 2 seconds
// Print out “Second task done!”
// Wait another 2 seconds
// Print out “Third task done!”
