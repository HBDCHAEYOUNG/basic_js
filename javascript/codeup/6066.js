// 3개의 정수(a, b, c)가 입력되었을 때, 짝(even)/홀(odd)을 출력해보자.

// 입력 예시
// 1 2 8

// 출력 예시
// odd
// even
// even

const number = [1, 2, 8];

//1 map은 공장!
const oddeven = number.map((x) => (x % 2 === 0 ? "even" : "odd"));
console.log(oddeven);

//2
for (const x of number) {
  if (x % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

// feedback forEach는 공장이 아닌 for 문!
number.forEach((x) => console.log(x % 2 === 0 ? "even" : "odd"));

//2
for (const x of number) {
  if (x % 2 === 0) console.log("even");
  else console.log("odd");
  // console.log(x % 2 === 0 ? "even" : "odd");
}
