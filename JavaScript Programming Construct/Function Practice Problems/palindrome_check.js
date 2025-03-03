function arePalindromes(num1, num2) {
    let original = num1, reversed = 0;

    while(num1 > 0){
        reversed = reversed * 10 + (num1 % 10);
        num1 = Math.floor(num1/10);
    }

    return reversed ===  num2;
}

let num1 = parseInt(process.argv[2]);
let num2 = parseInt(process.argv[3]);

if (isNaN(num1) || isNaN(num2)) {
    console.log("Please provide valid numbers as input.");
} else {
    console.log(`Numbers are palindrome ? ${arePalindromes(num1, num2) ? "Yes" : "No"} `);
}
