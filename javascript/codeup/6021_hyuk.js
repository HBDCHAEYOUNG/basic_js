// 알파벳과 숫자로 이루어진 단어 1개가 입력된다.
// 입력받은 단어의 각 문자를 한 줄에 한 문자씩 분리해 출력한다.

// 예시
// s = input()
// print(s[0])
// print(s[1])
// ...

// 참고
// s[0] 은 첫 번째 문자를 의미한다.

const a = "HelloWorld";
for (let i of a) {
  console.log(i);
}
//방법 1?
// const splita = [...a];
// console.log(splita);

//방법 2?
function split(str) {
  return Array.from(str);
}
// console.log(split(a));

//!한줄씩 따로따로 출력 오케~?
