// 전역
// export const helloworld = {};

// react V 현업
// class x
// arrow function
const a = () => {};

const arr = [1, 2, 3, 4];
eval("1+2+3"); // 코딩테스트

console.log(parseInt("100", 2));
console.log(Number("123.12"));

// * 중요! url은 한글로 나와서는 안됨
const searchURI = "https://www.google.com/search?q=안녕";
const encodedURI = encodeURI(searchURI);

console.log(encodedURI);

const raw = "?q=";
console.log(encodeURI(raw));
console.log(encodeURIComponent(raw));

const encodedURIa = "https://www.google.com/search?q=%EC%96%84%EC%BD%94";
const decodedURI = decodeURI(encodedURIa);

console.log(decodedURI);

const encodedComp = "%EC%96%84%EC%BD%94";
const decodedComp = decodeURI(encodedComp);

console.log(decodedComp);

// ! lesson.3
let str = "hellowolrld";
// * 중요
console.log(str.length);
// * 중요
console.log(str[0]);
// * 중요
console.log(str[str.length - 1]);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

const test = "test";
// * 중요
console.log(test.toUpperCase() === "TEST".toUpperCase());

console.log("Hello World!".charAt(0), "안녕하세요~".charAt(2));

// * 중요
console.log("안녕하세요~".at(1), "안녕하세요~".at(-1));

const arrs = ["옛날에", "호랑이", "살았어요.", "나무꾼"];
const sentence = "옛날에 호랑이 한 마리가 살았어요.";
// * 중요
for (const word of arrs) {
  console.log("includes", word, sentence.includes(word));
  console.log("startsWith", word, sentence.startsWith(word));
  console.log("endsWith", word, sentence.endsWith(word));
  console.log("- - - - -");
}

const word = "ABCDEFGHIJKL";
// * 중요
console.log(word.substring(4, 8), word.slice(4, 8));

// * 중요
console.log("010-1234-5678".split("-"), "ABC1DEF2GHI3JKL".split(/[0-9]/));

const worda = "  Hello World!  ";
console.log(`--${worda}--`);
// * 중요
console.log(`--${worda.trim()}--`);
console.log(`--${worda.trimStart()}--`);
console.log(`--${worda.trimEnd()}--`);

const wordb = "123456-456789";

console.log(wordb.slice(0, 8));
console.log(wordb.repeat(0));
console.log(wordb.repeat());

// * 중요
console.log("이스탄불은 터키의 수도이다.".replace("수도이다", ""));

// ! lesson.4

console.log(Number.MAX_VALUE); // 코딩테스트
console.log(Number.MIN_VALUE); // 코딩테스트
console.log(Number.MAX_SAFE_INTEGER); // 코딩테스트
console.log(Number.MIN_SAFE_INTEGER); // 코딩테스트
console.log(1e9); // 코딩테스트

// * 중요
console.log(Number.parseInt("123.4567"), Number.parseFloat("123.4567"));

console.log(
  (11).toString(), // 기본값 10진수
  (11).toString(2),
  (11).toString(8),
  (11).toString(16)
);

// ! lesson.5
// * 중요
console.log(Math.abs(123), Math.abs(-123));
// ceil 올림, round 반올림, floor 내림, trunc 정수부만
// * 중요
for (const num of [1.4, 1.6, -1.4, -1.6]) {
  console.log(
    num + " : ",
    Math.ceil(num),
    Math.round(num),
    Math.floor(num),
    Math.trunc(num)
  );
}

console.log(
  Math.pow(4, 2), // 4 ** 2
  Math.pow(4, 1), // 4 ** 1
  Math.pow(4, 0), // 4 ** 0
  Math.pow(4, -1) // 4 ** -1
);
console.log(
  Math.sqrt(25), // 5
  Math.sqrt(9), // 3
  Math.sqrt(2),
  Math.sqrt(1),
  Math.sqrt(0)
);
// * 중요
console.log(
  Math.max(8, 5, 9, 6, 3, 1, 4, 2, 7),
  Math.min(8, 5, 9, 6, 3, 1, 4, 2, 7)
);

for (let i = 0; i < 5; i++) {
  console.log("r", Math.random());
  console.log("r", Math.random() * 100);
  console.log(parseInt(Math.random() * 100));
}

// ! lesson.6
console.clear();
const now = new Date();
const timezoneOffset = now.getTimezoneOffset() * 60000;

const isoStr = new Date(now.getTime() - timezoneOffset).toISOString();

console.log(isoStr);
console.log(now.toString());
