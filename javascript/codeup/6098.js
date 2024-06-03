// const input = `1 1 1 1 1 1 1 1 1 1
// 1 0 0 1 0 0 0 0 0 1
// 1 0 0 1 1 1 0 0 0 1
// 1 0 0 0 0 0 0 1 0 1
// 1 0 0 0 0 0 0 1 0 1
// 1 0 0 0 0 1 0 1 0 1
// 1 0 0 0 0 1 2 1 0 1
// 1 0 0 0 0 1 0 0 0 1
// 1 0 0 0 0 0 0 0 0 1
// 1 1 1 1 1 1 1 1 1 1`;

// const inputValue = input.split(`\n`);

// const graph = [];
// for (i = 0; i < 10; i++) {
//   graph.push(inputValue[i].split(" ").map(Number));
// }

//개미 우선 순위
// 오른쪽 0 (x ,y+1)===0 => (x ,y+1)= 9
// 오른쪽 1일 경우 -> 아래 0 (1회) (x ,y+1)===1 => (x+1,y)=9
// 오른쪽 or 아래 2일경우 종료
// (x ,y+1)===2 => (x ,y+1) = 9
// (x+1,y)===2 =>  or (x+1,y)=9

// !feedback
const input = `1 1 1 1 1 1 1 1 1 1
1 999 0 1 0 0 0 0 0 1
1 0 0 1 1 1 0 0 0 1
1 0 0 0 0 0 0 1 0 1
1 0 0 0 0 0 0 1 0 1
1 0 0 0 0 1 0 1 0 1
1 0 0 0 0 1 2 1 0 1
1 0 0 0 0 1 0 0 0 1
1 0 0 0 0 0 0 0 0 1
1 1 1 1 1 1 1 1 1 1`;

const inputValue = input.split("\n");

const graph = [];
for (i = 0; i < 10; i++) {
  graph.push(inputValue[i].split(" ").map(Number));
}

// 1. 2,2출발 0 현재점 setting
// 2. 오른쪽이 비어있다면 오른쪽으로 이동(0 -> 9)
// 3. 오른쪽이 비어있지 않다면 아래로 이동(0 -> 9)
// 4. 숫자 2발견 시 종료

graph[1][1] = 9;
let x = 1;
let y = 1;

while (true) {
  const nx = x + 1;
  const ny = y + 1;

  if (graph[x][ny] === 2) {
    graph[x][ny] = 9;
    break;
  } else if (graph[nx][y] === 2) {
    graph[nx][y] = 9;
    break;
  } else if (graph[x][ny] === 0) {
    graph[x][ny] = 9;
    y++;
  } else if (graph[nx][y] === 0) {
    graph[nx][y] = 9;
    x++;
  }
}

for (const item of graph) {
  console.log(item.join("  "));
}
