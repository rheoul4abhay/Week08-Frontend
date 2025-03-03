function findTriplets(arr) {
    let n = arr.length, found = false;

    for(let i = 0;i < n-2; i++) {
        for(let j = i + 1; j < n-1; j++){
            for(let k = j + 1; k < n; k++){
                if(arr[i] + arr[j] + arr[k] === 0) {
                    console.log(`Triplet: ${arr[i]}, ${arr[j]}, ${arr[k]}`);
                    found = true;
                }
            }
        }
    }

    if(!found) console.log("No triplets found");
}

let arr = [-3, 1, 2, -1, 4, 0, -2, -1];
findTriplets(arr);