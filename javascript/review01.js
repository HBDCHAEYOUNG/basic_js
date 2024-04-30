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
