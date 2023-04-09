// const equation = [];

// need to add a new property to existing objects in 'equations' array 
// Don't need 'solutions' array? Can just access new 'solution' property
// in the object
function getSolution(object){
    let solution = 0;
    if(object.operator === '+'){
        solution = Number(object.input1) + Number(object.input2);
    } else if (object.operator === '-'){
        solution = Number(object.input1) - Number(object.input2);
    } else if (object.operator === '*'){
        solution = Number(object.input1) * Number(object.input2);
    } else if (object.operator === '/'){
        solution = Number(object.input1) / Number(object.input2);
    } else if (object.input1 === null || object.input2 === null){
        object = {
            input1: 0,
            operator: '+',
            input2: 0,
            solution: 0
        }
    }
    else {
        object = 'there is no input yet'
        console.log('This is your current object:', object);
    }
    object.solution = solution;
    // equation.push(object);
    return object;
}    

// getSolution(equation);

// module.exports = { equations, solutions }
module.exports = getSolution;