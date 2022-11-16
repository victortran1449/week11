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

// const calcArea = (val) => {
//   val = Math.PI * Math.pow(val, 2);
//   return val;
// };

// let userInput = prompt("Enter a value: ");
// let area = calcArea(userInput).toFixed(2);

// console.log(`The area of a circle with radius ${userInput} is ${area}`);

// const calcArea = (val) => {
//   val = Math.PI * Math.pow(val, 2);
//   return val;
// };

// let userInput = prompt("Enter a value: ");
// let area = calcArea(userInput).toFixed(2);
// alert(`The area of a circle with radius ${userInput} is ${area}`);

// let radius = document.querySelector("#radius");
// radius.textContent += userInput;

// let result = document.querySelector("#result");
// result.textContent = area;

let shoppingItems = ["cheese", "bread", "green pepper", "hotdog"];
// DOM node for <ul>
const shoppingListElement = document.querySelector(".shopping");

const populateList = (arr) => {
  for (let item of arr) {
    let listItem = document.createElement("li");
    listItem.textContent = item;
    shoppingListElement.appendChild(listItem);
  }
};

populateList(shoppingItems);

const changeListStyle = (list) => {
  list.classList.replace("circleList", "squareList");
};

changeListStyle(shoppingListElement);
