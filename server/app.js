const express = require ("express");
const cors = require ("cors");
const data = require('./data');

const app = express();
let results = data; 

app.use(cors());

app.get('/', (req, res) => res.send('Welcome to the Google search engine API (yes, but not really)'));

app.get('/results', (req, res) => {
    res.json({
        results: results.map(r => r["result"])
    })
})

app.get("/results/:id", (req, res) => {
    
    const id = req.params.id;

    const filteredData = data.filter(f => f["id"] == id);

    if (filteredData.length == 1) {
        res.json({
            result: filteredData[0]
        }) 

    } else {
        res.status(404).json({
            error: "Unable to find the result you are looking for"
    })
    }
})

//retrieve result per id



module.exports = app;
