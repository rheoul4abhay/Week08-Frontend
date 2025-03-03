let choice = parseInt(process.argv[2]);
let value = parseFloat(process.argv[3]);

switch (choice) {
    case 1: console.log(`${value} Feet to Inch:`, value * 12); break;
    case 2: console.log(`${value} Feet to Meter:`, value * 0.3048); break;
    case 3: console.log(`${value} Inch to Feet:`, value / 12); break;
    case 4: console.log(`${value} Meter to Feet:`, value / 0.3048); break;
    default: console.log("Invalid Input");
}
