// 데이터 종류
const a = 1000; // number 타입
const b = "텍스트"; // string 타입
const c = true; // boolean 타입

const d = null; // null
const e = undefined; // undefined

// 메모리
// 변수랑 값을
// d -> 의도적으로 빈값
// e -> 의도하지않은 빈값

// string관련
const b1 = "안녕하세요";
console.log(b1 + "!"); // 일반
console.log(`${b1}! ${a}살에는 애기였습니다.`); // 백틱

const javascript_A = a + "!"; // javascript
const typescript_B = String(a) + "!"; // typescript

console.log(typeof javascript_A); // 일반
console.log(typeof typescript_B); // 일반

// 비교연산 > 타입스크립트
console.clear();
if (a === 1) {
  console.log("맞습니다");
} else {
  console.log("틀립니다");
}

// number관련
let bb = 10;
bb += a; // 1010 bb = bb + a;
// * "+=" 요녀석은 텍스트에서도 씀
console.log(bb);

// NaN(Not a Number) => 숫자와 다른 타입의 계산을 할때(+빼고)
let x = 1 / "abc";
let y = 2 * "가나다";
let z = NaN;

// 소수점은 정확하게 같게 할수없고 정확하게 사용하고싶다면 라이브러리 사용
console.log(0.1 + 0.2, 0.1 + 0.2 === 0.3); // false

// boolean
// console.log(!!true);
const text_a = "text"; // true
const number_a = 100; // true
const number_c = -10; // true
const arr = []; // true
const obj = {}; // true

const text_b = ""; // false
const number_b = 0; // false
const nu = null; // false
const un = undefined; // false
const na = NaN; // false

// || -> or , && -> and
console.log(true && true && !false); // 무조건 true일때(ex. 반환)
console.log(!(true && true && false)); // 무조건 true일때(ex. 반환)
console.log(true || true || !false); // 무조건 true일때(ex. 반환)

console.log(true && 5); // true일때 뒤에꺼 보여줌
console.log(false || 50); // false일때 뒤에꺼 보여줌
console.log(undefined ?? "hello"); // undefined, null일때에만 뒤에꺼 실행
// toogle && <Components />

// 삼항 연산자
if (true) {
  console.log("요기");
} else {
  console.log("저기");
}

// react jsx -> html
true ? console.log("요기") : console.log("저기");

// 쉼표 연산자
let xx = 1;

// console.log(++xx);
// console.log(xx++);
// console.log(xx);
xx += 1;
console.log(xx);

// 객체, 배열
const 우혁 = {
  키: 177,
  몸무게: 68,
  나이: 29,
};
const 채영 = {
  키: 177,
  몸무게: 68,
  나이: 29,
};
const 연인 = [우혁, 채영]; // 객체로 이루어진 배열 -> 객체배열

const 과일 = ["사과", "바나나", "키위"];
const 사과 = {
  색: "red",
};

// step2
const black = {
  name: "G90 Black",
  image: "url()",
};
const blue = {
  name: "G90 LONH WHEEL BASE",
  image: "url()",
};
const white = {
  name: "G90",
  image: "url()",
};

// 배열
const 자동차들 = [black, blue, white]; // step_1

//step3 객체가 더 디테일
const red = {
  name: "G90 RED",
  image: "url()",
  엔진: [
    { 이름: "가솔린 3.5 터보", 가격: 0 },
    { 이름: "가솔린 3.5 터보 48V 일렉트릭 슈퍼차저", 가격: 6000000 },
  ],
  light: ["white", "yellow"],
};
const yellow = {
  name: "G90 RED",
  image: "url()",
  엔진: [
    { 이름: "가솔린 3.5 터보", 가격: 0 },
    { 이름: "가솔린 3.5 터보 48V 일렉트릭 슈퍼차저", 가격: 6000000 },
  ],
  light: ["white", "yellow"],
};
//step4
const 자동차들디테일 = [red, yellow];

// 공통적인 데이터들 -> 배열
// 그 데이터들의 디테일 -> 객체

const hello = [1, 2, 3];
console.log(hello.at(-1)); // hello[length - 1]
const asd = [];
console.log("hello", hello[0]);
const 영이 = {
  name: "윤채영",
};
console.log("hello", 영이.name);

const 기분풀림 = "웃음이 많아짐";
let 까탈우혁 = "까탈우혁";
let 까탈영이 = 기분풀림;

// 뭔가를 했음
까탈우혁 = 기분풀림;

console.log(까탈우혁 === 기분풀림);
const aaa = [123];
const bbb = aaa;
console.log(aaa === bbb);

// ----
console.clear();
const fastFoods = [
  { name: "햄버거", age: 10, sex: "male" },
  { name: "피자", age: 10, sex: "male" },
  { name: "치킨", age: 10, sex: "male" },
];

const fast = fastFoods.map(({ name }) => name);
console.log("fase", fast);

const bbbb = { ...fastFoods };
bbbb.age = 10;
console.log("fastFoods", fastFoods);
console.log("bbbb", bbbb);
