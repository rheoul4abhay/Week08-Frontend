import readline from "readline-sync";

let low = 1, high = 100, guess;

console.log("Think of a number between 1 and 100...");

while (low <= high) {
    guess = Math.floor((low + high) / 2);
    let response = readline.question(`Is your number ${guess}? (Enter 'low', 'high', or 'yes'): `);

    if (response === "yes") {
        console.log(`Your Magic Number is ${guess}!`);
        break;
    } else if (response === "low") {
        high = guess - 1;
    } else if (response === "high") {
        low = guess + 1;
    }
}
