// 정수 3개를 입력받아 합과 평균을 출력해보자.

// 입력 예시
// 1 2 3

// 출력 예시
// 6 2.00

const array = [1, 2, 3];
const sum = array.reduce((a, b, index) => a + b, 0);
// a  b  index
// 0  1   0
// 1  2   1
// 3  3   2
// 6

const average = array.reduce((a, b) => a + b) / array.length;

console.log(sum, average);
