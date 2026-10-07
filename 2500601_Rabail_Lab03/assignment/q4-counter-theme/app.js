const countDisplay = document.getElementById("count");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const themeButton = document.getElementById("themeButton");

let count = 0;

function updateCount() {
    countDisplay.textContent = count;
}

increaseButton.addEventListener("click", () => {
    count++;
    updateCount();
});

decreaseButton.addEventListener("click", () => {
    if (count > 0) {
        count--;
    }

    updateCount();
});

resetButton.addEventListener("click", () => {
    count = 0;
    updateCount();
});

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀️ Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }
});