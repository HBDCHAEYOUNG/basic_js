// 0이 아닌 정수 1개가 입력되었을 때, 음(-)/양(+)과 짝(even)/홀(odd)을 구분해 분류해보자.
// 음수이면서 짝수이면, A
// 음수이면서 홀수이면, B
// 양수이면서 짝수이면, C
// 양수이면서 홀수이면, D
// 를 출력한다.

// 입력 예시
// -2147483648

// 출력 예시
// A

const x = -2147483648;
if (x === 0) return;

if (x < 0) {
  if (x % 2 === 0) console.log("A");
  else console.log("B");
} else {
  if (x % 2 === 0) console.log("C");
  else console.log("D");
}

if (x < 0) {
  console.log(x % 2 === 0 ? "A" : "B");
} else {
  console.log(x % 2 === 0 ? "C" : "D");
}
