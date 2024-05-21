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
  if (score >= 90) console.log("A");
  else if (score >= 80) console.log("B");
  else if (score >= 70) console.log("C");
  else if (score >= 60) console.log("D");
  else console.log("F");
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
switch (food) {
  case "pizza":
  case "risotto":
  case "pasta":
    console.log("Italian");
    break;

  case "burger":
    console.log("American");
    break;

  default:
    console.log("Unknown");
    break;
}

// ### 4.
// for 문을 활용해서 1~20까지의 숫자 중 짝수를 로그에 찍는 코드를 작성하세요.
console.clear();
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log("i", i);
  }
}

// ### 5.
const numbers = [1, 2, 3, 4, 5];
//  배열 안의 숫자를 모두 더하는 코드를 작성해보세요.
// es5
let sum = 0;
for (num of numbers) {
  sum += num;
}
// es6
const a = numbers.reduce((sum, num) => (sum += num), 0);
console.log("a", a);

//### 6.
const obj = {};
const arr = [];

let user = { id: 1, name: "Alice", job: "Developer" };
//  for문을 사용해서 name을 제외한 정보들을 출력하는 코드를 작성해보세요.
/* const hello = "name";
console.log("hello", hello);
user.name;
user["name"];
user[hello]; */

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
