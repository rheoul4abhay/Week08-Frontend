import readline from "readline-sync";

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to find the palindrome of a number
function getPalindrome(num) {
    let reversed = 0;
    while (num > 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return reversed;
}

// Take user input
let num = parseInt(readline.question("Enter a number: "));

// Check if number is prime
if (isNaN(num) || num < 0) {
    console.log("Please enter a valid positive number.");
} else {
    if (isPrime(num)) {
        console.log(`${num} is a Prime Number.`);
        let palindrome = getPalindrome(num);
        console.log(`Palindrome of ${num} is ${palindrome}.`);

        if (isPrime(palindrome)) {
            console.log(`Palindrome ${palindrome} is also Prime.`);
        } else {
            console.log(`Palindrome ${palindrome} is NOT Prime.`);
        }
    } else {
        console.log(`${num} is NOT a Prime Number.`);
    }
}
