// II. 주요 정적 메서드

// 1.assign - 인자로 주어진 객체(들)의 프로퍼티들을 대상 객체에 붙여넣음-->얕은복사
const 김우혁1 = {
  name: "김우혁",
};
const 김우혁2 = { ...김우혁1 };
const 나이 = {
  age: 29,
  married: false,
};
const 직업 = {
  job: "개발자",
};
Object.assign(김우혁2, 나이);
console.log("김우혁정보", 김우혁2);

// 2. keys, values, entries - 객체의 키 / 값 / [키, 값]을 배열로 반환
// 3. preventExtensions - 프로퍼티 추가 금지
// 4. seal - 프로퍼티 추가와 삭제 금지
// 5. freeze - 객체 동결 - 읽기만 가능->얕게 적용..
// isFrozen - 해당 여부 확인
