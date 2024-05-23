// 영문 소문자 'q'가 입력될 때까지
// 입력한 문자를 계속 출력하는 프로그램을 작성해보자.

// 입력 예시
// x
// b
// k
// d
// l
// q
// g
// a
// c

// 출력 예시
// x
// b
// k
// d
// l
// q

const input = ["x", "b", "k", "d", "l", "q", "g", "a", "c"];
for (let i = 0; i < input.length; i++) {
  if (input[i - 1] === "q") return;
  console.log(input[i]);
}
