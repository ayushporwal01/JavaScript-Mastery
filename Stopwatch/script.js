let startTime = 0;
let interval = null;
let running = false;

const display = document.querySelector(".display");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

function updateDisplay(elapsed) {
  const seconds = Math.floor(elapsed / 1000);
  const centiseconds = Math.floor((elapsed % 1000) / 10); // two decimal places
  display.textContent = `${seconds}.${String(centiseconds).padStart(2, "0")}`;
}

