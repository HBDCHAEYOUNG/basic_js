// 입력된 세 정수 a, b, c 중 가장 작은 값을 출력하는 프로그램을 작성해보자.
// 단, 3항 연산을 사용한다.

// 입력 예시
// 3 -1 5

// 출력 예시
// -1

function a(...number) {
  return number.reduce((a, b) => (a < b ? a : b));
}
console.log(a(3, -1, 5));

console.log(Math.min(3, -1, 5));
