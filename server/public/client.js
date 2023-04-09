$(document).ready(onReady);

let activeOperator = '';

function onReady() {
    console.log('client.js is up and running 👾');
    $('#clear-input').on('click', clearInput);
    $('#add').on('click', chooseOperator);
    $('#subtract').on('click', chooseOperator);
    $('#multiply').on('click', chooseOperator);
    $('#divide').on('click', chooseOperator);
    $('#equals').on('click', calculate);
    getHistory();
}

function clearInput(){
    $('#input1').val('');
    $('#input2').val('');
}

// function to identify which operator is being chosen for a 
// given equation that will be submitted to the server
function chooseOperator(event) {
    console.log(event.target.id);
    activeOperator = event.target.id;
    if (activeOperator === 'add') {
        activeOperator = '+';
    } else if (activeOperator === 'subtract') {
        activeOperator = '-';
    } else if (activeOperator === 'multiply') {
        activeOperator = '*';
    } else if (activeOperator === 'divide') {
        activeOperator = '/';
    } else {
        activeOperator = 'error with if/else statement in chooseOperator';
    }
    console.log(activeOperator);
    return activeOperator;
}

// this function to get call from server for updated data 
// and update DOM with the 1. ANSWER, and 2. CALCULATOR HISTORY 
function getHistory() {
    $.ajax({
        method: 'GET',
        url: '/equations',
    }).then(
        function (response) {
            console.log(response);
            let equationsArray = response;
            $('#past-calculations').empty();
            $('#solution').empty();

            for (let equation of equationsArray) {
                $('#past-calculations').append(`<li>
                ${equation.input1} ${equation.operator}
                ${equation.input2} = ${equation.solution}
                </li>`)
            };
            $('#solution').append(`<span>
                ${equationsArray[equationsArray.length-1].solution}
                </span>`);
        }
    ).catch(
        function (error) {
            console.log('something is wrong with GET to /equations', error);
        }
    )
}

// this function for when '=' button is clicked.. 
//user input submitted/sent to the server for processing!!
function calculate(event) {
    console.log('button clicked');
    event.preventDefault();
    let newEquation = {
        input1: $('#input1').val(),
        operator: activeOperator,
        input2: $('#input2').val()
    };

    $('#input1').val('');
    $('#input2').val('');

    $.ajax({
        method: 'POST',
        data: newEquation,
        url: '/equations',
    }).then(
        function(response) {
            console.log('POST /addition .then response:', response)
            getHistory()
        }
    ).catch(
        function(error) {
            console.log('Something wrong w POST request to /equations', error);
        }
    )
}