// "연도.월.일"을 입력받아 "일-월-연도" 순서로 바꿔 출력해보자.

// 참고
// y, m, d = input().split('.')
// 과 같이 변수들을 순서대로 나열하면 구분기호를 기준으로 잘라 순서대로 저장한다.

const date = "2020.3.4";

console.log(date.split(".").reverse().join("-"));
