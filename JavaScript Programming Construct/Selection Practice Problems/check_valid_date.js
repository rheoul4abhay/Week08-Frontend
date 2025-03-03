let day = parseInt(process.argv[2]);
let month = parseInt(process.argv[3]);

if (month < 1 || month > 12 || day < 1 || day > 31) {
    console.log("Invalid Date");
} else if ((month === 3 && day >= 20) || (month === 6 && day <= 20) || (month > 3 && month < 6)) {
    console.log("Valid Date");
} else {
    console.log("Invalid Date");
}
