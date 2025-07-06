async function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("fromCurrency").value.toLowerCase();
  const to = document.getElementById("toCurrency").value.toLowerCase();

  if (!amount || isNaN(amount)) {
    alert("Please enter a valid amount");
    return;
  }

  const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const rate = data[from][to];
    const result = (amount * rate).toFixed(2);
    document.getElementById("result").innerText = `${amount} ${from.toUpperCase()} = ${result} ${to.toUpperCase()}`;
  } catch (error) {
    document.getElementById("result").innerText = "Error fetching exchange rate.";
    console.error("API error:", error);
  }
}
