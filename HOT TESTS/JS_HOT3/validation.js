let checkBoxValidation = function() {
  var isValid = true;

  let bitcoin_selected = document.getElementById('BITCOIN').checked;
  let ethereum_selected = document.getElementById('ethereum').checked;
  let wallet_option_1 = document.getElementById('wallet_option_1').checked;
  let wallet_option_2 = document.getElementById('wallet_option_2').checked;
  let first_name = document.getElementById('first_name').value;
  let last_name = document.getElementById('last_name').value;
  let address = document.getElementById('address').value;
  let zip_code = document.getElementById('zip_code').value;
  let email = document.getElementById('email').value;
  let confirmed_email = document.getElementById('confirmed_email').value;
  let phone = document.getElementById('phone').value;
  let billing_name = document.getElementById('billing_name').value;
  let billing_last = document.getElementById('billing_last').value;
  let billing_address = document.getElementById('billing_address').value;
  let billing_zip = document.getElementById('billing_zip').value;
  let billing_phone = document.getElementById('billing_phone').value;

  if (bitcoin_selected == false && ethereum_selected == false) {
    displayErrorMessage();
    displayRadioErrormessage();
    console.log(bitcoin_selected, ethereum_selected);
  } else {
    console.log(bitcoin_selected, ethereum_selected);
  }

  if (wallet_option_1 == false && wallet_option_2 == false) {
    displayErrorMessage();
    displaySelectErrorMessage();
    console.log(wallet_option_1, wallet_option_2);
  } else {
    console.log(wallet_option_1, wallet_option_2);
  }
  if (first_name == "") {
    displayErrorMessage();
    displayCustomerErrorMessage();
    isValid == false;
  } else {

  }
  if (last_name == "") {
    displayErrorMessage();
    displayCustomerErrorMessage();
    isValid == false;
  } else {

  }
  if (address == "") {
    displayErrorMessage();
    displayCustomerErrorMessage();
    isValid == false;
  } else {}

  if (zip_code == "") {
    displayErrorMessage();
    displayCustomerErrorMessage();
    isValid == false;

  } else {

  }
  if (email == "") {
    displayCustomerErrorMessage();
    isValid == false;
  } else {


  }
  if (confirmed_email == "") {
    displayErrorMessage();
    displayCustomerErrorMessage();
    isValid == false;
  } else {

  }
  if (email != confirmed_email) {
    displayErrorMessage();
    displayCustomerErrorMessage();
    isValid == false;

  } else {
    console.log("true");
  }
  if (phone == "") {
    displayErrorMessage();
    displayCustomerErrorMessage();
    isValid == false;
  } else {

  }

  if (billing_name == "") {
    displayBillingErrorMessage();
    console.log("bll_name");
    isValid = false;
  } else {
    document.getElementById('billing_information').innerHTML = "";

  }
  if (billing_last == "") {
    displayBillingErrorMessage();
    isValid = false;
  } else {
    document.getElementById('billing_information').innerHTML = "";
  }

  if (billing_address == "") {
    displayBillingErrorMessage();
    isValid = false;

  } else {
    document.getElementById('billing_information').innerHTML = "";

  }

  if (billing_zip == "") {
    displayBillingErrorMessage();
    isValid = false;

  } else {
    document.getElementById('billing_information').innerHTML = "";
  }

  if (billing_phone == "") {
    displayBillingErrorMessage();
    isValid = false;
  } else {
    document.getElementById('billing_information').innerHTML = "";
  }

  if (isValid == true) {
    // document.getElementById('send_form').submit();
    console.log('sent');
  }
}
let sameASABOVE = function() {
  let same_as_above = document.getElementById('same_as_above').checked;

  let bitcoin_selected = document.getElementById('BITCOIN').checked;
  let ethereum_selected = document.getElementById('ethereum').checked;
  let wallet_option_1 = document.getElementById('wallet_option_1').checked;
  let wallet_option_2 = document.getElementById('wallet_option_2').checked;
  let first_name = document.getElementById('first_name').value;
  let last_name = document.getElementById('last_name').value;
  let address = document.getElementById('address').value;
  let zip_code = document.getElementById('zip_code').value;
  let email = document.getElementById('email').value;
  let confirmed_email = document.getElementById('confirmed_email').value;
  let phone = document.getElementById('phone').value;
  let billing_name = document.getElementById('billing_name');
  let billing_last = document.getElementById('billing_last');
  let billing_address = document.getElementById('billing_address');
  let billing_zip = document.getElementById('billing_zip');
  let billing_phone = document.getElementById('billing_phone');
  if (same_as_above == true) {
    billing_name.value = first_name;
    billing_last.value = last_name;
    billing_address.value = address;
    billing_zip.value = zip_code;
    billing_phone.value = phone;

    billing_name.disabled = true;
    billing_last.disabled = true;
    billing_address.disabled = true;
    billing_zip.disabled = true;
    billing_phone.disabled = true;
  } else {
    billing_name.value = "";
    billing_last.value = "";
    billing_address.value = "";
    billing_zip.value = "";
    billing_phone.value = "";

    billing_name.disabled = false;
    billing_last.disabled = false;
    billing_address.disabled = false;
    billing_zip.disabled = false;
    billing_phone.disabled = false;
    return;
  }
}

