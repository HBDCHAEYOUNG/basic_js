// 배열!
// 1.배열 리터럴 빈요소도 포함
const arr1 = []; // 빈 배열
const arr2 = [1, 2, 3];
const arr3 = [1, , 2, , 3]; // 빈 요소(undefined) 표함 배열 생성

console.log(arr1.length, arr1); //0[]
console.log(arr2.length, arr2); //3[1,2,3]
console.log(arr3.length, arr3); //5[1,비어있움,2,비어있음,3]

// 2.생성자 함수
const arr = new Array(3);

console.log(arr); //(3)[비어있음]
console.log(arr.length); //3
console.log(arr[0], arr[1], arr[2]); //undefined, undefined, undefined
// 3. 정적 메서드 of
// 인자가 하나의 숫자라도 이를 요소로 갖는 배열 생성
const arr11 = Array.of(3);
const arr12 = Array.of(1, 2, 3);
const arr13 = Array.of("ABC", true, null);

// 4. 정적 메서드 from
// 배열, 유사배열객체, 이터러블을 인자로 받아 배열 반환

// 유사배열객체 for of 문으로 사용가능
const arrLike = {
  0: "🍎",
  1: "🍌",
  2: "🥝",
  3: "🍒",
  4: "🫐",
  length: 5,
};

// 일반 for문으로 순회 가능
// for (let i = 0; i < arrLike.length; i++) {
//   console.log(arrLike[i]);
// }

for (const item of Array.from(arrLike)) {
  console.log(item); //Array.from 은 얕은 복사..
}
