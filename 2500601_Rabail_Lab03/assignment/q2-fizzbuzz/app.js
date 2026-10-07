const limitInput = document.getElementById("limit");
const generateButton = document.getElementById("generate");
const fizzList = document.getElementById("fizzList");

function generateFizzBuzz() {
    const limit = Number(limitInput.value);

    fizzList.innerHTML = "";

    if (limit < 1 || Number.isNaN(limit)) {
        fizzList.innerHTML = "<li>Enter a valid number.</li>";
        return;
    }

    for (let number = 1; number <= limit; number++) {
        const item = document.createElement("li");

        if (number % 3 === 0 && number % 5 === 0) {
            item.textContent = "FizzBuzz";
        } else if (number % 3 === 0) {
            item.textContent = "Fizz";
        } else if (number % 5 === 0) {
            item.textContent = "Buzz";
        } else {
            item.textContent = number;
        }

        fizzList.appendChild(item);
    }
}

generateButton.addEventListener("click", generateFizzBuzz);

generateFizzBuzz();