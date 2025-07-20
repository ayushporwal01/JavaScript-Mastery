let countdown;
let isPausee = false;
let remainingTime = 0;

const timer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

function updateTime(seconds) {
 const hrs = String(Math.floor(seconds / 3600))
}