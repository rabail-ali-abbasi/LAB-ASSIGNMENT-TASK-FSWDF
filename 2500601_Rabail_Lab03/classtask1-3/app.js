const nameInput = document.getElementById("name");
const marksInput = document.getElementById("marks");
const calcButton = document.getElementById("calcBtn");
const result = document.getElementById("result");

function calculateGrade() {
    const studentName = nameInput.value.trim();
    const marks = Number(marksInput.value);

    result.className = "";

    if (studentName === "" || marksInput.value === "" || marks < 0 || marks > 100) {
        result.textContent = "Please enter a valid name and marks between 0 and 100.";
        result.classList.add("error");
        return;
    }

    let grade;

    if (marks >= 85) {
        grade = "A";
    } else if (marks >= 70) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }

    result.textContent = `${studentName} scored ${marks} → Grade ${grade}`;

    if (grade === "F") {
        result.classList.add("fail");
    } else {
        result.classList.add("pass");
    }
}

calcButton.addEventListener("click", calculateGrade);