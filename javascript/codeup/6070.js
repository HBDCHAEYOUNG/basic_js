// 월이 입력될 때 계절 이름이 출력되도록 해보자.

// 월 : 계절 이름
// 12, 1, 2 : winter
//   3, 4, 5 : spring
//   6, 7, 8 : summer
//   9, 10, 11 : fall

// 입력 예시
// 12

// 출력 예시
// winter

const season = 12;
if (season >= 12 || season <= 2) {
  console.log("winter");
  return;
} else if (season >= 9) {
  console.log("fall");
  return;
} else if (season >= 6) {
  console.log("summer");
  return;
} else {
  console.log("spring");
}
