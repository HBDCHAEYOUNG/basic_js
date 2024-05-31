const carrot = document.querySelector("section > ul > li");

// carrot.textContent = "제주당근";
// carrot.firstChild.nodeValue = "제주당근";

const onion = document.querySelector("section ul").lastElementChild;
onion.className = "soldout organic";

onion.classList.remove("organic");
onion.classList.add("hidden");
onion.classList.toggle("hidden");
onion.classList.toggle("hidden");
onion.classList.replace("hidden", "organic");
console.log(onion.classList);
