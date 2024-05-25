// 입력
// h, b, c, s 가 공백을 두고 입력된다.
// h는 48,000이하, b는 32이하(단, 8의배수), c는 5이하, s는 6,000이하의 자연수이다.

// 출력
// 필요한 저장 공간을 MB 단위로 바꾸어 출력한다.
// 단, 소수점 첫째 자리까지의 정확도로 출력하고 MB를 공백을 두고 출력한다.

// 입력 예시
// 44100 16 2 10

// 출력 예시
// 1.7 MB
const h = 44100;
const b = 16;
const c = 2;
const s = 10;

// function sound(h, b, c, s) {
//   if (h > 48000 || b % 8 != 0 || b > 32 || c > 5 || s > 6000) return;
//   (h * b * c * s) / 8 / 1024 / 1024;
// }
// console.log(sound(h, b, c, s));
if (h > 48000 || b % 8 != 0 || b > 32 || c > 5 || s > 6000) return;
else {
  const num = (h * b * c * s) / 8 / 1024 / 1024;
  console.log(`${num.toFixed(1)} MB`);
}
