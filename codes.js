const currencyMap = {
  USD: "us",
  INR: "in",
  EUR: "eu",
  GBP: "gb",
  JPY: "jp",
  AUD: "au",
  CAD: "ca",
  CHF: "ch",
  CNY: "cn",
  SGD: "sg"
};

window.onload = () => {
  const from = document.getElementById("fromCurrency");
  const to = document.getElementById("toCurrency");

  Object.keys(currencyMap).forEach(code => {
    const countryCode = currencyMap[code];

    const option1 = document.createElement("option");
    option1.value = code;
    option1.innerText = code;
    option1.setAttribute("data-flag", countryCode);
    from.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = code;
    option2.innerText = code;
    option2.setAttribute("data-flag", countryCode);
    to.appendChild(option2);
  });

  from.value = "USD";
  to.value = "INR";

  updateFlag(from);
  updateFlag(to);

  from.addEventListener("change", function () {
    updateFlag(this);
  });

  to.addEventListener("change", function () {
    updateFlag(this);
  });
};

function updateFlag(selectElement) {
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const countryCode = selectedOption.getAttribute("data-flag");
  if (countryCode) {
    selectElement.style.backgroundImage = `url('https://flagcdn.com/24x18/${countryCode}.png')`;
  }
}
