// 1, 2, 3 ... 을 계속 더해 나갈 때,
// 그 합이 입력한 정수(0 ~ 1000)보다 같거나 작을 때까지만
// 계속 더하는 프로그램을 작성해보자.

// 입력 예시
// 55

// 출력 예시
// 10

//1. 1 ,2, 3, 4 출력
//2. 출력값 더하기
//3. 조건: 합한 값<input
//4. 합한값 하나만 출력 -> for 밖에서 출력..

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
