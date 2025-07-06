async function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;
 
  if (!amount || isNaN(amount)) {
    alert("Please enter a valid amount");
    return;
  }

  const apiKey = "fca_live_MVpbkxpSOLlz8nsWlXDkX2YTiiBoAJS1GT4Jz6XV";
  const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&base_currency=${from}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const rate = data.data[to];
    const result = (amount * rate).toFixed(2);
    document.getElementById("result").innerText = `${amount} ${from} = ${result} ${to}`;
  } catch (error) {
    document.getElementById("result").innerText = "Error fetching exchange rate.";
    console.error("API error:", error);
  }
}
