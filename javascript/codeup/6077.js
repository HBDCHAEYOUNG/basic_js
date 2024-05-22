// 정수(1 ~ 100) 1개를 입력받아 1부터 그 수까지 짝수의 합을 구해보자.

// 입력 예시
// 5

// 출력 예시
// 6

// 1. 1부터 입력값까지 받아야돼
// 2. 짝수를 걸러야돼
// 3. 더하자

// const input = 5;
// const array = [];
// for (let i = 1; i <= input; ++i) {
//   if (i % 2 === 0) {
//     array.push(i);
//     array.reduce((a, b) => console.log(a + b));
//   }
// }

const input = 5;
const array = [];
for (let i = 1; i <= input; ++i) {
  if (i % 2 === 0) {
    array.push(i);
  }
}
// console.log(array);

const reduceArr = array.reduce((a, b) => a + b, 0);
// console.log(reduceArr);

// feedback
let sum = 0;
for (let i = 1; i <= input; ++i) {
  if (i % 2 === 0) {
    sum = sum + i;
  }
}
console.log(sum);
