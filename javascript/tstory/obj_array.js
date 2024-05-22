const arr = [1, 2, 3, 4, 5];

//배열 불러오기//
// 1. forEach 데이터 인덱스 기존배열 정보
// arr.forEach((value, index, array) => {
//   console.log("forEach", value, index, array);
// });

// 2. for of 문
// for (const item of arr) {
//   console.log("for of", item);
// }

// 3. for(let i=0; i<배열길이; i++){}
// for (let i = 0; i < 5; i++) {
//   console.log(arr[i]);
// }

// 4. map
arr.map((item) => console.log(item));

const arrlike = {
  0: "🍎",
  1: "🍌",
  2: "🥝",
  3: "🍒",
  4: "🫐",
  length: 5,
};

// 1. for in
// for (const key in arrlike) {
//   console.log(key, arrlike[key]);
// }

// 2. for if Array.from(array변수이름){}
// for (const item of Array.from(arrlike)) {
//   console.log(item);
// }
