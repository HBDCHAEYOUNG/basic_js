// 배열!
// 1.배열 리터럴 빈요소도 포함
const arr1 = []; // 빈 배열
const arr2 = [1, 2, 3];
const arr3 = [1, , 2, , 3]; // 빈 요소(undefined) 표함 배열 생성

console.log(arr1.length, arr1); //0[]
console.log(arr2.length, arr2); //3[1,2,3]
console.log(arr3.length, arr3); //5[1,비어있움,2,비어있음,3]

// 2.생성자 함수
const arr = new Array(3);

console.log(arr); //(3)[비어있음]
console.log(arr.length); //3
console.log(arr[0], arr[1], arr[2]); //undefined, undefined, undefined
// 3. 정적 메서드 of
// 인자가 하나의 숫자라도 이를 요소로 갖는 배열 생성
const arr11 = Array.of(3);
const arr12 = Array.of(1, 2, 3);
const arr13 = Array.of("ABC", true, null);

// 4. 정적 메서드 from
// 배열, 유사배열객체, 이터러블을 인자로 받아 배열 반환

// 유사배열객체 for of 문으로 사용가능
const arrLike = {
  0: "🍎",
  1: "🍌",
  2: "🥝",
  3: "🍒",
  4: "🫐",
  length: 5,
};

// 일반 for문으로 순회 가능
// for (let i = 0; i < arrLike.length; i++) {
//   console.log(arrLike[i]);
// }

for (const item of Array.from(arrLike)) {
  console.log(item); //Array.from 은 얕은 복사..
}

//  배열의 기본 메서드들
// 정적 isArray -배열인지 여부 확인
//instanceof Array?? 차이가 뭐고
console.log(
  Array.isArray([1, 2, 3]),
  Array.isArray("123"),
  Array.isArray("123".split(""))
);

// at 주어진 인자를 인덱스로 값을 변환 (-로 뒤에서부터 읽기)
const arr33 = ["한놈", "두시기", "석삼", "너구리", "오징어"];

console.log(arr33.at(1), arr33.at(2), arr33.at(-2)); //두시기 석삼 너구리

// includes 인자로 주어진 요소 유무 확인
const arr5 = [1, 2, 3, "abc", true];

console.log(arr5.includes(2), arr5.includes("가나다"), arr5.includes(true)); //->true flase true

//4. indexOf, lastIndexOf - 앞/뒤에서 첫 번째 값의 인덱스 반환
const arr44 = [1, 2, 3, 2, 1];

console.log(
  arr44.indexOf(2), //1
  arr44.lastIndexOf(2), //3
  arr44.indexOf(4) //-1 없을땐 -1
);

// 5. join - 인자로 주어진 값으로 구분하여 요소들을 문자열로 연결하여 반환
const arr21 = ["a", "b", "c", "d", "e"];
console.log(arr21.join(":")); //인자 미입력시 ,로

// 예시
console.log(classIntro(3, "김민지", "영희", "철수", "보라")); // 호이스팅
function classIntro(classNo, teacher, ...children) {
  return (
    `${classNo}반의 선생님은 ${teacher}, ` +
    `학생들은 ${children.join(", ")}입니다.`
  );
}

// 배열 변경 기본 메서드들

//원본 배열들 변경
// 1.push ->값을 뒤에 추가
// 2.unshift-> 값을 앞에 추가
// 3.pop->값을 뒤에서 제거하여 변환
// 4.shift->값을 앞에서 제거하여 변환
const 캠핑용품 = ["라면", "삼겹살"];
const 장보기 = 캠핑용품.push("쌈장", "쌈채소");
console.log(장보기, 캠핑용품);

// 5.splice -원하는 위치에 요소 추가 및 삭제
//인자3개 (시작위치, 제거할요소개수, 추가할 하나이상의 요소)
//delete는 그냥 제거 배열 순서 땅겨오지 않음 delete 사용xx
const 짱구가족 = ["흰둥이", "짱아", "철수", "유리", "짱구", "엄마"];
짱구가족.splice(2, 2, "아빠");
console.log(짱구가족);

//4. fill - 배열을 특정 값으로 채움
//(채울 값, 어디서부터, 어디까지)
const 사고싶은것 = ["가방", "차", "옷"];
사고싶은것.fill("신발", 1, 2);
console.log(사고싶은것);

// 5. reverse - 배열의 순서를 뒤집음

// III. 새 배열을 반환하는 기본 메서드들
// ⭐️ 원본 배열을 수정하지 않음
// 얕은 복사본
// 1. concat - 배열에 다른 배열이나 값을 이어붙인 결과를 반환
// 2. slice - 인자로 주어진 범주의 값을 잘라 반환
// 1~2개 인자를 받음 (begin : 시작 위치 end : 종료 위치)
// 3. flat - 인자로 주어진 깊이만큼 배열을 펼쳐 반환
// 💡 flat 평평하게 한다는 의미

// 7-3 고차함수 메서드

