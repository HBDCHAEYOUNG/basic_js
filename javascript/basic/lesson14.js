// n초 뒤 실행
console.log(1);
setTimeout(() => {
  console.log("setTimeout 타임아웃!");
  console.log(2);
}, 1000);
console.log(3);

// let time = 3;
// // n초 마다 반복
// const interval = setInterval(() => {
//   time -= 1;
//   console.log(time);

//   if (time === 0) {
//     console.log(123, time);
//     clearInterval(interval); // 여기서 interval을 정리
//   }
// }, 1000);
