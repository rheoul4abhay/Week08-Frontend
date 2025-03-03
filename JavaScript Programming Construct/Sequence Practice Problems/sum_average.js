let sum = 0;
for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * 90) + 10;
    sum += num;
    console.log("Number", i + 1, ":", num);
}
console.log("Sum:", sum, "Average:", sum / 5);
