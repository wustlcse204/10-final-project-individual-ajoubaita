const Link="https://api.kanye.rest/"
document.addEventListener("DOMContentLoaded", function(event) {
    loadAPI();
    document.getElementById("submit").addEventListener("click", showQuote);
})

function loadAPI() {
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var saying = JSON.parse(this.responseText.saying);
            document.getElementById("box").innerHTML.saying;
            if (this.status == 200) {}
            

            if (this.status==404) {
                document.getElementById("Keyword not contained in quote database")
            }
        }
    }

    xhttp.open("GET", Link, true);
    xhttp.send();
}

async function getQuote(){
    
    let response = await fetch(Link, api.rest.kanye)
            .then( res=> res.json())
            .then( data => console.log(data));
    console.log(response.status);
    console.log(response.statusText)
    
}

async function renderQuote() {
    let users = res.json();
    let box = document.querySelector('.box');

    box.innerHTML = response;
}