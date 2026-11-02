console.log("This is the starting point of my code");
process.nextTick(() => {
  console.log("This is process.nextTrick code");
});
setTimeout(() => {
  console.log("This is the first timeout funtion");
}, 2000); //set time in ms for delay after which respective function is start
console.log("This is the end point of my code");
setTimeout(() => {
  console.log("This is 2nd timeout");
}, 7000);
// setTimeout("() =>"-function call back {

// }, timeout);
setTimeout(() => {
  console.log("This statement will run after zero delay");
}, 3000);
setImmediate(() => {
  console.log("This is immediate statement");
});
process.nextTick(() => {
  console.log("This is process.nextTick code.");
});
new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve("Data loaded successfully");
  else reject("Something went wrong");
})
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
new Promise((resolve) => {
  setTimeout(() => {
    resolve("Task completed this time");
  }, 1000);
}).then((result) => console.log(result));
console.log("this is the end point of my code");
