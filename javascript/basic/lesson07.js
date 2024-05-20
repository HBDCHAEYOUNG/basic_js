const arr = [1, 2, 3, 4, 5];
arr[2]; // 1번만에 바로 가져올수있음
arr.splice(1, 2); // N번을 반복
const obj = {
  name: "hello",
};
// 1

const examArr01 = [, ,];
const examArr02 = new Array(3);

console.log("examArr02", examArr02);

const arrLike = {
  0: "🍎",
  1: "🍌",
  2: "🥝",
  3: "🍒",
  4: "🫐",
  length: 5,
};
// for ... of 문은 이터러블에서만 사용 가능
// 배열은 이터러블, 성능도 향상
for (const item of Array.from(arrLike)) {
  console.log(item);
}

// * isArray
console.log(
  Array.isArray([1, 2, 3]),
  Array.isArray("123"),
  Array.isArray("123".split(""))
);

// * at
console.log(arr.at(1), arr.at(2));

// * includes
console.log(arr.includes(2), arr.includes("abc"), arr.includes(true));

// * indexOf : 없을 시 -1 반환
const arr01 = [1, 2, 3, 2, 1];

console.log(arr01.indexOf(2), arr01.lastIndexOf(2), arr01.indexOf(4));

// * join
const arr1 = ["a", "b", "c", "d", "e"];
console.log(arr1.join(""));

// * push
const arr02 = [1, 2, 3];
const x = arr02.push(4);
console.log(x, arr02);

// * pop - 1개씩 스택
const y = arr02.pop();
console.log(y, arr02);

// * unshift
const z = arr.unshift(4);
console.log(z, arr);

// * shift
const q = arr.shift();
console.log(q, arr);

// * splice
// 1번 인덱스부터 3개 요소 제거 후 '가', '나', '다' 추가
console.clear();
console.log("arr", arr);
arr.splice(1, 1, "우혁이", "채영이");
console.log(arr);

// * slice
const sliceArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arr2 = sliceArr.slice(3);
const arr3 = sliceArr.slice(3, 7);
console.log("sliceArr", sliceArr);
const arr4 = sliceArr.splice(3);
console.log("sliceArr", sliceArr);
console.log(arr2, arr4);

// * fill - 알고리즘
const arr5 = Array(5).fill(0);
console.log("1.", arr5);

// * reverse
const arr06 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr06);

// * concat
const concatArr1 = [1, 2, 3];
const concatArr2 = ["a", "b", "c"];
const concatArr3 = [true, false];
console.log(concatArr1.concat(concatArr2));
console.log([...concatArr1, ...concatArr2]);

console.clear();

// * flat
const orgArr = [1, 2, [3, 4], [5, [6, [7, 8]]]];

// 인자가 없으면 1을 넣은 것과 같음
const orgArr0 = orgArr.flat();
const orgArr1 = orgArr.flat(1);
const orgArr2 = orgArr.flat(2);
const orgArr3 = orgArr.flat(3);

console.log("N:", orgArr0);
console.log("1:", orgArr1);
console.log("2:", orgArr2);
console.log("3:", orgArr3);

// * forEach
const arrForEach = [1, 2, 3, 4, 5];
const result = arrForEach.forEach((itm) => {});
