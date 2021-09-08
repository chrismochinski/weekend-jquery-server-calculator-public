const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static('server/public'));

let calculationsArray = [];

app.delete('/calculate', (req, res) => {
    console.log('clearHistoryButton clicked, on server side now');
    calculationsArray.length = 0;
    res.send('okay')
});

app.post('/calculate', (req, res) => {
    const equation = req.body;
    console.log(`in app.post (/calculate) grabbing equation: `);
    crunchNumbers(equation);
    calculationsArray.push(equation);
    console.log(calculationsArray);
    res.send(`We got your equation!`);  // note to self: this is NOT NECESSARY - just seding love note back in handlePOstSuccess on client side
});

function crunchNumbers(equation){ //doing math...
    if(equation.operator === '+'){ //if operator is plusButton, we add
        equation.product = parseInt(equation.firstNumber) + parseInt(equation.secondNumber);
    }
    else if(equation.operator === '-'){ //if operator is minus, we subtract
        equation.product = parseInt(equation.firstNumber) - parseInt(equation.secondNumber);
    }
    else if(equation.operator === 'x'){ //if operator is multiply, we multiply
        equation.product = parseInt(equation.firstNumber) * parseInt(equation.secondNumber);
    }
    else if(equation.operator === '/'){ //if operator is divide, we divide 
        equation.product = parseInt(equation.firstNumber) / parseInt(equation.secondNumber);
    };
};


app.get('/calculate', (req, res) => {
    console.log('As requested, here come the equations...');
    // const equationToAdd = req.body;
    // calculationsArray.push(equationToAdd);
    // console.log(equationToAdd);
    res.send(calculationsArray); //send the array to the client to do stuff with it (in thi case - see getTheMaths - function(response))
});




//bottom of page
app.listen(PORT, () => {
    console.log(`now quietly listening on port ${PORT}`);
});