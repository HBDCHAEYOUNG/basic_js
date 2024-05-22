// 영문 소문자(a ~ z) 1개가 입력되었을 때,
// a부터 그 문자까지의 알파벳을 순서대로 출력해보자.

// 입력 예시
// f

// 출력 예시
// a b c d e f

// console.log(String.fromCharCode("b".charCodeAt() - 1) === "a");
// console.log("a".charCodeAt() - 1);

const input = "f";
for (let i = 97; i <= input.charCodeAt(); ++i) {
  const A = String.fromCharCode(i);
  console.log(A);
}
