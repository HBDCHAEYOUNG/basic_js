function hello(a, b) {
  return a + b; // cpu
}

// 👍 let ,const
// let -> 변수(변해도 수)
let b = 1;
console.log("let ", b);

b = 2;
console.log("let ", b);

// const -> 상수(바뀌면 안되는 수)
const c = 10;
console.log("const ", c);

// 😒 var
console.log(a); // 호이스팅 때문에 쓰면 안됨 -> 개발자들이 가독성x
var a;

function hello() {
  function world() {
    a = 10;
  }

  a = 30;
}

// const , let 예시
const 몸무게_70 = "70KG";
const 몸무게_80 = "80KG";

let 김우혁 = "60KG";

김우혁 = 몸무게_80;
김우혁 = 몸무게_70;

if (김우혁 === 몸무게_70) {
  console.log("김우혁", 김우혁, "/ 70KG 완성!!");
} else {
  console.log("김우혁", 김우혁, "/ 70KG는 아님");
}

let 윤채영;

// 😒예약어 쓰지말자
// const function = 213
