const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const refs = {
  startBtn: document.querySelector("[data-action=start]"),
  stopBtn: document.querySelector("[data-action=stop]"),
  bodyEl: document.querySelector("body"),
};
let watchId = null;

function timer() {
  const colorArr = colors.map((color) => color);
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  refs.bodyEl.style.backgroundColor = colorArr[randomIntegerFromInterval(0, 5)];
}
function startWatch() {
  watchId = setInterval(timer, 1000);
}
function stopWatch() {
  clearInterval(watchId);
}
refs.startBtn.addEventListener("click", startWatch);
refs.stopBtn.addEventListener("click", stopWatch);
