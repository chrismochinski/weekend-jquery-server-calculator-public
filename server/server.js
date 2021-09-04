const express = require('express');

const app = express();
const PORT = 5000;

// app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({ extended: true }));

app.use(express.static('server/public'));

const calculationsArray = [ //dummy array for now while working...
    // {firstNumber: 2, operator: '+', secondNumber: 2, product: 4}, 
    // {firstNumber: 3, operator: '-', secondNumber: 42},
    // {firstNumber: 1, operator: '*', secondNumber: 14},
    // {firstNumber: 7, operator: '÷', secondNumber: 1},
];

app.post('/calculate', (req, res) => {
    const equation = req.body;
    console.log(`in app.post (/calculate) grabbing equation: `);
    crunchNumbers(equation);
    calculationsArray.push(equation);
    console.log(calculationsArray);
    res.send(`We got your equation!`);  // this is NOT NECESSARY - just seding love note back in handlePOstSuccess on client side
})

function crunchNumbers(equation){ //doing math...
    if(equation.operator === '+'){
        equation.product = parseInt(equation.firstNumber) + parseInt(equation.secondNumber);
    }
    else if(equation.operator === '-'){
        equation.product = parseInt(equation.firstNumber) - parseInt(equation.secondNumber);
    }
    else if(equation.operator === '*'){
        equation.product = parseInt(equation.firstNumber) * parseInt(equation.secondNumber);
    }
    else if(equation.operator === '÷'){
        equation.product = (parseInt(equation.firstNumber) / parseInt(equation.secondNumber)).toFixed(4);
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