const clock12 = document.querySelector("#clock-12");
const clock24 = document.querySelector("#clock-24");
const switchTo = document.querySelector("main i");

function get12Clock() {
  const date = new Date();
  const hours = String(date.getHours() % 12 || 12); //앞의 값이 falsy이면 12로 출력
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock12.innerText = `${hours}:${minutes}`;
}

function get24Clock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock24.innerText = `${hours}:${minutes}`;
}

function toggleHandler() {
  clock12.classList.toggle("none");
  clock24.classList.toggle("none");
} //toggle 깔즤~

get12Clock();
get24Clock();
switchTo.addEventListener("click", toggleHandler);
setInterval(get12Clock, 1000);
setInterval(get24Clock, 1000);
