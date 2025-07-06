const currencyCodes = ["USD", "INR", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "SGD"];

window.onload = () => {
  const from = document.getElementById("fromCurrency");
  const to = document.getElementById("toCurrency");

  currencyCodes.forEach(code => {
    const option1 = document.createElement("option");
    option1.value = code;
    option1.text = code;
    from.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = code;
    option2.text = code;
    to.appendChild(option2);
  });

  from.value = "USD";
  to.value = "INR";
};
