document.getElementById('lucky-button').addEventListener('click', goToRandomPage);

function goToRandomPage () {

const url = "http://localhost:3000/url";
let data =
    fetch(url)
        .then(res => res.json())
        .then(data => {
            let randomSites = data[Math.floor(Math.random() * data.length)];
            window.location.replace(randomSites);
        })
        .catch(err => {
            console.log(err)
        })
}

