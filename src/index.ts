//to watch index js and index ts file, open 2 terminals with following commands:
// terminal 1: tsc --watch
// terminal 2: node --watch dist/index.js

let firstName: string = "Mario";
let isFictional: boolean;

firstName = "Luigi";
isFictional = true;

//--------------------
// type inference (ts auto assigns the types - they are stil non changeable)
//--------------------
let planet = "earth";
let moons = 1;
let isLarge = true;
// planet = 10 (error)
// planet = "saturn" (fine)

//--------------------
// explicit type arrays
//--------------------
let names: string[] = ["blake", "luigi", "mario"];
let ages: number[] = [25, 28, 24];
names.push("helen");
ages.push(100);

//--------------------
// infered arrays (typescript will auto assign strings as the only type acceptable inside "fruits" array)
//--------------------
let fruits = ["apples", "mangos", "oranges"];
//fruits.push(23) flags error
//fruits.push("litchis") ✔️

//--------------------
// object literals (explicit)
//--------------------
let user: { firstName: string; age: number; id: number } = {
  firstName: "Blake",
  age: 35,
  id: 99,
};

// user.email = "blake1@blake.com" (property email does not exist)

//--------------------
// object literals (inference)
//--------------------
let person = { name: "Luigi", score: 35 };
// person.name = true (error)

//--------------------
// regular functions
//--------------------
// in javascript, function parameter errors are only caught at runtime
// in typescript, function parameters have to be assigned types amd caanot be left, to avoid the above

// errors on parameters flagged
// function addTwoNumbers(a, b) {
//   return a + b;
// }

// the colon after the smooth brackets is to tell ts what type must be returned from the function
function addThreeNumbers(a: number, b: number, c: number): number {
  return a + b + c;
}

//--------------------
// Arrow functions
//--------------------

const subtractTwoNumbers = (a: number, b: number): number => {
  return a - b;
};

function addAllNumbers(items: number[]) {
  const total = items.reduce((acc, curr) => acc + curr, 0);
  console.log(total);
}
addAllNumbers([5, 7, 9, 11, 3, 2, 1]);

//--------------------
// return type inference
//--------------------

function formatGreeting(name: string, greeting: string) {
  return `${greeting} ${name}`;
}
// hovering over result will show the return type is a string
const result = formatGreeting("blake", "hello");
// type was infered above, so we now get an error below
// const errorMessage = formatGreeting("William", 9);

//----------------
// Any - try avoid as it defeats the obhect of typescript
//----------------
//you can explicitly assign the type of any to a variable
let age: any;
age = 30;
age = "40";
//or if you declare a variable without assigning it an initial value, it will be type of any be default
let title;
title = 45;
title = "hello world";

//any with arrays
let things: any[] = [2, "hello", true];
things.push(33);

// any with functions
function addTogether(value: any, value2: any): any {
  return value + value2;
}
console.log(addTogether("hello", 3));
