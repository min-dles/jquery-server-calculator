const equations = [
    { input1: 12, operator: '+', input2: 94 },
    { input1: 10.4, operator: '-', input2: 5 },
    { input1: 20, operator: '/', input2: 40 }
];

let solutions = [];

function additionTest(array){
    let solution = 0;
    for (let object of array) {
        solution = Number(object.input1) + Number(object.input2);
        console.log(solution);
        solutions.push(solution);
    }

    return solution;
}

additionTest(equations);

module.exports = { equations, solutions }