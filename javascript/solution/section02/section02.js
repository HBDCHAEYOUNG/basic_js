// !Section 2

//  ### 2. '총 경과시간은 ~분입니다.'와 같은 문자열이 되도록
const hour = 2;
const minute = 30;
console.log(hour * 60 + minute);
console.log(`총 경과시간은 ${hour * 60 + minute}분입니다.`);

// ### 3.어떤 값이 출력될까요? true false false true
console.log(1 == "1", 1 === "1", 1 != "1", 1 !== "1");

// ### 4.어떤 값이 출력될까요? 3,5,5,3
let quiz_x = 3;
console.log(quiz_x++, ++quiz_x, quiz_x--, --quiz_x);

//### 5. 어떤 값이 출력될까요? 10 false
let x5 = 5;
let y5 = 10;
let z = x5 > y5 && y5++;
console.log(y5, z);

// ### 6.
// ‘커피를 마시는 새’라는 책이 있습니다. 페이지수는 500, 품절은 되지 않은 상태고 장르는 판타지, SF, 스릴러입니다. 이 책의 정보를 **객체와 배열을 사용하여** 표현해보세요.
let book = {
  title: "커피를 마시는 새",
  pages: 500,
  stock: true,
  genre: ["판타지", "SF", "스릴러"],
};

//  어떤 값이 출력될까요? 20, 10, 20, //!10틀림!참조타입임
// let quiz_a = 10;
// let quiz_b = quiz_a;
// quiz_a = 20;
// let quiz_c = { value: 10 };
// let d = quiz_c;
// quiz_c.value = 20;
// console.log(quiz_a, quiz_b, quiz_c.value, d.value);

// let a = 10
// let b = a
// a => 10
// b => a(10)

let c = { value: 10 };

let d = c; // x -> 불변성 못지킴 얕아
let e = { ...c }; // 깊은복사
