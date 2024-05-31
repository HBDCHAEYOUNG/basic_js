// ! set
const arr = [1, 2, 3, 4, 5, 5];
// console.log("arr", arr);
const setArr = new Set([1, 2, 3, 5, 5]);
// console.log("set", setArr); // 중복이 없는 배열

// 중복을 없애는 과정
const exam01 = [1, 1, 1, 2, 3, 4, 4, 4];
const examSet01 = new Set(exam01);
// console.log([...examSet01]);

const setObj = new Set([1, 2, 3]);
// console.log(setObj.size);
// console.log(setObj.has(2)); // 1복잡성 100
// console.log(exam01.some((a) => a === 2)); // n복잡성 100*n

// ! map
// Map 생성
const mapObj = new Map([["name", "map"]]);
const obj = { name: "obj" };

// set 메서드 - 키와 값의 쌍 추가
mapObj.set("age", 10);
obj.age = 10;

// has 메서드 - 요소 포함여부 확인
console.log(mapObj.has("name"));
console.log(!!obj.name);

// get 메서드
console.log(mapObj.get("name"));
console.log(obj.name);

// delete 메서드
console.log(mapObj.delete("name"));
console.log(delete obj.name);

// size 메서드
console.log(mapObj.size);
console.log(Object.keys(obj).length);

// clear 메서드 - 모든 요소들을 삭제
// mapObj.clear();
// obj = {};

// console.log(mapObj, obj);

// 배열 각각의 값에 대한 count문제
const examArr = [1, 2, 3, 4, 1, 2, 3];
// output=> 1: 2, 2: 2, 3: 2, 4: 1

console.log("==============");
const examObj = {};
for (let num of examArr) {
  if (examObj[num]) examObj[num] += 1;
  else examObj[num] = 1; // obj ={1: 1}
}

const examMap = new Map();
for (let num of examArr) {
  if (examMap.has(num)) examMap.set(num, examMap.get(num) + 1);
  else examMap.set(num, 1); // obj ={1: 1}
}
console.log(examMap.size);
