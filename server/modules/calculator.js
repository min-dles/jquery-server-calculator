const equations = [
    { input1: 12, operator: '+', input2: 94 }
    // { input1: 10.4, operator: '-', input2: 5 },
    // { input1: 20, operator: '/', input2: 40 }
];

let solutions = [];


// const arr = [];

// const obj = { name: 'Jeff' };

// // 👇 Push object to array
// arr.push(obj);

// // [{ name: 'Jeff' } ]
// console.log(arr);



// need to add a new property to existing objects in 'equations' array 
function getSolution(array){
    let solution = 0;
    for (let object of array) {
        if(object.operator === '+'){
            solution = Number(object.input1) + Number(object.input2);
            array[array.length-1].solution = solution;
            solutions.push(solution);
        } else if (object.operator === '-'){
            solution = Number(ojbect.input1) - Number(object.input2);
            array[array.length-1].solution = solution;
            solutions.push(solution);
        }
    }    
    console.log('getSolution function:', array);
    return solution;
}


// function additionTest(array){
//     let solution = 0;
//     for (let object of array) {
//         solution = Number(object.input1) + Number(object.input2);
//         console.log(solution);
//         solutions.push(solution);
//     }

//     return solution;
// }

getSolution(equations);

module.exports = { equations, solutions }