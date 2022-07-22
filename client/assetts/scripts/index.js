function goToRandomPage () {

const url = "http://localhost:3000/randomUrl";

    fetch(url)
        .then(res => res.json())
        .then(data => {
            window.open(data['url'], '_self');
        })
        .catch(err => {
            console.log(err)
        })
}

document.getElementById('lucky-button').addEventListener('click', goToRandomPage);
