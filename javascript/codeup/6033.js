// 문자 1개를 입력받아 그 다음 문자를 출력해보자.
// 영문자 'A'의 다음 문자는 'B'이고, 숫자 '0'의 다음 문자는 '1'이다.

// 입력 예시
// a

// 출력 예시
// b
const a = "a";

console.log("a 다음은", String.fromCharCode(a.charCodeAt() + 1));
