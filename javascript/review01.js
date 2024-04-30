// 1.변수
// 변수 let 주머니 생성!!
// 변수 선언고 값 넣기 동시에 가능
// 이미 만들어진 주머니 재선언 불가능
// 선언 전 코드 사용 불가능

// x에 1 넣은 뒤 'hello!'로 변경시 y는 기존 위치 그대로~
let x = 1;
let y = x;
console.log("변경 전", x, y); //변경 전 1 1
x = "Hello!";
console.log("변경 후", x, y); //변경 후 Hello! 1

// 2.상수
// 담긴 값 바뀔 수 없는 주머니
// 상수 선언 동시 초기화
// 선언만 불가능
// 상수 값 변경 불가!!!

// 데이터의 종류!!
// 불리언, number, string

// 이스케이프 표현	대체
// \'	작은따옴표
// \"	큰따옴표
// \n	줄바꿈
// \t	탭
// \\	백슬래시

// ${}안에 상수나 변수, 표현식 등을 삽입 가능

// !Section 2
const a = 5;
const b = "3";
const c = a + b;
console.log(c);
//  ### 1. 어떤 값이 출력될까요? //!8틀림
// 문자열+숫자 -> 이어붙인 문자열 반환 53

const hour = 2;
const minute = 30;
//  const sentence =
//  ### 2. '총 경과시간은 ~분입니다.'와 같은 문자열이 되도록
//  템플릿 리터럴을 사용해서 작성해보세요.
console.log(hour * 60 + minute);
console.log(`총 경과시간은 ${hour * 60 + minute}분입니다.`);

console.log(1 == "1", 1 === "1", 1 != "1", 1 !== "1");
// ### 3.어떤 값이 출력될까요? true false false true

let quiz_x = 3;
console.log(quiz_x++, ++quiz_x, quiz_x--, --quiz_x);
// ### 4.어떤 값이 출력될까요? 3,5,5,3

let x5 = 5;
let y5 = 10;
let z = x5 > y5 && y5++;
console.log(y5, z);
//### 5. 어떤 값이 출력될까요? 10 false

// ### 6.
// ‘커피를 마시는 새’라는 책이 있습니다. 페이지수는 500, 품절은 되지 않은 상태고 장르는 판타지, SF, 스릴러입니다. 이 책의 정보를 **객체와 배열을 사용하여** 표현해보세요.
let book = {
  title: "커피를 마시는 새",
  pages: 500,
  stock: true,
  genre: ["판타지", "SF", "스릴러"],
};

let quiz_a = 10;
let quiz_b = quiz_a;
quiz_a = 20;
let quiz_c = { value: 10 };
let d = quiz_c;
quiz_c.value = 20;
console.log(quiz_a, quiz_b, quiz_c.value, d.value);
//  어떤 값이 출력될까요? 20, 10, 20, //!10틀림!참조타입임

//!Section 3
// ### 1.
let a1 = 1;
let b1 = 2;
{
  a1 = 3;
  let b1 = 4;
  console.log("안쪽", a1, b1);
}
console.log("바깥쪽", a1, b1);
//  어떤 값이 출력될까요? 안쪽 3,4 / 바깥쪽 1,2

// ### 2.
function grade(score) {
  if (score >= 90) {
    console.log("A");
    return;
  }
  if (score >= 80) {
    console.log("B");
    return;
  }
  if (score >= 70) {
    console.log("C");
    return;
  }
  if (score >= 60) {
    console.log("D");
    return;
  } else {
    console.log("F");
  }
}
const myscore = 85;
grade(myscore);

// ### 3.
// const food = 'pasta'; // risotto, burger, suchi 등으로 변경
// ​food 에 이름이 들어간 음식이 속하는 카테고리를 출력하는 함수 switch  문을 작성하세요. 조건은 아래와 같습니다.
// ‘pizza’와 ‘risotto’, ‘pasta’는 ‘Italian’으로,
// ‘burger’는 ‘American’으로,
// 기타 음식은 ‘Unknown’으로 분류됩니다.
const food = "pasta"; // risotto, burger, suchi 등으로 변경

// ### 4.
// for 문을 활용해서 1~20까지의 숫자 중 짝수를 로그에 찍는 코드를 작성하세요.
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log("i", i);
  }
}

// ### 5.
const numbers = [1, 2, 3, 4, 5];
//  배열 안의 숫자를 모두 더하는 코드를 작성해보세요.
sum = 0;
for (num of numbers) {
  sum += num;
}
console.log("sum", sum);

//### 6.
let user = { id: 1, name: "Alice", job: "Developer" };
//  for문을 사용해서 name을 제외한 정보들을 출력하는 코드를 작성해보세요.
//  목표 결과:
//  id: 1
//  job: Developer
for (let key in user) {
  if (key != "name") {
    console.log(key + ":" + user[key]);
  }
}

// ### 7.
let count = 5;
//  count가 0이 될 때까지, 해당 값에 10을 곱한 값을 출력하는 코드를
//  while문으로 작성해보세요.
for (i = count; i >= 0; i--) {
  console.log("", i * 10);
}
