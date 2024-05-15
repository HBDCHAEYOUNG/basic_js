// ! lesson 1
// 객체는 변수를 받으려면 무조건 [] 괄호안에 넣자
function add(obj, key, value) {
  obj[key] = value;
}

const a = "hello";
const b = {
  // hello: "world",
  [a]: "world",
};
console.log("b", b.hello);
console.log("b", b["hello"]);
console.log("b", b[a]);

delete b.hello;
console.log("b", b);

b.name = "hi";
console.log("b", b);

add(b, "age", 18);
console.log("b", b);

// * 단축표현
const age = 23;
const 김우혁 = {
  // age: age, 생략가능
  age,
};

// product1 = ["선풍기", 50000, 50]
product1 = {
  name: "선풍기",
  price: 50000,
  quantity: 50,
};

// ! lesson 2
const obj1 = {
  name: "obj1",
  age: 10,
};
const obj2 = {
  name: "obj1",
  age: 10,
};
const obj3 = {
  name: "obj1",
  age: 10,
  color: "red",
};

function createObj(name, age) {
  this.name = name;
  this.age = age;
}

const obj4 = new createObj("obj4", 20);
const obj5 = new createObj("obj5", 20);
const obj6 = new createObj("obj6", 20);
obj6["color"] = "red";
console.log("obj4", obj6);

// 상속의 예시
/* interface ageType {
  age: number
  color: string
}

interface helloType extends ageType {
  age: string
  name: string
}
const exam: helloType = {
  name: '안녕'
} */

// instanceof => 파일같은거 확인할때 쓰임
console.clear();
const file = File;
// console.log(typeof File);

function solution(str) {
  return str.replace("-", "");
}

console.log(solution("000907-1121112"));
