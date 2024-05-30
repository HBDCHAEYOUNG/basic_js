const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

// console.log(number.innerText);
// console.log(increase.offsetTop);
// console.log(decrease.id);

increase.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;

  console.log("increase가 클릭됨");
};
decrease.onclick = () => {
  // if (current <= 0) return;
  const current = parseInt(number.innerText, 10);
  if (current <= 0) return;

  number.innerText = current - 1;
  console.log("decrease가 클릭됨");
};
