// 입력
// 바둑알이 깔려 있는 상황이 19 * 19 크기의 정수값으로 입력된다.
// 십자 뒤집기 횟수(n)가 입력된다.
// 십자 뒤집기 좌표가 횟수(n) 만큼 입력된다. 단, n은 10이하의 자연수이다.

// 출력
// 십자 뒤집기 결과를 출력한다.

const arrs = [];
for (let i = 1; i <= 19; i++) {
  const arr = [];
  for (let j = 1; j <= 19; j++) {
    arr.push(0);
  }
  arrs.push(arr);
}

function a(x, y) {
  for (let i = 1; i <= 19; i++) {
    arrs[i - 1][y - 1] = 1;
    arrs[x - 1][i - 1] = 1;
  }
}

a(10, 10), a(12, 12);
console.log(arrs);
//에휴..
