// let userName = prompt("What is your name?");

// function greet(user) {
//   console.log(`Hello ${user}!`);
// }

// greet(userName);

// const greet = function (user) {
//     console.log(`Hello ${user}!`);
//   }

// greet("Victor")

// const greet = (user) => {
//     console.log(`Hello ${user}!`);
//   }

// greet("Victor")

// const greet = (user, time = "day") => {
//     console.log(`Good ${time} ${user}!`);
//   }

// greet("Victor", "afternoon")
// greet("Victor")

const calcArea = (val) => {
  val = Math.PI * Math.pow(val, 2);
  return val;
};

let userInput = prompt("Enter a value: ");
let area = calcArea(userInput).toFixed(2);

console.log(`The area of a circle with radius ${userInput} is ${area}`);
