"use strict";
var $ = function(id) {
  return document.getElementById(id);
};
let percentage = function(num, per) {
  return (num / 100) * per;
}
let getIncomeTax = function() {
  let user_input = parseFloat($('income').value);

  if (isNaN(user_input)) {
    alert("WOW YOU DID NOT ENTER A NUMBRE BYE!!")
  } else if (user_input >= 0 && user_input <= 9275) {
    let calcuated_amount = percentage(user_input, 10);
    $('tax').value = calcuated_amount;
  } else if (user_input >= 9276 && user_input <= 37650) {
    user_input = user_input - 9275;
    let calcuated_amount = percentage(user_input, 15);
    calcuated_amount = calcuated_amount + 927.50;
    $('tax').value = calcuated_amount;
  } else if (user_input >= 37651 && user_input <= 91150) {
    user_input = user_input - 37650;
    let calcuated_amount = percentage(user_input, 25);
    calcuated_amount = calcuated_amount + 5183.75;
    $('tax').value = calcuated_amount;
  } else if (user_input >= 91151 && user_input <= 190150) {
    user_input = user_input - 91150;
    let calcuated_amount = percentage(user_input, 28);
    calcuated_amount = calcuated_amount + 18558.75;
    $('tax').value = calcuated_amount;
  } else if (user_input >= 190151 && user_input <= 413350) {
    user_input = user_input - 190150;
    let calcuated_amount = percentage(user_input, 33);
    calcuated_amount = calcuated_amount + 46278.75;
    $('tax').value = calcuated_amount;
  } else if (user_input >= 413351 && user_input <= 415050) {
    user_input = user_input - 413350;
    let calcuated_amount = percentage(user_input, 35);
    calcuated_amount = calcuated_amount + 73656;
    $('tax').value = calcuated_amount;
  } else if (user_input >= 415051) {
    user_input = user_input - 415050;
    let calcuated_amount = percentage(user_input, 39.69);
    calcuated_amount = calcuated_amount + 595;
    $('tax').value = calcuated_amount;
  } else {
    console.log("wow something actually broke its all your fault.");
  }
}
let clear = function() {
  $('tax').value = '';
  $('income').value = '';
}

window.onload = function() {
  $('calculate').onclick = getIncomeTax;
  $('clear').onclick = clear;
}
