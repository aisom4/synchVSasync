// //Sync Example

// console.log("starting the program");

// function sleep(milliseconds) {
//   let startTime = new Date().getTime();
//   console.log("Program is running");

//   while (new Date().getTime() < startTime + milliseconds) {
//     console.log("The program is in progress");
//   }
//   console.log("Program is done.");
// }

// sleep(1000);

// console.log("Do something else....");

// console.log(new Date());

//Async example

console.log("starting program");
function sleep(milliseconds) {
  console.log("Program is running");
  setTimeout(() => {
    console.log("program is done");
  }, milliseconds);
}
sleep(1000);
console.log("do something else");
