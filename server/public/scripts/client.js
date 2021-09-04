console.log('Javascript Ready');

$(readyNow);

function readyNow() {
    console.log('jQuery Ready');
    $('#plusButton').on('click', plusButton);
    $('#minusButton').on('click', minusButton);
    $('#timesButton').on('click', timesButton);
    $('#dividedByButton').on('click', dividedByButton);
    $('#equalsButton').on('click', submitMath);
    $('#clearButton').on('click', clearAll);
    // getTheMaths();
}

let operator; //assign operator variable to empty string...for now!

function getTheMaths() {
    // make a request to the server for the equations array
    console.log('before ajax');

    $.ajax({ //asynchronous sequence of events = steps, one at a time, waiting to complete
        method: 'GET',    // requesting w/ server ...calling the server, ends up in the get method /trains
        url: '/calculate'
    }).then(function (response) { // "let me know when you're back, then I want you to do this with the list of equations"
        // response = the listOfMaths from server

        // $('input').empty(); // fresh start empty! (so it doesn't post everything again)

        console.log('great success! Here are the equations:', response)
        const listOfMaths = response;
        $('#listOfMathOutput').empty(); //clear list so whole array doesn't re-post in for of loop
        for (const math of listOfMaths) {
            console.log(math);
            $('#listOfMathOutput').append(`
                <li>${math.firstNumber} ${math.operator} ${math.secondNumber} = ${math.product}</li>
            `)
        }
    });
    console.log('After AJAX.');
}


function clearAll() {
    if (operator === '+' || operator === '-' || operator === '*' || operator === '+' || operator === '÷') {
        console.log($(this));
        console.log(`Operator was: ${operator}`);
        operator = operator[-1];
        console.log(`Operator is now: ${operator}`);
        $('#firstNumber').val('');
        $('#secondNumber').val('');
        $('#firstNumberOutput').val('');
        $('#operatorOutput').val('');
        $('.theCalculationOutput').text('');
        $('button').css('background-color', '#FCFCFC')
        // $('#listOfMathOutput').empty(); //clear list so whole array doesn't re-post in for of loop
    }
    else { }
}

function submitMath() { //post function to utilize inputs and button
    console.log('Checking fields for numbers...')
    const mathToSend = {
        firstNumber: $('#firstNumber').val(),
        operator: operator,
        secondNumber: $('#secondNumber').val()
    };

    //conditional for not enough info alerts...
    if (mathToSend.firstNumber == '' && mathToSend.secondNumber == '') {
        alert(`I'm gonna need a LOT more info than that...`)
    }
    else if (mathToSend.firstNumber == '' || mathToSend.secondNumber == '') {
        alert(`What am I supposed to do with only one number?`);
        return;
    }
    else if (operator == undefined) {
        alert(`What would you like me to do with these numbers?`);
        return;
    }

    console.log(mathToSend);

    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: mathToSend
    }).then(handlePostSuccess).catch(postError);
}

function handlePostSuccess(res) {  //this is the res from the POST
    console.log(res); // grabbing the res.send from post
    clearAll(); //calling clear all function to clear operator and fields
    getTheMaths();
}

function postError() { //if there's an error with the input/operator/math
    // alert('Sorry, something broke.')
}



function plusButton() {
    // console.log($(this));
    // console.log(`Operator was: ${operator}`)
    operator = '+';
    // console.log('operator is now:', operator);
    $('#plusButton').css('background-color', '#c5edd0'); //plus button selected
    $('#minusButton').css('background-color', '#FCFCFC');
    $('#timesButton').css('background-color', '#FCFCFC');
    $('#dividedByButton').css('background-color', '#FCFCFC');
}

function minusButton() {
    // console.log($(this));
    // console.log(`Operator was: ${operator}`)
    operator = '-';
    // console.log('operator is now:', operator);
    $('#plusButton').css('background-color', '#FCFCFC');
    $('#minusButton').css('background-color', '#c5edd0'); //minus button selected
    $('#timesButton').css('background-color', '#FCFCFC');
    $('#dividedByButton').css('background-color', '#FCFCFC');
}

function timesButton() {
    // console.log($(this));
    // console.log(`Operator was: ${operator}`)
    operator = '*';
    // console.log('operator is now:', operator);
    $('#plusButton').css('background-color', '#FCFCFC');
    $('#minusButton').css('background-color', '#FCFCFC');
    $('#timesButton').css('background-color', '#c5edd0'); //times button selected
    $('#dividedByButton').css('background-color', '#FCFCFC');
}

function dividedByButton() {
    // console.log($(this));
    // console.log(`Operator was: ${operator}`)
    operator = '÷';
    // console.log('operator is now:', operator);
    $('#plusButton').css('background-color', '#FCFCFC');
    $('#minusButton').css('background-color', '#FCFCFC');
    $('#timesButton').css('background-color', '#FCFCFC'); // divided by button selected
    $('#dividedByButton').css('background-color', '#c5edd0');
}