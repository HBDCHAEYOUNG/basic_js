7;
let a = 10;
let b = a;
a = 20;

let c = { value: 10 };
let d = c;
c.value = 20;

console.log(a, b, c.value, d.value);

//  어떤 값이 출력될까요?
// 20 10 20 //!10
// 답 : 20 10 20 20
//ab 원시타입 / bc 참조타입
