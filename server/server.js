const calculator = require('./modules/calculator.js');
const equation = [];


const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));


// GET: you'll see console in terminal when you visit these routes
app.get('/equations', (req,res) => {
    console.log({ equation })
    res.send(equation);
    console.log('GET for: /equations', equation);
})

// POST:
app.post('/equations', (req,res) => {
    console.log('This is POST for /equations');
    let newData = req.body;
    let solution = calculator(newData);
    equation.push(solution);
    console.log(solution);
    res.send('Thanks for the equation input!');
})

app.listen(5000, function() {
    console.log('server is up & running on port 5000');
})