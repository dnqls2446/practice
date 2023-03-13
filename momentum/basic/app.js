let a = 5; // let은 가끔 필요에 의해서 선언해주는 변수 [재선언 X , 재할당 O]

const b = 4; // const는 변하지 않는 값 / 고정적인 값을 지정하는 변수

let firstName = "lee"; // let 으로 변수명 firstname lee를 지정해주고
const myName = "woobin"; // woobin 이라는 myname은 계속 고정적이여 한다.

console.log(a + b);
console.log(firstName + myName);

firstName = "kim"; //재선언 하지 않아도 fristname을 변경해 줄 수 있다.
console.log(firstName + myName);
