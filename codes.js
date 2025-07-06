const currencyCodes = ["USD", "INR", "EUR", "GBP", "JPY", "AUD", "CAD"];
 
window.onload = () => {
  const from = document.getElementById("fromCurrency");
  const to = document.getElementById("toCurrency");
  currencyCodes.forEach(code => {
    from.innerHTML += `<option value="${code}">${code}</option>`;
    to.innerHTML += `<option value="${code}">${code}</option>`;
  });
  from.value = "USD";
  to.value = "INR";
};
