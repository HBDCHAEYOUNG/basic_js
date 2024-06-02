const carrot = document.querySelector("section > ul > li");

// carrot.textContent = "제주당근";
// carrot.firstChild.nodeValue = "제주당근";

const onion = document.querySelector("section ul").lastElementChild;
onion.className = "soldout organic";

// onion.classList.remove("organic");
// onion.classList.add("hidden");
// onion.classList.toggle("hidden");
// onion.classList.toggle("hidden");
// onion.classList.replace("hidden", "organic");

onion.style.fontSize = "3em";
onion.style["font-size"] = "1em";
// console.log(onion.style.fontSize);

const onionCompStyle = window.getComputedStyle(onion);

// console.log(onionCompStyle.color);

const hyperlink = document.querySelector("a");
hyperlink.setAttribute("href", "https://www.youtube.com/watch?v=Iotmv9f-xMU");
// console.log(hyperlink.getAttribute("href"));

const message = document.querySelector("input[name=message]");
const toggle = document.querySelector("input[name=toggle]");
message.value = "안녕하세요";
// console.log(message.value);
toggle.checked = !toggle.checked;
// console.log(toggle.checked);

const ul = document.querySelector("section > ul");
ul.removeChild(onion);

//자식요소 모두 지우기
while (ul.firstChild) {
  ul.removeChild(ul.firstChild);
}

const tomato = document.createElement("li");
tomato.textContent = "토마토";

console.log(tomato);
ul.appendChild(tomato);
["상추", "가지", "브로콜리"].forEach((itm) => {
  const el = document.createElement("li");
  el.textContent = itm;
  ul.appendChild(el);
});

const newSec = document.createElement("section");
const newUl = document.createElement("ul");
newSec.appendChild(newUl);
[
  { name: "소고기", classes: ["organic"] },
  { name: "양고기", classes: ["soldout", "organic"] },
  { name: "돼지고기", classes: [] },
  { name: "오리고기", classes: [] },
  { name: "닭고기", classes: ["soldout"] },
].forEach((itm) => {
  const el = document.createElement("li");
  el.textContent = itm.name;
  el.classList.add(...itm.classes);

  newUl.appendChild(el);
});
document.querySelector("body").append(newSec);
