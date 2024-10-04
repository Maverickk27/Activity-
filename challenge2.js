let score = prompt("Enter the student's score:"); // Prompt the user to enter a student's score
score = Number(score); // Convert the input to a number

// Function to determine the grade based on the score
function getGrade(score) {
    if (score >= 80 && score <= 100) {
        return "A"; // Return "A" for scores 80-100
    } else if (score >= 70 && score <= 79) {
        return "B"; // Return "B" for scores 70-79
    } else if (score >= 60 && score <= 69) {
        return "C"; // Return "C" for scores 60-69
    } else if (score >= 50 && score <= 59) {
        return "D"; // Return "D" for scores 50-59
    } else if (score >= 0 && score <= 49) {
        return "F"; // Return "F" for scores 0-49
    } else {
        return "Invalid score"; // Return an error message for invalid scores
    }
}

let grade = getGrade(score); // Call the function to get the grade
console.log("The grade is: " + grade); // Log the determined grade
