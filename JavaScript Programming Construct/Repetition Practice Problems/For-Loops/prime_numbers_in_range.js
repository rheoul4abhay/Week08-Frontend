let low = parseInt(process.argv[2]);
let high = parseInt(process.argv[3]);

console.log(`Prime numbers between ${low} and ${high}:`);

for(let num = low; num <= high; num++){
    let isPrime = num > 1;
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime) console.log(num);
}