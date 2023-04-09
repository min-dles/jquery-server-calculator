const addition = [
    { input1: 12, input2: 94 },
    { input1: 10.4, input2: 5 },
    { input1: 20, input2: 40 }
];

function additionTest(array){
    let solution = 0; 
    solution = Number(array.input1) + Number(array.input2);
    console.log(solution);
    return solution;
}

module.exports = { addition, additionTest }