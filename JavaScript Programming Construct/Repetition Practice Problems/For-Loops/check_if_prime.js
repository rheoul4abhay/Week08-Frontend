let num = parseInt(process.argv[2]);
let isPrime = num > 1;

for(let i = 2; i < num; i++) {
    if(num % i === 0){
        isPrime = false;
        break;
    }
}

console.log(num, isPrime ? "is a prime number" : "is not a prime number");