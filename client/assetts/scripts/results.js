//trying to content of html file with js, struggling
const results = document.getElementById('results');
const resultsContent = document.getElementById('results-content');

function  displayResults(data) {
    resultsContent.textContent = data["results"]
    JSON.stringify(jsonobj,null,'\t')
}


function loadResults(){
    
    const url = 'http://localhost:3000/results'

    fetch(url)
        .then(res => res.json())
        .then(data => displayResults(data))
        .then(console.log)
        .catch(err => {
            console.log(err)
        })
    
    }

loadResults();

console.log('Hello there')
