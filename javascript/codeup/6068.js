// 점수(정수, 0 ~ 100)를 입력받아 평가를 출력해보자.

// 평가 기준
// 점수 범위 : 평가
//  90 ~ 100 : A
//  70 ~   89 : B
//  40 ~   69 : C
//    0 ~   39 : D
// 로 평가되어야 한다.

// 입력 예시
// 73

// 출력 예시
// B

const x = 73;

if (x >= 90) {
  console.log("A");
  return;
}
if (x >= 70) {
  console.log("b");
  return;
}
if (x >= 40) {
  console.log("C");
  return;
} else {
  console.log("D");
}
//? 더 간단 없어...?ㅜ
