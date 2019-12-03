var $ = function(id) {
  return document.getElementById(id);
};

var a = function() {
  var user_subtotal = parseFloat($('subtotal').value);
  var tax_rate = parseFloat($('tax_rate').value);
  if (isNaN(user_subtotal || tax_rate)) {
    alert("You did not use a number....")
  } else {
    var calculatedAmount = percentage(user_subtotal, tax_rate);
    $('sales_tax').value = calculatedAmount;

    var total_amount = user_subtotal + calculatedAmount;
    $('total').value = total_amount;

  }
}

function percentage(num, per) {
  return (num / 100) * per;
}
var clear = function() {
  $('tax_rate').value = "";
  $('subtotal').value = "";
  $('sales_tax').value = "";
  $('total').value = "";
}
window.onload = function() {

  $('calculate').onclick = a;
  $('clear').onclick = clear;

}
