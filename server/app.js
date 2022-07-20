const express = require ("express");
const cors = require ("cors");
const data = require('./data');

const app = express();
let results = data; 

app.use(cors());

app.get('/', (req, res) => res.send('Welcome to the Google search engine API (yes, but not really)'));

app.get('/results', (req, res) => {
    
    res.json(
        results)
    })

app.get('/results/what', (req, res) => {
    res.json(
        results.slice(0, 4)
    )
})
app.get('/results/why', (req, res) => {
    res.json(
        results.slice(4, 8)
    )
})
app.get('/results/who', (req, res) => {
    res.json(
        results.slice(8, 13)
    )
})
app.get('/results/can', (req, res) => {
    res.json(
        results.slice(13, 19)
    )
})

// app.get('/results/' + value, (req, res) => {
//     res.json[value]
// })

module.exports = app;
