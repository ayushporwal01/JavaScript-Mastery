let countdown;
let isPaused = false;
let remainingTime = 0;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

function updateDisplay(seconds) {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0"); //get full hours
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0"); //get remaining minutes
  const secs = String(seconds % 60).padStart(2, "0"); //gives remaining seconds
  timerDisplay.textContent = `${hrs}:${mins}:${secs}`; //updates timer in ui
}

//Start
startBtn.addEventListener("click", () => {
  // Prevents multiple countdowns or resuming while paused
  if (countdown || isPaused) return;

  //gets input value, converts it to number, default to 0 if invalid, prints it
  const hrs = parseInt(document.getElementById("hours").value) || 0;
  const mins = parseInt(document.getElementById("minutes").value) || 0;
  const secs = parseInt(document.getElementById("seconds").value) || 0;

  // Convert to total seconds
  remainingTime = hrs * 3600 + mins * 60 + secs;

  //alert if clicked any button before entering the hours, minutes, seconds
  if (remainingTime <= 0) {
    alert("Nothing to start — set the timer first.");
    return;
  }

  //If Time is Zero or Invalid, Stop
  if (remainingTime <= 0) return;

  // Start countdown
  countdown = setInterval(() => {
    if (remainingTime <= 0) {
      clearInterval(countdown);
      countdown = null;
      return;
    }

    remainingTime--; //updates remainingTime every second
    updateDisplay(remainingTime); //display the updated time on ui
  }, 1000);
});

//Pause Countdown
pauseBtn.addEventListener("click", () => {
  if (!countdown) {
    alert("Nothing to pause — start the timer first.");
    return;
  }
  clearInterval(countdown);
  countdown = null;
  isPaused = true;
});

//Reset Countdown
resetBtn.addEventListener("click", () => {
  if (remainingTime <= 0) {
    alert("Nothing to reset — please set and start the timer.");
    return;
  }

  clearInterval(countdown);
  countdown = null;
  isPaused = false;
  remainingTime = 0;
  updateDisplay(0);
  document.getElementById("hours").value = ``;
  document.getElementById("minutes").value = ``;
  document.getElementById("seconds").value = ``;
});
