$(document).ready(onReady);

function onReady() {
    console.log('client.js is up and running 👾');
    $('#equals').on('click', additionRequest);
    getHistory();
}

function getHistory() {
    $.ajax({
        method: 'GET',
        url: '/addition',
    }).then(
        function (response) {
            console.log(response);
            let addHistory = response;
            $('#past-calculations').empty();

            for (let line of addHistory) {
                $('#past-calculations').append(`<li>
                ${line.input1}, 
                ${line.input2}
                </li>`)
            }
        }
    ).catch(
        function (error) {
            console.log('something is wrong with GET to /addition');
        }
    )
}

function additionRequest(event) {
    console.log('button clicked');
    event.preventDefault();
    let newEquation = {
        input1: $('#input1').val(),
        input2: $('#input2').val()
    };

    $('#input1').val('');
    $('#input2').val('');

    $.ajax({
        method: 'POST',
        data: newEquation,
        url: '/addition',
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