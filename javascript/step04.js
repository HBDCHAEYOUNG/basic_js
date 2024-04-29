// ! ch.1

// console.log("hello", hello);

// const test = one.map((number) => {
//   console.log("number", number);
// });

// number 1
// number 2
// number 3
// number 4
// number 5

// 😒
// for (let i = 0; i < 10; i++) console.log("굳");
// function solution(one) {
//   if (one === 1) return console.log("good");

//   return one;
// }

// 👍
const solution = (one = "선물없음") => {
  return one;
};

const good = solution(1); // good
console.log(good);

// var === function
// let , const => arrow

// ! ch.2
const test = solution;
const testGood = test(1); // good
console.log(testGood);

// ! ch.4
const ch4_solution = solution();

const ch4_solution2 = solution("aaaaaaaaaaaaaaaaaa");
console.log("ch4_solution", ch4_solution2);

// spread
const numbers = [1, 2, 3, 4, 5];
// const [number1, number2, number3, number4, number5, number6] = numbers;
const [number1, number2, ...rest] = numbers;
console.log("number", rest);

// ! ch.5
// scope
function outer() {
  const name = "바깥쪽";
  console.log(name, "함수");

  function inner() {
    const name = "안쪽";
    console.log(name, "함수");
  }
  inner();
}

outer();

// 불변성
let x = 1;
console.log(x);
// ... 코드실행

console.log(x);

// 객체
console.clear();
const 우혁 = {
  fullName: "김우혁",
  age: 10,
};
// const 혀기클론 = 우혁; // 얕은 복사
const 혀기클론 = { ...우혁 }; // 깊은 복사
혀기클론.age = 20;

console.log(우혁.age);
console.log(혀기클론.age);
