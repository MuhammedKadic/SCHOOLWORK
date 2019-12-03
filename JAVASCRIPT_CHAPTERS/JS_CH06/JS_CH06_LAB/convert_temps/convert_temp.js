"use strict";
var $ = function(id) {
  return document.getElementById(id);
};


var clearTextBoxes = function() {
  $("degrees_entered").value = "";
  $("degrees_computed").value = "";
};
let state;
let processEntries = function() {
  if ($('toCelsius').checked) {
    $('degree_label_1').innerHTML = "Enter Fahrenheit.";
    $('degree_label_2').innerHTML = "Caluclated Celsius.";
    state = 1;
    $('degrees_entered').disabled = false;
    $('degrees_entered').value = "";
    $('degrees_computed').value = "";

  } else if ($('toFahrenheit').checked) {
    $('degree_label_1').innerHTML = "Enter Celsius.";
    $('degree_label_2').innerHTML = "Fahrenheit Converted";
    state = 2;
    $('degrees_entered').disabled = false;
    $('degrees_entered').value = "";
    $('degrees_computed').value = "";

  } else {
    console.log('Something went terribly wrong.');
  }
}
let i = 0;


let doSomeMath = function() {
  let user_option = $('degrees_entered').value;

  let caluclated_var;
  if (state != 3) {
    if (isNaN(user_option) == true) {
      $('degrees_entered').disabled = true;
      $('degrees_entered').value = "You didn't enter a number";
      $('degrees_computed').value = "You didn't enter a number";

      $('toCelsius').checked = false;
      $('toFahrenheit').checked = false;
    } else {
      if (state == 1) {
        caluclated_var = (user_option - 32) * (5 / 9);
        $('degrees_computed').value = caluclated_var.toFixed(2);
      } else if (state == 2) {
        caluclated_var = (user_option * 9 / 5) + 32;
        $('degrees_computed').value = caluclated_var.toFixed(2);

      } else {
        i++;
        $('degrees_entered').value = "Enter a Number (" + i + ")";
        $('degrees_computed').value = "Enter a Number (" + i + ")";
        state = 3;
      }
    }
  } else {
    i++;
    $('degrees_entered').value = "Enter a Number (" + i + ")";
    $('degrees_computed').value = "Enter a Number (" + i + ")";
    state = 3;
  }
}

let resetbutton = function() {
  $('degrees_entered').disabled = true;

}
window.onload = function() {
  $('convert').onclick = doSomeMath;
};
