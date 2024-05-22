// 평가를 문자(A, B, C, D, ...)로 입력받아 내용을 다르게 출력해보자.

// 평가 내용
// 평가 : 내용
// A : best!!!
// B : good!!
// C : run!
// D : slowly~
// 나머지 문자들 : what?

// 입력 예시
// A

// 출력 예시
// best!!!
const x = "A";

if (x === "A") {
  console.log("best!!!");
  return;
}
if (x === "B") {
  console.log("good!!!");
  return;
}
if (x === "C") {
  console.log("run!!!");
  return;
}
if (x === "D") {
  console.log("slowly!!!");
  return;
} else {
  console.log("what?");
}
