// 평가를 문자(A, B, C, D, ...)로 입력받아 내용을 다르게 출력해보자.

// 평가 내용
// 평가 : 내용
// A : best!!!
// B : good!!
// C : run!
// D : slowly~
// 나머지 문자들 : what?

// 입력 예시
// A

// 출력 예시
// best!!!
const x = "A";

// if (x === "A") return console.log("best!!!");
// else if (x === "B") return console.log("good!!!");
// else if (x === "C") return console.log("run!!!");
// else if (x === "D") return console.log("slowly!!!");
// else return console.log("what?");

switch (x) {
  case "A":
    console.log("best!!!");
    break;
  case "B":
    console.log("good!!!");
    break;
  case "C":
    console.log("run!!!");
    break;
  case "D":
    console.log("slowly!!!");
    break;

  default:
    console.log("what?");
    break;
}
