// 3개의 정수(a, b, c)가 입력되었을 때, 짝수만 출력해보자.

// 입력 예시
// 1 2 4

// 출력 예시
// 2
// 4
const number = [1, 2, 4, 5, 7, 9, 11, 13];
// in => obj
// of => arr

for (const x of number) {
  if (x % 2 === 0) {
    console.log(x);

    if (x === 4) return;
  }

  for (const y of number) {
    console.log("x, y", x, y);
  }
}
