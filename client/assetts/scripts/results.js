async function loadResults(){

    const url = "http://localhost:3000/results";

    try {
        const res = await fetch(url);
        const data = await res.json();

        loadResults(data);

    } catch (err) {
        alert("There was a problem communicating with the server.")
    }

} 

//trying to content of html file with js, struggling
function loadResults(data){
    const results = document.getElementById("results");

    const result = document.createElement("h2");
    result.textContent = "Results";

    results.appendChild(result);

    data["result"].forEach (s => {

        const item = document.createElement("p");
        item.textContent = s;
        results.appendChild(item);

    })


}

loadResults();
