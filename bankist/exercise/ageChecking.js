'use strict';

const checkDogs = (dogsJulia, dogsKate) => {
    const CorrectDogsJulia = dogsJulia.slice(1, 3);
// solution 1
    // for (const [i, age] of CorrectDogsJulia.entries()) {
    //     const dogAdult =
    //         age >= 3
    //             ? `is an adult, and is ${age} years old`
    //             : 'is still a puppy🐶';

    //     console.log(`Dog number ${i + 1} is ${dogAdult}`);
    // }
    // for (const [i, age] of dogsKate.entries()) {
    //     const dogAdult =
    //         age >= 3
    //             ? `is an adult, and is ${age} years old`
    //             : 'is still a puppy🐶';
    //     console.log(`Dog number ${i + 1} is ${dogAdult} `);
    // }
//solution 2
    const dogs = CorrectDogsJulia.concat(dogsJulia)
    dogs.forEach((age,id) => { 
        if(age >= 3){
            console.log(`Dog number ${id + 1} is an adult, and is ${age} years old`);
        } else{
            console.log(`Dog number ${id + 1} is still a puppy 🐶`);
        }
        
    });
};
checkDogs([3, 5, 2, 12, 7], [3, 5, 2, 12, 7]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
