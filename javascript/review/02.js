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
