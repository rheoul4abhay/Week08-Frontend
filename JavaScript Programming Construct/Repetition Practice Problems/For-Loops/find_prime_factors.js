let n = parseInt(process.argv[2]);

console.log(`Prime factors of ${n}`);

//Remove all factors of 2
while(n % 2 == 0) {
    console.log(2);
    n /= 2;
}

//check for odd factors
for(let i = 3; i < n; i += 2){
    while(n % i == 0) {
        console.log(i);
        n /= i;
    }
}

//if 'n' is still a prime number greater than 2, print it

if(n > 2) console.log(n); //eg. if n = 13 i.e already prime