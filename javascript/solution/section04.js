// ! Section 04
// ### 1.
// 인자로 두 개의 값을 받아 그 중 더 큰 값을 반환하는 함수를
// 작성해보세요. **1강에서 배운 3가지 형태**로 각각 선언해보세요.
let q = 1,
  w = 2;
function compare(x, y) {
  if (x > y) {
    console.log("큰 수", x);
  } else {
    console.log("큰 수", y);
  }
}
compare(q, w);

// ### 2.
// 아래의 함수 `funcEach`를 작성해보세요.
// > 두 개의 인자를 받습니다.
// 첫 번째 인자인 `func` 는 또 다른 함수,
// 두 번째 인자인 `array` 는 배열입니다.
// `array` 안의 모든 요소들을 하나씩 `func` 에 인자로 넣어 실행합니다.
// >
function funcEach(func, array) {
  for (number of array) {
    func(number);
  }
}
funcEach(console.log, [1, 2, 3]);

// ### 3.
// 위 2번 문제의 함수를, 배열 대신 **N개의 인자들을 받는** 코드로 다시 작성해보세요.
function funcEach(func, ...items) {
  for (item of items) func(item);
}
//  호출 예시
funcEach(console.log, 1, 2, 3);

// ### 4.
// 인자로 주어진 숫자를 0이 될 때까지 재귀적으로 출력하는 함수를 작성해보세요.
//  호출 예시
// function recursiveDecrease(x) {
//   for (i = x; i >= 0; i--) {
//     console.log(i);
//   }
// }
function recursiveDecrease(num) {
  console.log(num);
  if (num > 0) {
    recursiveDecrease(--num);
  }
}
recursiveDecrease(5);
