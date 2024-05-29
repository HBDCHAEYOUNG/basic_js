//!LESSON1 에러헨들링
// I. 자바스크립트의 에러 핸들링
// 1. try ... catch 문
console.log("에러 발생 전");

try {
  (3).split("");
} catch (e) {
  console.error("🛑 에러!!", e);
}

console.log("에러 발생 후");

// try 블록
// 에러 발생 여지가 있는 코드 포함
// 이곳에서 발생한 에러는 프로그램을 멈추지 않음
// catch 블록
// 에러 발생시 실행할 코드 포함
// 발생한 오류 객체를 인자로 받음

// 2. try ... catch ... finally 문

// II. Error 객체
