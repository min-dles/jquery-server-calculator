const getSolution = require('./modules/calculator.js');
const equations = [];


const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));


// GET: you'll see console in terminal when you visit these routes
app.get('/equations', (req,res) => {
    res.send(equations);
    console.log('GET for: /equations', equations);
})

// POST:
app.post('/equations', (req,res) => {
    console.log('This is POST for /equations');
    let newEquation = req.body;
    let solution = getSolution(newEquation);
    equations.push(solution);
    console.log(solution);
    res.send('Thanks for the equation input!');
})

app.listen(5000, function() {
    console.log('server is up & running on port 5000');
})