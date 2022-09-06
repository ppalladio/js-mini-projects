'use strict';

// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = (ages) => {
    const humanAgeAdult = ages
        .map((age) => {
            return age <= 2 ? age * 2 : age * 4 + 16;
        })
        .filter((age) => age >= 18);
    console.log(humanAgeAdult);
    const avgAge = humanAgeAdult.reduce(
        (acc, age, i, arr) => acc + age / arr.length,
        0,
    );
    return avgAge;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]))
