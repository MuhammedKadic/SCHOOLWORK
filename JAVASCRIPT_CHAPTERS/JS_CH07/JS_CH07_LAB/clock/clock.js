let PMORAM = true;

"use strict";
var $ = function(id) {
  return document.getElementById(id);
};

var displayCurrentTime = function() {
  var today = new Date();
  let storedHere = today.getHours();
  convertTime(storedHere);
  if (storedHere >= 13 && storedHere <= 24) {
    console.log(storedHere);
    let new_Time = storedHere % 12;
    document.getElementById('hours').innerHTML = new_Time;
  } else {
    document.getElementById('hours').innerHTML = today.getHours();
  }
  document.getElementById('minutes').innerHTML = today.getMinutes();
  document.getElementById('seconds').innerHTML = today.getSeconds();
  if (PMORAM == true) {
    document.getElementById('ampm').innerHTML = "AM"
  } else {
    document.getElementById('ampm').innerHTML = "PM"
  }
}

var padSingleDigit = function(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
};

let convertTime = function(num) {
  if (num >= 13 && num <= 24) {
    PMORAM = false;
  } else {
    PMORAM = true;
  }
}

window.onload = function() {
  displayCurrentTime();
  let timer = setInterval(displayCurrentTime, 1000);
};
