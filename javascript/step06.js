// date 객체
// 현재 날짜와 시간
const now = new Date();
const nowStr = Date();

console.log(typeof now); // new date는 object
console.log(now);
console.log(typeof nowStr); // date는 string
console.log(nowStr);

// 2.밀리초 기준
console.log(new Date(0)); // 1970년 1월 1일 자정(그리니치 평균시)
console.log(new Date(1000 * 60 * 60 * 24 * 365 * 30)); // 밀리 초 분 시간 일 30년

// 3. 단위별 숫자 입력
console.log(new Date(2022, 3, 20, 14, 35, 47, 789)); //   년 월(0부터시작) 시 분 초 +밀리초~~~~(표시안됨)

console.log(new Date("August 20, 2022 14:35:47"));
console.log(new Date("2022-08-20T14:35:47"));

//   정적메서드
console.log(Date.now()); // 기준시에서 몇초 지났는지
console.log(new Date(Date.now())); //다시 년월로표기

// 인스턴스 메서드
// 1.toString, toDateString, toTimeString
console.log(now.toDateString());
// 2.toLocaleString (국가코드 입력/미입력시 컴퓨터설정국가)
console.log(now.toLocaleString());
// 3.단위별 setter getter 메서드들

const now1 = new Date();

const year = now1.getFullYear();
const month = now1.getMonth() + 1;
const date = now1.getDate();
const day = "일월화수목금토"[now1.getDay()];

console.log(`오늘은 ${year}년 ${month}월 ${date}일, ${day}요일입니다.`);

// 4. getTime, setTime
const date1 = new Date(2020, 7, 20);
const date1value = date1.getTime();
const date2 = new Date();
date2.setTime(date1);
console.log(date2.toString());

// 5.getTimezoneOffset->시차 확인 가능
console.log(new Date().getTimezoneOffset() / 60);

// 6. toISOString
// 🔗 ISO 8061이란 형식의 문자열 반환
// UTC 기준으로 반환
const now3 = new Date();
const timezoneOffset = now3.getTimezoneOffset() * 60000;

const isoStr = new Date(now3.getTime() - timezoneOffset).toISOString();

console.log(isoStr);
console.log(now3.toString()); // 위 아래 값 같음을 확인 할 수 있슴
