// 입력 예시
// 5 5
// 3
// 2 0 1 1
// 3 1 2 3
// 4 1 2 5

// 출력 예시
// 1 1 0 0 0
// 0 0 1 0 1
// 0 0 1 0 1
// 0 0 1 0 1
// 0 0 0 0 1

// const input = [
//   `5 5
// 3
// 2 0 1 1
// 3 1 2 3
// 4 1 2 5`,
// ];

// // 1. 채영이 스탈
// const arrs = [];
// for (let i = 1; i <= 5; i++) {
//   const arr = [];
//   for (let j = 1; j <= 5; j++) {
//     arr.push(0);
//   }
//   arrs.push(arr);
// }

// const input = [
//   [2, 0, [1, 1]],
//   [3, 1, [2, 3]],
//   [4, 1, [2, 5]],
// ];
// // 0 -> 몇번 반복
// // 1 -> 0:가로 (x,y+0)
// //      1:세로 (x+0,y)
// // 2 -> 시작 좌표

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < input[i][0]; j++) {
//     if (input[i][1] === 0) {
//       // 가로줄
//       const [x, y] = input[i][2];
//       arrs[x - 1][y - 1 + j] = 1;
//     } else {
//       // 세로줄
//       const [x, y] = input[i][2];
//       arrs[x - 1 + j][y - 1] = 1;
//     }
//   }
// }
// for (const arr of arrs) {
//   console.log(arr.join(" "));
// }

// !feedback
const input = `5 5
3
2 0 1 1
3 1 2 3
4 1 2 5`;

const inputValue = input.split("\n");
const [x, y] = inputValue[0].split(" ").map(Number);

const graph = [];
for (let i = 0; i < x; i++) graph.push(Array(y).fill(0));

const n = Number(inputValue[1]);
const testCase = [];
for (let i = 2; i < n + 2; i++) {
  testCase.push(inputValue[i].split(" ").map(Number));
}

for (let i = 0; i < n; i++) {
  const [cnt, dir, dx, dy] = testCase[i];
  const nx = dx - 1;
  const ny = dy - 1;

  for (let j = 0; j < cnt; j++) {
    if (dir === 0) graph[nx][ny + j] = 1;
    else graph[nx + j][ny] = 1;
  }
}

for (const item of graph) {
  console.log(item.join(" "));
}
