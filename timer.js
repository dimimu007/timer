var timer = document.getElementById("timer");
var start = document.getElementById("start-button");
var reset = document.getElementById("reset-button");

var seconds = 0;
var minutes = 0;
var hours = 0;

var leadingSeconds = 0;
var leadingMinutes = 0;
var leadingHours = 0;

var timerInterval = null;
var timerFunction = "stopped";

function startTimer() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
      if (hours / 60 === 1) {
        hours = 0;
      }
    }
  }

  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }

  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }

  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }

  timer.innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

start.addEventListener("click", function () {
  if (timerFunction === "stopped") {
    timerInterval = window.setInterval(startTimer, 10);
    timerFunction = "started";
  } else {
    window.clearInterval(timerInterval);
    timerFunction = "stopped";
  }
});

reset.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;

  timer.innerText = "00:00:00";
});