// 1. forEach - 각 요소를 인자로 콜백함수 실행
// 💡 for문의 좋은 대체제
// ⚠️ 단점 : 예외를 던지지 않으면 종료할 수 없음 - break, continue 사용 불가
//콜백함수 - 인자: ( 현재 값, 현재 값의 인덱스, 해당 배열 )
const arr333 = [1, 2, 3, 4, 5];
const result = arr333.forEach((itm, idx, arr) => {
  //블록문 안에는 return문 필요함
  console.log(itm, idx, arr);
}); //forEach로 배열을 인자로 반환

// 2. map - 각 요소를 주어진 콜백함수로 처리한 새 배열 반환
const 메뉴 = [
  { 시간: "아침", 메인메뉴: "토스트", 음료: "커피", 가격: 3000 },
  { 시간: "점심", 메인메뉴: "짜장면", 음료: "콜라", 가격: 5000 },
  { 시간: "저녁", 메인메뉴: "쌀국수", 음료: "물", 가격: 6000 },
];
// const 메뉴검색 = 메뉴.map((itm) => {
//   return {
//     시간: itm.시간,
//     메인메뉴: itm.메인메뉴,
//   };
// }); 아래처럼 디스트럭쳐링 사용하여 간단하게 가능
const 메뉴검색 = 메뉴.map(({ 시간, 메인메뉴 }) => {
  return { 시간, 메인메뉴 };
});
console.log(메뉴검색);

const joined = 메뉴
  .map(({ 시간, 메인메뉴, 음료 }, idx) => {
    return `${시간} : ${메인메뉴}, ${음료}`;
  })
  // .forEach((itm) => console.log(itm));
  //forEach로 인자 반환해도 되고
  .join("\n - - - - - - - - - -\n");
//join써서 한번에 쫘라락
console.log(joined);

// 3. find, findLast, findIndex, findLastIndex - 주어진 기준으로 검색
// 콜백함수로에 인자로 넣었을 때 true를 반환하는
// find - 첫 번째 값 반환
// findLast - 마지막 값 반환
// findIndex - 첫 번째 값의 인덱스 반환
// findLastIndex - 마지막 값의 반환
const 저녁메뉴검색 = (i) => {
  return i.시간 === "저녁";
};
console.log(
  "점심:",
  메뉴.find(({ 시간 }) => 시간 === "아침").메인메뉴,
  "\n저녁:",
  메뉴.find(저녁메뉴검색).메인메뉴
);

// 4. some, every - 어떤/모든 요소가 기준을 충족하는지 확인
// 콜백함수에 인자로 넣은
// some - 요소들 중 하나라도 true를 반환하는가 여부 반환
// every - 모든 요소가 true를 반환하는가 여부 반환
const 면나와 = ({ 메인메뉴 }) => {
  return ["짜장면", "쌀국수"].includes(메인메뉴);
};
console.log(메뉴.some(면나와)); //true
console.log(메뉴.every(면나와)); //false

// 5. filter - 주어진 기준을 충족하는 요소들로 새 배열 만들어 반환
console.log(
  "면 나오는 시간 :",
  메뉴
    .filter(면나와)
    .map(({ 시간 }) => 시간)
    .join(",")
);

// 6. reduce, reduceRight
// 주어진 콜백함수에 따라 값들을 접어 나감
// 콜백함수 - 인자: ( 이전값, 현재값, 현재 인덱스, 해당 배열 )
const arr45 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(
  arr45.reduce(
    (prev, curr, idx) => {
      return prev + curr;
    } //,10 이런식으로 초기값 추가가능->인덱스0시작)
  )
); //1+2+3+4+5+6+7+8+9=45 ->인덱스 1시작(초기값 없음)

console.log(
  "면 메뉴 가격의 합 :",
  메뉴
    .filter(면나와)
    .map(({ 가격 }) => 가격)
    .reduce((prev, curr) => prev + curr)
);

// 7. sort - 배열을 ( 주어진 기준대로 ) 정렬
// ⚠️ 배열 자체의 순서를 바꿈 - 원본 수정
// ➕ 해당 배열을 반환
// 인자들:
const arr100 = ["라", "사", "다", "가", "바", "마", "나"];

console.log(arr100.sort());

// 숫자를 문자열로 암묵적 변환하여 오름차순 정렬
// ⭐️ 정확한 정렬을 위해 - 콜백 함수 사용
// 두 인자 a와 b : 인접한 두 요소
// 0보다 큰 값 반환 : b를 앞으로 - 순서 뒤집음
// 0 반환: 순서 유지 - ECMAScript 표준은 아니므로 환경마다 다를 수 있음
// 0보다 작은 값 반환 : a를 앞으로 - 사실상 순서 유지

// 7. flatMap - map 한 다음 flat 매핑해서 펼침
// 인자들:
// 콜백함수 - 인자: ( 현재 값, 현재 값의 인덱스, 해당 배열 )
// thisArg

const word = "하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열";

console.log(word.split(" ").flatMap((i) => i.split("")));
