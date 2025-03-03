let birthMonths = new Map();

//Initializing map for 12 months
for(let i = 1; i <= 12; i++){
    birthMonths.set(i, []);
}

//Generating 50 individuals with random birth months
for(let i = 1; i <= 50; i++){
    let month = Math.floor(Math.random() * 12) + 1;
    birthMonths.get(month).push(i);
}

//Print individuals with same birth months
for(let [month, individuals] of birthMonths.entries()){
    console.log(`Month ${month}: ${individuals.length} ${individuals.length > 1 ? "individuals" : "individual"}`, individuals);
}