// 정보 선생님은 수업을 시작하기 전에 이상한 출석을 부른다.

// 학생들의 얼굴과 이름을 빨리 익히기 위해 번호를 무작위(랜덤)으로 부르는데,
// 영일이는 선생님이 부른 번호들을 기억하고 있다가 거꾸로 불러보는 것을 해보고 싶어졌다.

// 출석 번호를 n번 무작위로 불렀을 때, 부른 번호를 거꾸로 출력해 보자.

// 입력 예시
// 10
// 10 4 2 3 6 6 7 9 8 5

// 출력 예시
// 5 8 9 7 6 6 3 2 4 10

const input = 10;
const arrs = [10, 4, 2, 3, 6, 6, 7, 9, 8, 5];
const answer = [];
// for (let i = input; i > 0; i--) {
//   answer.push(arrs[i - 1]);
// }
// console.log(answer.join(" "));

console.log(arrs.reverse().join(" "));
