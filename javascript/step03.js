// for 루프
// 💡 변수이므로 let이 사용됨

for (let i = 10; i >= 0; i -= 2) {
  console.log(i);
}

// 중첩가능
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

for (let x = true, y = 0, z = 0; y * z < 10; x = !x, x ? y++ : z++) {
  console.log(y, z);
}
const lunch = {
  name: "라면",
  taste: "매운맛",
  kilocalories: 500,
  cold: false,
};

// 객체 배열 for문 ->>key 이름 자유롭게 사용가능
for (const key in lunch) {
  // 💡 변할 것이 아니므로 const 사용
  console.log(key, ":", lunch[key]);
}

// 문자열 역시 이터러블이므로 사용 가능
for (const letter of "안녕하세요~") {
  console.log(letter);
}

// continue 한루프를 건너뜀
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}
console.log("for 루프 종료"); //->1,2,4,5,7,8,10,for 루프 종료

// break 블록 종료유 빠져나옴
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}
console.log("for 루프 종료"); //->1,2,3,4,for 루프 종료
