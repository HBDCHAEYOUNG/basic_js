// 입력
// 바둑알이 깔려 있는 상황이 19 * 19 크기의 정수값으로 입력된다.
// 십자 뒤집기 횟수(n)가 입력된다.
// 십자 뒤집기 좌표가 횟수(n) 만큼 입력된다. 단, n은 10이하의 자연수이다.

// 출력
// 십자 뒤집기 결과를 출력한다.

// const arrs = [];
// for (let i = 1; i <= 19; i++) {
//   const arr = [];
//   for (let j = 1; j <= 19; j++) {
//     arr.push(0);
//   }
//   arrs.push(arr);
// }

// function a(x, y) {
//   for (let i = 1; i <= 19; i++) {
//     arrs[i - 1][y - 1] = 1;
//     arrs[x - 1][i - 1] = 1;
//   }
// }

// a(10, 10), a(12, 12);
// console.log(arrs);
//에휴..

// !feedback
const num = 19;
const input = `0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
2
10 10
12 12`;

const inputValue = input.split("\n");

const graph = [];
for (let i = 0; i < num; i++) {
  const arrs = inputValue[i].split(" ").map(Number);
  graph.push(arrs);
}

const n = inputValue[num];
for (let i = 1; i <= n; i++) {
  const [x, y] = inputValue[i + num].split(" ").map(Number);

  // 2중 for
  for (let j = 0; j < num; j++) {
    // x좌표만 수정
    if (graph[j][x - 1] === 1) graph[j][x - 1] = 0;
    else graph[j][x - 1] = 1;

    // y좌표만 수정
    if (graph[y - 1][j] === 1) graph[y - 1][j] = 0;
    else graph[y - 1][j] = 1;
  }
}

// y = 10, x = 0 ~ 19 / 10 X
// x = 10, y = 0 ~ 19
for (let item of graph) {
  console.log(item.join(" "));
}
