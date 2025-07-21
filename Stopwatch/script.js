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

startBtn.addEventListener("click", () => {
  if (!running) {
    // Start stopwatch
    running = true;
    startBtn.textContent = "Pause";
    const start = Date.now() - startTime;

    interval = setInterval(() => {
      startTime = Date.now() - start;
      updateDisplay(startTime);
    }, 10);
  } else {
    // Pause stopwatch
    running = false;
    startBtn.textContent = "Start";
    clearInterval(interval);
  }
});

