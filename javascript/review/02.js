/* Section02 자료형과 연산자
!02-1 - 자료형 데이터의 종류

typeof 연산자 : 뒤에 오는 값의 자료형을 반환

1.boolean
2.number
3.string
4.undefined
5.null(의도적인 빈 값) */

// const a = true,
//   b = 123.45,
//   c = "안녕하세요!";
// console.log(a, typeof a); -> boolean
// console.log(b, typeof b); -> number
// console.log(c, typeof c); -> string
// console.log(typeof typeof true, typeof typeof 123.45, typeof typeof "Hello"); -> string string string

// let x = null;
// console.log(typeof null, typeof x); ->Object(객체)를 반환.. 객체는 원시타입이 아님

/*
!02-2 - 자료형과 정적, 동적 타입
js->동적타입 
특정 값 할당된 변수에, 다른 자료형 넣는 것 가능하나 오류에 취약

연산 오류
1+1 ->2
1+'1' ->11
*/

/*
!02-3 - 문자열(string)-텍스트 데이터
이스케이프표현	대체
     \'	     작은따옴표
     \"	     큰따옴표
     \n	     줄바꿈
     \t	     탭
     \\	     백슬래시

``(백틱) : 문자열 안에 탭과 줄바꿈 그대로 사용 가능!

템플릿 리터럴 - 백틱 사용
${}안에 상수나 변수, 표현식 등을 삽입 가능
*/
const NAME = "치즈덕";
let age = 3;
let married = false;
console.log(
  `제 이름은 ${NAME}, 나이는${age}살 이구요, ${
    married ? "기혼" : "미혼"
  }입니다.`
);

/*
!02-4 - 문자열에 사용되는 연산자
== 값 일치
=== 자료형도 값도 일치
!= 값 불일치
!== 자료형 및 값 불일치
x<y x먼저

+= 부수효과 o
부수효과의 왼쪽 값은 대상(변수)이어야함
*/

/*
!02-5 - 숫자 관련 연산자
NaN
isNaN : 숫자가 아니다 싶으면 true
Number.isNaN : 숫자형 자로형 주제에 숫자가 아니면 true

a++ 값 그대로
++a 1 증가한 값

*/
console.log(typeof "1", isNaN("1"), Number.isNaN("1")); // 특정 숫자로 변환 가능한 문자

/* 
!02-6 - 불리언 관련 연산자

- true=!false=!!true=!!!false
- And/OR 연산자
- 단축평가(shore circuit)
a. && - And : 양쪽 모두 true 여부 반환
   true && ~~~ : ~~~실행
   앞의 것이 false면 뒤 실행XXX
b. || - Or : 한쪽이라도 true 여부 반환
   false || ~~~ :~~~실행
   앞의 것이 true면 뒤 실행XXX

- 삼항연산자 -> ~ ? ~ : ~

- Truthy vs Falsy
true 또는 false로 평가되는 값들
*/
// let x = true;
// x = false;

// let y = x ? "참입니다." : "거짓입니다.";
// console.log(y);

//truthy
// console.log(
//   1.23 ? true : false,
//   -999 ? true : false,
//   "0" ? true : false,
//   " " ? true : false,
//   Infinity ? true : false,
//   -Infinity ? true : false,
//   {} ? true : false,
//   [] ? true : false
// );
//모두 true
// ⚠️ true와 `같다`는 의미는 아님
console.log(1.23 == true, " " == true, {} == true);

//falsy
// console.log(
//   0 ? true : false,
//   -0 ? true : false,
//   "" ? true : false,
//   null ? true : false,
//   undefined ? true : false,
//   NaN ? true : false
// );
//모두 false
// 💡 어떤 값들은 false로 타입변환됨
// console.log(0 == false, 0 === false, "" == false, "" === false);
// console.log(null == false, undefined == false, NaN == false);

//0 ->false 1->true로 구분
// let x = 0;
// let y = 1;

// x && x++;
// y && y++;

// console.log(x, y); //0 2

// let x = 123;

// console.log("x는 홀수인가?", !!(x % 2));

/*
!02-07 - 연산자 마무리

- ??-null 병합 연산자
null 또는 undefined만 대체

💡 우선순위 높은순 현재까지 다룬 연산자들 중
순위	연산자들
 1	  !, +, -, ++, --, typeof
 2	  **
 3	  *, /, %
 4	  +, -
 5	  <, <=, >, >=
 6	  ==, !=, ===, !==
 7	  &&
 8	  ||
 9	  =, +=, -=, *=, /=, %=, **=, &&=, ||=, ??=
 10	  ,
*/
//!질문 이고모야
// let a = false;
// let b = 0;
// let c = "";
// let d = null;
// let e;

// console.log(
//   a ?? "1기본값",
//   b ?? "2기본값",
//   c ?? "3기본값",
//   d ?? "4기본값",
//   e ?? "5기본값"
// );

/* 
! 02-9 - 객체와 배열 미리보기

I. 객체 미리보기
const person = {
  key : value
  name : 김우혁
};
 1.프로퍼티 접근 두방법
   a - 상수or변수이름.key이름 ex) person.name
   b - 상수or변수이름['key이름'] ex person['name']
   c - 키 in 객체 로 특정 키 포함 여부 확인 가능

 2.프로퍼티 수정 및 추가 가능

II. 배열 미리보기
const weekdays = ['월','화','수','목','금','토','일']
 1. 값과 길이 접근
   a - console.log(weekdays[0]) -> 월 
   b - console.log(weekdays.length) -> 7
   c - console.log(weekdays[weekdays.length-1]) -> 일
*/
