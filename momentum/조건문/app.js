// const age = prompt("How old are you?");

// console.log(age, parseInt(age));

// ---> typeof : string or number type 확인 하는 방법

// ----> parseInt function ---
// string -> number type 으로 변경해주는 함수

// const age = parseInt(prompt("How old are you?"));

// if (isNaN(age)) {
//   10;
//   console.log("Please enter a number"); //true
// } else if (age < 18) {
//   console.log("you ar too young");
// } else if (age >= 18 && age <= 50) {
//   console.log("You look so healthy");
// } else if (age > 50 && age <= 80) {
//   console.log("You should exercise");
// } else if (age > 81 && age >= 40) {
//   console.log("So dangerous");
// }

// && = 이며 and - 두개 다 맞아야 한다. true 충족 x -> false

// || = 이거나 only one 둘중 하나만 맞아도 true  , 두개 다 충족x  false

const age = parseInt(prompt("당신의 나이는 몇살입니까?"));

if (isNaN(age) || age < 0) {
  console.log("양수가 아니군요? 양수를 입력해주세요.");
} else if (age < 14) {
  console.log("엄청 어리군요 부모님 말씀 잘 들으세요.");
} else if (age >= 14 && age <= 17) {
  console.log("질풍노도의 시기네요.. 징그럽습니다.");
} else if (age >= 18 && age <= 19) {
  console.log("한층 성장한 모습 훌륭하네요!");
} else if (age >= 20 && age <= 29) {
  console.log("성인이 되신 여러분 축하드립니다!");
} else if (age >= 30 && age <= 34) {
  console.log("결혼을 하셔야 할 것 같아요!");
} else if (age >= 35 && age <= 80) {
  console.log("지금 행복하신가요?");
} else if (age > 80) {
  console.log("모두 행복하세요");
}
