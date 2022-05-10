const Link="https://api.kanye.rest/"
document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("submit").addEventListener("click", loadAPI);
})


var callbackCounter = 1;

function loadAPI() {
    var keyword = document.getElementById('keyword').value.toUpperCase();

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.status == 200) {
                var saying = JSON.parse(this.responseText);
                var quote = saying.quote.toUpperCase();
                let bool = quote.includes(keyword)
                if(!bool){
                    if(callbackCounter >= 200){
                        alert("No matching quotes found.")
                        callbackCounter = 1;
                    }
                    else{
                        loadAPI();
                        callbackCounter++;
                    }
                }
                else{
                    document.getElementById("box").innerHTML = saying.quote;
                }
            }
        }
    }

    xhttp.open("GET", Link, true);
    xhttp.send();
}