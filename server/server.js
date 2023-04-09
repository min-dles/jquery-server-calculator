const calculator = require('./modules/calculator.js');


const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));


// GET: you'll see console in terminal when you visit these routes
app.get('/equations', (req,res) => {
    res.send(calculator);
    console.log('GET for: /equations', calculator.equations);
    console.log('GET for calculator solutions:', calculator.solutions);
})

// POST:
app.post('/equations', (req,res) => {
    console.log('This is POST for /equations');
    let newData = req.body;
    calculator.equations.push(newData);
    res.send('Thanks for the equation input!');
})

app.listen(5000, function() {
    console.log('server is up & running on port 5000');
})