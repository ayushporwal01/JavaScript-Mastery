const clock = document.getElementById("clock");
const toggleBtn = document.getElementById("toggleBtn");

let is24Hour = false;

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let session = "";

  if (!is24Hour) {
    session = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
  }

  const hh = String(hours).padStart(2, "0");
  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");

  clock.textContent = `${hh}:${mm}:${ss} ${!is24Hour ? session : ""}`;
}

setInterval(updateClock, 1000);
updateClock();

toggleBtn.addEventListener("click", () => {
  is24Hour = !is24Hour;
  toggleBtn.textContent = is24Hour ? "Switch to 12-Hour" : "Switch to 24-Hour";
});
