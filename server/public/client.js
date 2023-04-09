$(document).ready(onReady);

let activeOperator = '';

function onReady() {
    console.log('client.js is up and running 👾');
    $('#equals').on('click', additionRequest);
    getHistory();
    $('#add').on('click', chooseOperator);
    $('#subtract').on('click', chooseOperator);
    $('#multiply').on('click', chooseOperator);
    $('#divide').on('click', chooseOperator);
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
            let getHistory = response.equations;
            $('#past-calculations').empty();

            for (let line of getHistory) {
                $('#past-calculations').append(`<li>
                ${line.input1},
                ${line.operator},
                ${line.input2}
                </li>`)
            }
        }
    ).catch(
        function (error) {
            console.log('something is wrong with GET to /equations');
        }
    )
}

// this function for when '=' button is clicked.. 
//user input submitted/sent to the server for processing!!
function additionRequest(event) {
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
            console.log('Something wrong w POST request to /addition');
        }
    )
}