document.addEventListener("DOMContentLoaded", function () {
    const tipForm = document.getElementById("tipCalculator");
    const bill = document.getElementById("billTotal");
    const tipPercentage = document.getElementById("tipPercentage");
    const tipPercentValue = document.getElementById("tipPercentValue");
    const tipAmount = document.getElementById("tipAmount");
    const totalWithTip = document.getElementById("totalWithTip");
    const currency = document.getElementById("currency");

    tipForm.addEventListener("input", updateTip);

    function updateTip() {
        const billValue = parseFloat(bill.value);
        const tipPercent = parseFloat(tipPercentage.value);
        const currencySymbol = getCurrencySymbol(currency.value);

        tipPercentValue.value = `${tipPercent}%`;

        if (isNaN(billValue) || billValue <= 0) {
            tipAmount.value = "";
            totalWithTip.value = "";
        } else {
            const calculatedTip = (billValue * tipPercent) / 100;
            const total = billValue + calculatedTip;

            tipAmount.value = `${currencySymbol}${calculatedTip.toFixed(2)}`;
            totalWithTip.value = `${currencySymbol}${total.toFixed(2)}`;
        }
    }

    function getCurrencySymbol(currency) {
        switch (currency) {
            case "USD": return "$";
            case "GBP": return "£";
            case "EUR": return "€";
            case "INR": return "₹";
            default: return "$";
        }
    }
});
