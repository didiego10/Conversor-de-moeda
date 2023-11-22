const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const CurrencyValueToConvert = document.querySelector(".currency-value-to-convert")//valor em real
    const CurrencyValueConverted = document.querySelector(".currency-value")//outras moedas

    const dolartoday = 5.2
    const euroToday = 6.2
    const libratoday =  6.11
    const bitcointoday =  179.7


    if (currencySelect.value == "dolar") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * dolartoday)
    }

    if (currencySelect.value == "euro") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * euroToday)
    }

    if (currencySelect.value == "libra") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("gpb-UK", {
            style: "currency",
            currency: "GPB"
        }).format(inputCurrencyValue * libratoday)
    }

    if (currencySelect.value == "bitcoin") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("btc", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * bitcointoday)
    }

    CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}
function changeCurrency(){
    const currencyName =document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dolar americano"
        currencyImage.src = "assets/dollar.png"
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "assets/euro.png"
    }

    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "assets/libra.png"
    }

    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "assets/bitcoin.png"
    }
    convertValues()
}

currencySelect.addEventListener("change",changeCurrency)
convertButton.addEventListener("click", convertValues)