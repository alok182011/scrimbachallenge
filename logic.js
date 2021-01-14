function myFunction() {
  var amount = document.getElementById("amount").value;
  var from = document.getElementById("currency1").value;
  var to = document.getElementById("currency2").value;
  var answer;

  if (from === "USD") {
    if (to === "INR") {
      var final_amount = amount * 73.028;
      answer = final_amount;
    } else if (to === "EUR") {
      var final_amount = amount * 0.823;
      answer = final_amount;
    } else if (to === "CNY") {
      var final_amount = amount * 6.464;
      answer = final_amount;
    } else if (to === "USD") {
      var final_amount = amount * 1;
      answer = final_amount;
    }
  } else if (from === "EUR") {
    if (to === "INR") {
      var final_amount = amount * 88.78;
      answer = final_amount;
    } else if (to === "USD") {
      var final_amount = amount * 1.215;
      answer = final_amount;
    } else if (to === "CNY") {
      var final_amount = amount * 7.855;
      answer = final_amount;
    } else if (to === "EUR") {
      var final_amount = amount * 1;
      answer = final_amount;
    }
  } else if (from === "INR") {
    if (to === "EUR") {
      var final_amount = amount * 0.011;
      answer = final_amount;
    } else if (to === "USD") {
      var final_amount = amount * 0.014;
      answer = final_amount;
    } else if (to === "CNY") {
      var final_amount = amount * 0.088;
      answer = final_amount;
    } else if (to === "INR") {
      var final_amount = amount * 1;
      answer = final_amount;
    }
  } else if (from === "CNY") {
    if (to === "EUR") {
      var final_amount = amount * 0.127;
      answer = final_amount;
    } else if (to === "USD") {
      var final_amount = amount * 0.155;
      answer = final_amount;
    } else if (to === "INR") {
      var final_amount = amount * 11.302;
      answer = final_amount;
    } else if (to === "CNY") {
      var final_amount = amount * 1;
      answer = final_amount;
    }
  }

  document.getElementById("final").innerHTML =
    "Your " +
    amount +
    " " +
    from +
    " will currently buy you " +
    answer +
    " " +
    to;
}
