let heads = 0, tails = 0;

while (heads < 11 && tails < 11) {
    let flip = Math.floor(Math.random() * 2); // 0 = Heads, 1 = Tails
    if (flip === 0) {
        heads++;
    } else {
        tails++;
    }
}

console.log(`Final Score - Heads: ${heads}, Tails: ${tails}`);
console.log(heads === 11 ? "Heads Wins!" : "Tails Wins!");
