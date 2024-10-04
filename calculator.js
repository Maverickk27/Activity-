function calculator(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2; // Adds num1 and num2
        case "-":
            return num1 - num2; // Subtracts num2 from num1
        case "*":
            return num1 * num2; // Multiplies num1 and num2
        case "/":
            if (num2 === 0) {
                return "Error: Division by zero is not allowed."; // Handles division by zero
            }
            return num1 / num2; // Divides num1 by num2
        default:
            return "Invalid operator"; // Returns error for unsupported operators
    }
}

// Example usage of the calculator function
console.log(calculator(5, 2, '+')); // Returns 7 (5 + 2)

console.log(calculator(5, 2, '-')); // Returns 3 (5 - 2)

console.log(calculator(5, 2, '*')); // Returns 10 (5 * 2)

console.log(calculator(5, 2, '/')); // Returns 2.5 (5 / 2)

console.log(calculator(5, 2, '&')); // Returns "Invalid operator" message


