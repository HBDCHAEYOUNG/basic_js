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

console.clear();

// return 안썻을때

// let numbers = [1, 2, 3, 4, 5];
// let kakao = [];

// function solution(nums) {
//   for (let num of nums) {
//     if (num < 3) {
//       console.log("num", num);
//       kakao.push(num);
//     } else {

//       return;
//     }
//   }
// }

// solution(numbers);
// console.log("kakao", kakao);

function hello(test) {
  // 여기는!!! 근의공식 계산이닷!!!!
  // 근의공식이 더럽게 길어

  return "채영이가 너무예뻐"; // 여기는 = 이닷!!!!
}

const 이쁜채영 = hello(123213);

const age = 20;
if (20 === age) {
} else if (19 === age) {
} else if (18 === age) {
} else if (17 === age) {
} else if (16 === age) {
} else if (15 === age) {
}

switch (age) {
  case 20:
  // console.log("age = 20");
  case 19:
    break;
  case 18:
    break;
  case 17:
    break;
  case 16:
    break;

  default:
    break;
}

const cars = ["black", "blue", "white"];
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    for (let k = 0; k < 3; k++) {
      console.log(i, j, k);
    }
  }
}
// 제곱 -> 성능적으로 제곱

// 👍
// for() {}
// for() {}

// 😒
// for(){
//   for() {}
// }

const carBlack = {
  color: "black",
  name: "G90 Black",
};

// array
for (let car of cars) {
  console.log("car", car);
}

console.clear();
// object
for (let key in carBlack) {
  console.log("key: ", key);
  console.log("value: ", carBlack[key]);
}

console.log("car", carBlack.color);
console.log("car", carBlack["color"]);
let color = "color";
console.log("car", carBlack[color]);

console.log("value", carBlack["color"], carBlack[color]);
