const express = require('express');

const app = express();
const PORT = 5000;

app.use(express.static('server/public'));

const calculationsArray = [ //dummy array for now while working...
    {firstNumber: 2, operator: '+', secondNumber: 2}, 
    {firstNumber: 3, operator: '-', secondNumber: 42},
    {firstNumber: 1, operator: '*', secondNumber: 14},
    {firstNumber: 7, operator: '÷', secondNumber: 1},
];

app.post('/calculate', (req, res) => {
    const equation = req.body;
    console.log(`in app.post (/calculate) grabbing equation: `);
    calculationsArray.push(equation);
    console.log(calculationsArray);
    res.send(calculationsArray);
})


app.get('/calculate', (req, res) => {
    console.log('As requested, here come the equations...');
    const thisEquation = req.body;
    calculationsArray.push(thisEquation);
    console.log(thisEquation);
    res.send(calculationsArray);
});







//bottom of page
app.listen(PORT, () => {
    console.log(`now quietly listening on port ${PORT}`);
});