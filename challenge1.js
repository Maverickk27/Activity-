let number = prompt("Enter a number"); // Prompt the user to enter a number
number = Number(number); // Convert the input to a number

if (number % 5 === 0) { // Check if the number is a multiple of 5
    console.log(number + " is a multiple of 5."); // Log if it's a multiple of 5
} else {
    console.log(number + " is not a multiple of 5."); // Log if it's not a multiple of 5
}
