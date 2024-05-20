// 시:분:초 형식으로 시간이 입력될 때 분만 출력해보자.

// 어떻게 분만 출력해야 할지 주의 깊게 생각해야한다.

// 입력 예시
// 17:23:57

// 출력 예시
// 23

const time = new Date();
const minutes = time.getMinutes();

console.log("t", time);
console.log("m", minutes);
