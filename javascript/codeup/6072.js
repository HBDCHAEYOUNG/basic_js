// 정수(1 ~ 100) 1개가 입력되었을 때 카운트다운을 출력해보자.

// while 조건식 :
//   ...
//   ...
// 반복 실행구조를 사용해 보자.

// 입력 예시
// 5

// 출력 예시
// 5
// 4
// 3
// 2
// 1

// 1. 숫자 하나 입력 받아요
// 2. 출력
// 3. 1이 될때까지 -1처리하여 출력

// const number = 0;
// for (let i = number; i <= number; i) {
//   if (i === 0 || i > 100) return;
//   console.log(i--);
// }

const input = 5;
for (let i = input; i > 0; i--) {
  console.log(i);
}
