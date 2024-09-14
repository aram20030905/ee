unction generateCombinations() {
    let results = [];


    for (let i = 0; i <= 9; i++) {
        for (let j = i + 1; j <= 9; j++) {
            for (let k = j + 1; k <= 9; k++) {
                results.push(`${i}${j}${k}`);
            }
        }
    }


    console.log(results.join(','));
}


generateCombinations();
