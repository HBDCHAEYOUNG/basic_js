// 1부터 n까지, 1부터 m까지 숫자가 적힌 서로 다른 주사위 2개를 던졌을 때,
// 나올 수 있는 모든 경우를 출력해보자.

// 입력 예시
// 2 3

// 출력 예시
// 1 1
// 1 2
// 1 3
// 2 1
// 2 2
// 2 3

const n = 2;
const m = 3;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    console.log(i, j);
  }
}
