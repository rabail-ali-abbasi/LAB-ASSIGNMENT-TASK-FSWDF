const temperatureInput = document.getElementById("temperature");
const fahrenheitButton = document.getElementById("toFahrenheit");
const celsiusButton = document.getElementById("toCelsius");
const result = document.getElementById("result");

function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

const fahrenheitToCelsius = (f) => {
    return (f - 32) * 5 / 9;
};

function showConversion(value, unit) {
    if (temperatureInput.value.trim() === "" || Number.isNaN(value)) {
        result.textContent = "Please enter a valid temperature.";
        return;
    }

    result.textContent = `Result: ${value.toFixed(1)}°${unit}`;
}

fahrenheitButton.addEventListener("click", () => {
    const celsius = Number(temperatureInput.value);
    const fahrenheit = celsiusToFahrenheit(celsius);
    showConversion(fahrenheit, "F");
});

celsiusButton.addEventListener("click", () => {
    const fahrenheit = Number(temperatureInput.value);
    const celsius = fahrenheitToCelsius(fahrenheit);
    showConversion(celsius, "C");
});