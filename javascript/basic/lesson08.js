// !1.
const arr = [1, 2, 3, 4, 5];
const obj = {
  name: "obj",
  age: 10,
};

const a = { name: "a" };
// const b = a; 얕은복사 -> 주소만
const b = { ...a }; // 값을 복사
b.name = "world";
// console.log(a);
// console.log(b);

// keys, values, entries
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// delete obj.name;
Object.freeze(obj);
Object.seal(obj);
Object.preventExtensions(obj);
obj.name = "world";
// console.log(obj);

// !2.
const person = {
  name: "김달순",
  age: 23,
  languages: ["Korean", "English", "French"],
  education: {
    school: "한국대",
    major: ["컴퓨터공학", "전자공학"],
    graduated: true,
  },
};

const personStr = JSON.stringify(person);
// console.log("front", person);
// console.log("computer", JSON.stringify(person));
// console.log("server", JSON.parse(personStr));
