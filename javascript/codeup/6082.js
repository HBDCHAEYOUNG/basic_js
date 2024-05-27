// 친구들과 함께 3 6 9 게임을 하던 영일이는 잦은 실수 때문에 계속해서 벌칙을 받게 되었다.
// 3 6 9 게임의 왕이 되기 위한 369 마스터 프로그램을 작성해 보자.

// ** 3 6 9 게임은?
// 여러 사람이 순서를 정한 후, 순서대로 수를 부르는 게임이다.
// 만약 3, 6, 9 가 들어간 수를 자신이 불러야 하는 상황이라면, 수를 부르는 대신 "박수(X)" 를 쳐야 한다.
// 33과 같이 3,6,9가 두 번 들어간 수 일때, "짝짝"과 같이 박수를 두 번 치는 형태도 있다.

// 입력 예시
// 9

// 출력 예시
// 1 2 X 4 5 X 7 8 X

// const input = 9;
// let answer =[]
// for (let i = 1; i <= input; i++) {
//   if (i % 3 === 0) answer.push("X");
//   else answer.push(i);
// }

// ! feedback
const number = 66;
const answer = [];
for (let i = 1; i <= number; i++) {
  const str = i.toString();
  if (str.includes("3") || str.includes("6") || str.includes("9")) {
    let count = 0;
    for (const item of str) {
      if (item === "3" || item === "6" || item === "9") count += 1;
    }
    answer.push("X".repeat(count));
  } else {
    answer.push(i);
  }
}
console.log(answer.join(" "));
