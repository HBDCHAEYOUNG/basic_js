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
