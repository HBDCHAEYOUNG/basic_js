document.querySelector("#button1").addEventListener("click", () => {
  alert("ㅇㅇ 어서오고");
});
// ♻️ 새로고침 후 실행
document.querySelector("#button1").addEventListener("click", (e) => {
  console.log(e);
});
// ♻️ 새로고침 후 실행
document.querySelector("#button1").addEventListener("click", (e) => {
  console.log(this);
  console.log(e.target);
  e.target.textContent = "클릭됨";
});

const button2 = document.querySelector("#button2");

let timeout;
let interval;
let countdown;

button2.addEventListener("mouseenter", () => {
  if (timeout) clearTimeout(timeout);

  button2.firstElementChild.textContent = "💣 치워라, 5초 준다";

  timeout = setTimeout(() => {
    button2.firstElementChild.textContent = "🔥🔥🔥🔥🔥🔥🔥🔥🔥";
  }, 5000);
});

button2.addEventListener("mouseleave", () => {
  if (timeout) clearTimeout(timeout);

  button2.firstElementChild.textContent = "올리지 말라고 하면 올리지 마라";
});

button2.addEventListener("mouseenter", () => {
  if (interval) clearInterval(interval);

  countdown = 5;

  button2.lastElementChild.textContent = countdown;

  interval = setInterval(() => {
    button2.lastElementChild.textContent = --countdown;

    if (!countdown) clearInterval(interval);
  }, 1000);
});
button2.addEventListener("mouseleave", () => {
  if (interval) clearInterval(interval);

  countdown = 0;

  button2.lastElementChild.textContent = countdown;
});

const input1 = document.querySelector("#input1");
input1.addEventListener("focus", () => {
  input1.setAttribute("placeHolder", "어! 왜, 뭐 입력하시게요?");
});
input1.addEventListener("blur", () => {
  input1.setAttribute("placeHolder", "그냥 가시네...");
});

const ul = document.querySelector("ul");
const input2 = document.querySelector("#input2");
input2.addEventListener("keyup", (e) => {
  if (e.key !== "Enter") return;

  const newLi = document.createElement("li");
  newLi.textContent = e.target.value;
  ul.appendChild(newLi);

  e.target.value = "";
});
