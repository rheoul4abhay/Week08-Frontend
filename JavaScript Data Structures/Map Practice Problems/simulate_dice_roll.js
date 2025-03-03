let diceRolls = new Map();
let maxRolls = 10;

//Initializing map with keys of 1 to 6
for(let i = 1; i <= 6; i++){
    diceRolls.set(i, 0);
}

//Keep rolling until a number reaches 10 times (value = 10)
let found = false;
while(!found){
    let roll = Math.floor(Math.random() * 6) + 1;
    diceRolls.set(roll, diceRolls.get(roll) + 1);

    if(diceRolls.get(roll) === maxRolls){
        found = true;
    }
}

//Find max and min occurences 
let max = -Infinity, min = Infinity;
let maxNum, minNum;

//To iterate through a map

for(let [num, count] of diceRolls.entries()){
    if(count > max) {
        max = count;
        maxNum = num;
    }
    if(count < min){
        min = count;
        minNum = num;
    }
}

console.log("Dice Roll Frequencies:", diceRolls);
console.log(`Most Frequent: ${maxNum} (appeared ${max} times)`);
console.log(`Least Frequent: ${minNum} (appeared ${min} times)`);
