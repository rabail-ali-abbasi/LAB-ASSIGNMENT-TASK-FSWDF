const studentNameInput = document.getElementById("studentName");
const rollNoInput = document.getElementById("rollNo");
const marksInput = document.getElementById("marks");
const addStudentButton = document.getElementById("addStudent");
const sortButton = document.getElementById("sortButton");
const studentTable = document.getElementById("studentTable");
const totalStudents = document.getElementById("totalStudents");
const classAverage = document.getElementById("classAverage");
const topScorer = document.getElementById("topScorer");
const message = document.getElementById("message");
const emptyState = document.getElementById("emptyState");

const students = [];

function getGrade(marks) {
    if (marks >= 85) {
        return "A";
    } else if (marks >= 70) {
        return "B";
    } else if (marks >= 50) {
        return "C";
    } else {
        return "F";
    }
}

function addStudent() {
    const name = studentNameInput.value.trim();
    const rollNo = rollNoInput.value.trim();
    const marks = Number(marksInput.value);

    if (name === "" || rollNo === "" || marksInput.value === "") {
        showMessage("Please fill in all fields.", "error");
        return;
    }

    if (marks < 0 || marks > 100) {
        showMessage("Marks must be between 0 and 100.", "error");
        return;
    }

    const existingRollNo = students.some((student) => {
        return student.rollNo.toLowerCase() === rollNo.toLowerCase();
    });

    if (existingRollNo) {
        showMessage("This roll number already exists.", "error");
        return;
    }

    const student = {
        name: name,
        rollNo: rollNo,
        marks: marks
    };

    students.push(student);

    clearInputs();
    showMessage("Student record added successfully.", "success");
    displayStudents();
}

function displayStudents() {
    studentTable.innerHTML = "";

    if (students.length === 0) {
        emptyState.classList.remove("hidden");
        updateStatistics();
        return;
    }

    emptyState.classList.add("hidden");

    students.forEach((student, index) => {
        const row = document.createElement("tr");
        const grade = getGrade(student.marks);
        const status = grade === "F" ? "Failed" : "Passed";

        row.innerHTML = `
            <td>
                <span class="student-name">${student.name}</span>
            </td>

            <td>
                <span class="roll-number">${student.rollNo}</span>
            </td>

            <td>
                <span class="marks">${student.marks}/100</span>
            </td>

            <td>
                <span class="grade">${grade}</span>
            </td>

            <td>
                <span class="status ${status === "Passed" ? "passed" : "failed"}">
                    ${status}
                </span>
            </td>

            <td>
                <button class="delete-button" data-index="${index}">
                    Delete
                </button>
            </td>
        `;

        studentTable.appendChild(row);
    });

    updateStatistics();
}

function updateStatistics() {
    totalStudents.textContent = students.length;

    if (students.length === 0) {
        classAverage.textContent = "0.0";
        topScorer.textContent = "---";
        return;
    }

    const totalMarks = students.reduce((total, student) => {
        return total + student.marks;
    }, 0);

    const average = totalMarks / students.length;

    const highestStudent = students.reduce((topStudent, student) => {
        return student.marks > topStudent.marks ? student : topStudent;
    });

    classAverage.textContent = average.toFixed(1);
    topScorer.textContent = highestStudent.name;
}

function clearInputs() {
    studentNameInput.value = "";
    rollNoInput.value = "";
    marksInput.value = "";
    studentNameInput.focus();
}

function showMessage(text, type) {
    message.textContent = text;
    message.className = type;

    setTimeout(() => {
        message.textContent = "";
        message.className = "";
    }, 2500);
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
    showMessage("Student record deleted.", "success");
}

addStudentButton.addEventListener("click", addStudent);

sortButton.addEventListener("click", () => {
    students.sort((a, b) => b.marks - a.marks);
    displayStudents();
});

studentTable.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-button")) {
        const index = Number(event.target.dataset.index);
        deleteStudent(index);
    }
});

displayStudents();