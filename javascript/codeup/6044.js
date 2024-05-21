// 정수 2개(a, b)를 입력받아 합, 차, 곱, 몫, 나머지, 나눈 값을 자동으로 계산해보자.
// 단, b는 0이 아니다.

// 입력 예시
// 10 3

// 출력 예시
// 13
// 7
// 30
// 3
// 1
// 3.33

const a = 10;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);
console.log((a / b).toFixed(2));
