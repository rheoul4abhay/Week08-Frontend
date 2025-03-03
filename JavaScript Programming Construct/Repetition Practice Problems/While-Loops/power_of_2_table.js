let n = parseInt(process.argv[2]);
let i = 0, value = 1;

while (i <= n && value <= 256) {
    console.log(`2^${i} = ${value}`);
    value *= 2;
    i++;
}
