"use strict";
var $ = function(id) {
  return document.getElementById(id);
};

//global stop watch timer variable and elapsed time object
var stopwatchTimer;
var elapsedMinutes = 0;
var elapsedSeconds = 0;
var elapsedMilliseconds = 0;

var displayCurrentTime = function() {
  var now = new Date();
  var hours = now.getHours();
  var ampm = "AM"; // set default value

  // correct hours and AM/PM value for display
  if (hours > 12) { // convert from military time
    hours = hours - 12;
    ampm = "PM";
  } else { // adjust 12 noon and 12 midnight
    switch (hours) {
      case 12: // noon
        ampm = "PM";
        break;
      case 0: // midnight
        hours = 12;
        ampm = "AM";
    }
  }

  $("hours").firstChild.nodeValue = hours;
  $("minutes").firstChild.nodeValue = padSingleDigit(now.getMinutes());
  $("seconds").firstChild.nodeValue = padSingleDigit(now.getSeconds());
  $("ampm").firstChild.nodeValue = ampm;
};

var padSingleDigit = function(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
};
let timeBegan = null,
  timeStopped = null,
  stoppedDuration = 0,
  started = null;

function start() {
  if (timeBegan === null) {
    timeBegan = new Date();
  }

  if (timeStopped !== null) {
    stoppedDuration += (new Date() - timeStopped);
  }
  console.log(stoppedDuration);

  started = setInterval(clockRunning, 10);
}

function stop() {
  timeStopped = new Date();
  clearInterval(started);
}

function reset() {
  clearInterval(started);
  stoppedDuration = 0;
  timeBegan = null;
  timeStopped = null;
  document.getElementById("area").innerHTML = "00:00:00.000";
}

function clockRunning() {
  var currentTime = new Date(),
    timeElapsed = new Date(currentTime - timeBegan - stoppedDuration),
    hour = timeElapsed.getUTCHours(),
    min = timeElapsed.getUTCMinutes(),
    sec = timeElapsed.getUTCSeconds(),
    ms = timeElapsed.getUTCMilliseconds();

  document.getElementById("area").innerHTML =
    (hour > 9 ? hour : "0" + hour) + ":" +
    (min > 9 ? min : "0" + min) + ":" +
    (sec > 9 ? sec : "0" + sec) + "." +
    (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
};

window.onload = function() {
  // set initial clock display and then set interval timer to display
  // new time every second. Don't store timer object because it
  // won't be needed - clock will just run.
  displayCurrentTime();
  setInterval(displayCurrentTime, 1000);
};
