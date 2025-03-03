import readline from "readline-sync";

function celsiusToFahrenheit(degC){
    return (degC * 9/5) + 32;
}

function fahrenheitToCelsius(degF){
    return (degF - 32) * 5/9;
}

let choice = parseInt(readline.question("Enter 1 for Celsius to Fahrenheit, 2 for Fahrenheit to Celsius: "));
let temp = parseFloat(readline.question("Enter temperature: "));

switch (choice){
    case 1:
        if(temp >= 0 && temp <= 100){
            console.log(`${temp}°C = ${celsiusToFahrenheit(temp)}°F`);
        } else {
            console.log("Invalid Input: Temperature must be between 0°C and 100°C.");
        }
        break;
    
    case 2:
        if(temp >= 32 && temp <= 212){
            console.log(`${temp}°F = ${fahrenheitToCelsius(temp)}°C`);
        } else {
            console.log("Invalid Input: Temperature must be between 32°F and 212°F.");
        }
        break;

    default:
        console.log("Invalid Choice!");
}