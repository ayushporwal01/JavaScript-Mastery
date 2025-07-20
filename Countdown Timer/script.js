let countdown;
let isPaused = false;
let remainingTime = 0;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

function updateTime(seconds) {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0"); //get full hours
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0"); //get remaining minutes
  const secs = String(seconds % 60).padStart(2, "0"); //gives remaining seconds
  timerDisplay.textContent = `${hrs}:${mins}:${secs}`; //updates timer in ui
}

startBtn.addEventListener("click", () => {
  if (countdown || isPaused) return;

  const hrs = parseInt(document.getElementById("hours").value) || 0; //gets input value, converts it to number, invalid value default to 0, prints it
  const mins = parseInt(document.getElementById("minutes").value) || 0;
  const secs = parseInt(document.getElementById("seconds").value) || 0;
});