window.onload = function() {
  document.getElementById('submit').onclick = checkBoxValidation;
  $('email').focus();
  document.getElementById('first_name').onchange = removeCustomerErrorMessage;
  document.getElementById('last_name').onchange = removeCustomerErrorMessage;
  document.getElementById('zip_code').onchange = removeCustomerErrorMessage;
  document.getElementById('email').onchange = removeCustomerErrorMessage;
  document.getElementById('confirmed_email').onchange = removeCustomerErrorMessage;
  document.getElementById('address').onchange = removeCustomerErrorMessage;
  document.getElementById('phone').onchange = removeCustomerErrorMessage;

  document.getElementById('billing_name').onchange = removeBillingErrorMessage;
  document.getElementById('billing_last').onchange = removeBillingErrorMessage;
  document.getElementById('billing_address').onchange = removeBillingErrorMessage;
  document.getElementById('billing_zip').onchange = removeBillingErrorMessage;
  document.getElementById('billing_phone').onchange = removeBillingErrorMessage;
  document.getElementById('wallet_option_1').onclick = removeCheckboxErrorMessage;
  document.getElementById('wallet_option_2').onclick = removeCheckboxErrorMessage;
  document.getElementById('BITCOIN').onclick = removeSelectErrorMessage;
  document.getElementById('ethereum').onclick = removeSelectErrorMessage;

};

let displayErrorMessage = function() {
  document.getElementById('error').innerHTML = "Please Fix the indicated problems and then resubmit your order.";
}

let removeMain_error = function() {
  document.getElementById('error').innerHTML = "";

}
let displayBillingErrorMessage = function() {
  document.getElementById('billing_information').innerHTML = "Please complete all billing information.";

}
let displayCustomerErrorMessage = function() {
  document.getElementById('customer_information').innerHTML = "Please complete all customer information.";

}
let displayRadioErrormessage = function() {
  document.getElementById('error_radio').innerHTML = "Please Select either Bitcoin or Ethereum.";

}
let displaySelectErrorMessage = function() {
  document.getElementById('error_checkbox').innerHTML = "Please Select hardware or web wallet.";

}
let removeSelectErrorMessage = function() {
  document.getElementById('error_radio').innerHTML = "";
  removeMain_error();
}
let removeCheckboxErrorMessage = function() {
  document.getElementById('error_checkbox').innerHTML = "";
  removeMain_error();
}

let removeCustomerErrorMessage = function() {
  document.getElementById('customer_information').innerHTML = "";
  removeMain_error();
}
let removeBillingErrorMessage = function() {
  document.getElementById('billing_information').innerHTML = "";
  removeMain_error();
}
var $ = function(id) {
  return document.getElementById(id);
};
