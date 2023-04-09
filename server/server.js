const addition = require('./modules/calculator.js');


const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));


// GET: you'll see console in terminal when you visit these routes
app.get('/addition', (req,res) => {
    res.send(addition.addition);
    console.log('GET for: /addition', addition.addition);
})

// POST:
app.post('/addition', (req,res) => {
    console.log('This is POST for /addition');
    let newAdd = req.body;
    addition.addition.push(newAdd);
    res.send('Thanks for the addition input!');
})

app.listen(5000, function() {
    console.log('server is up & running on port 5000');
})