for (let i = 1; i <= 100; i++) { // Loop through numbers from 1 to 100
    // Check if the number is divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz"); // Print "FizzBuzz" for numbers divisible by both
    }
    // Check if the number is divisible by 3
    else if (i % 3 === 0) {
        console.log("Fizz"); // Print "Fizz" for numbers divisible by 3
    }
    // Check if the number is divisible by 5
    else if (i % 5 === 0) {
        console.log("Buzz"); // Print "Buzz" for numbers divisible by 5
    }
    // If none of the above conditions are true, print the number
    else {
        console.log(i); // Print the number itself
    }
}
