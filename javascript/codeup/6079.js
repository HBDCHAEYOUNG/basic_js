// 1, 2, 3 ... 을 계속 더해 나갈 때,
// 그 합이 입력한 정수(0 ~ 1000)보다 같거나 작을 때까지만
// 계속 더하는 프로그램을 작성해보자.

// 입력 예시
// 55

// 출력 예시
// 10

// 1+2+3+4+5+6... < 55

const input = 55;
let sum = 0;
function a(i) {
  for (let i = 1; i < 10; i++) {
    if (sum > 55) return;
    sum += i;
  }
  console.log("sum", i);
}

console.log("55", a(input));
