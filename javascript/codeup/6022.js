// 6자리의 연월일(YYMMDD)을 입력받아 나누어 출력해보자.

// 참고
// s = input()
// print(s[0:2])

// 를 실행하면 0번째 문자부터 1번째 문자까지 잘라 출력한다.
// s[a:b] 라고 하면, s라는 단어에서 a번째 문자부터 b-1번째 문자까지 잘라낸 부분을 의미한다.
// 다른 자르기 방법도 있다.

const date = "960430";
console.log(date.slice(0, 2)); // n만큼 돈다
for (i = 0; i < 5; i += 2) {}
console.log(`${date[0]}${date[1]} ${date[0]}${date[1]} ${date[0]}${date[1]}`); // 1
