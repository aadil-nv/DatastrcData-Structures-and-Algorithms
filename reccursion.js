function fib(n, a = 0, b = 1) {
    if (a <= 100) {
        console.log(a);
        fib(n, b, a + b);
    }
}

fib(100);


function factorial(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
}

// Example usage:
const number = 5;
const result = factorial(number);
console.log(`Factorial of ${number} is ${result}`); // Output: "Factorial of 5 is 120"
