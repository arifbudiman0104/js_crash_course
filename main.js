// alert('Hello World!');
// console.log('Hello World!');
// console.error('This is an error');
// console.warn('This is an warning');

// let, const
// let for variable that can be changed and const for variable that cannot be changed

// const age = 30;
// let age = 30;
// age = 31;
// console.log(age);

// Data Types: String, Numbers, Boolean, null, undefined, Symbol
console.log("DATA TYPES");
const name = "John"; // String - can be single or double quotes
const age = 30; // Number
const rating = 4.5; // Number - can be integer or float/double/decimal
const isCool = true; // Boolean - true or false
const x = null; // null - empty value
const y = undefined; // undefined - variable that has not been assigned a value
let z; // undefined
console.log(typeof name);

// Concatenation
console.log("CONCATENATION");
console.log("My name is " + name + " and I am " + age);
// Template String
console.log(`My name is ${name} and I am ${age}`);

// String Length
const s = "Arif, Budiman, Arrosyid";
console.log("STRING");
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(", "));

// Arrays - variables that hold multiple values
console.log("ARRAYS");
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);
const fruits = ["apples", "oranges", "pears", 10, true];
console.log(fruits);
console.log(fruits[1]);
fruits[3] = "grapes";
fruits.push("mangos"); // add to the end
// fruits.unshift('strawberries'); // add to the beginning
// fruits.pop(); // remove from the end
console.log(Array.isArray(fruits));
console.log(fruits.indexOf("oranges"));
console.log(fruits);

// Object Literals
console.log("OBJECT LITERALS");
const person = {
  firstName: "Arif",
  lastName: "Budiman",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "Jl. Kebon Jeruk",
    city: "Jakarta",
    state: "DKI Jakarta",
  },
};

console.log(person);
console.log(person.firstName); // get value of firstName
console.log(person.hobbies[1]); // get value of hobbies

// Destructuring
console.log("DESTRUCTURING");
const {
  firstName,
  lastName,
  address: { city },
} = person;
console.log(city);

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appt",
    isCompleted: false,
  },
];

console.log(todos);
console.log(todos[1].text);

// JSON
console.log("JSON");
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For
console.log("FOR");
for (let i = 0; i <= 10; i++) {
  console.log(`For Loop Number: ${i}`);
}

// While
console.log("WHILE");
let i = 0;
while (i < 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}

// Looping through Arrays
console.log("LOOPING THROUGH ARRAYS");
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

// For of
console.log("FOR OF");
for (let todo of todos) {
  console.log(todo.text);
}

// High Order Array Methods
console.log("HIGH ORDER ARRAY METHODS");
// forEach, map, filter
console.log("FOR EACH");
todos.forEach(function (todo) {
  console.log(todo.text);
});
console.log("MAP");
todos.map(function (todo) {
  console.log(todo.text);
});
console.log("FILTER");
const todoCompleted = todos
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map(function (todo) {
    return todo.text;
  });
console.log(todoCompleted);

// Conditionals
console.log("CONDITIONALS");
const a = 9;
const b = 10;
if (a === 10) {
  console.log("a is 10");
} else if (a > 10) {
  console.log("a is greater than 10");
} else {
  console.log("a is less than 10");
}

if (a > 5 || b > 10) {
  console.log("a is more than 5 or b is more than 10");
}
if (a > 5 && b > 10) {
  console.log("a is more than 5 and b is more than 10");
}

// Ternary Operator
console.log("TERNARY OPERATOR");
const c = 11;
const color = c > 10 ? "red" : "blue";
console.log(color);

// Switches
console.log("SWITCHES");
switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is not red or blue");
    break;
}

// Functions
console.log("FUNCTIONS");
// function addNums(num1 = 1, num2 = 1) {
//   return num1 + num2;
// }
// const addNums = (num1 = 1, num2 = 1) => {
//   return num1 + num2;
// }
const addNums = (num1 = 1, num2 = 1) => num1 + num2;

console.log(addNums());
console.log(addNums(5, 5));

// Constructor Function
console.log("CONSTRUCTOR FUNCTION");
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = function () {
    return this.dob.getFullYear();
  };
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

// Instantiate object
const person1 = new Person("Arif", "Budiman", "4-3-1989");
const person2 = new Person("Arrosyid", "Budiman", "4-3-2019");
console.log(person1);
console.log(person1.dob);
console.log(person1.dob.getDay());
console.log(person1.getBirthYear());
console.log(person2.getFullName());

// ES6 Classes
console.log("ES6 CLASSES");
class Orang {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Instantiate object
const orang1 = new Orang("Arif", "Budiman", "4-3-1989");
const orang2 = new Orang("Arrosyid", "Budiman", "4-3-2019");
console.log(orang1);
console.log(orang1.getBirthYear());

// DOM
console.log("DOM");
// Single element
// console.log(document.getElementById("my-form"));
// const form = document.getElementById("my-form");
// console.log(form);
// console.log(document.querySelector(".container"));

// Multiple element
// console.log(document.querySelectorAll(".item"));
// console.log(document.getElementsByClassName("item"));
// console.log(document.getElementsByTagName("li"));
// const items = document.querySelectorAll(".item");
// items.forEach((item) => console.log(item));

// const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerText = "Brad";
// ul.lastElementChild.innerHTML = "<h1>Hello</h1>";
// const btn = document.querySelector(".btn");
// btn.style.background = "red";

// Events
console.log("EVENTS");
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(e.target.className);
//   document.querySelector("#my-form").style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark");
//   document.querySelector('.items').lastElementChild.innerHTML = "<h1>Changed</h1>";
// });

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    if (nameInput.value === "" || emailInput.value === "") {
        msg.classList.add("error");
        msg.innerHTML = "Please enter all fields";
    
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement("li");
        li.appendChild(
        document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
        );
    
        userList.appendChild(li);
    
        // Clear fields
        nameInput.value = "";
        emailInput.value = "";
    }
    }