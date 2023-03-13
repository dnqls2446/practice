// const age = prompt("How old are you?");

// console.log(age, parseInt(age));

// ---> typeof : string or number type 확인 하는 방법

// ----> parseInt function ---
// string -> number type 으로 변경해주는 함수

const age = parseInt(prompt("How old are you?"));

if (isNaN(age)) {
  console.log("Please enter a number"); //true
} else if (age < 18) {
  console.log("you ar too young");
} else if (age >= 18 && age <= 50) {
  console.log("you can drink");
} else {
  console.log("you can drink");
}

// && = 이며

// || = 이거나 only one
