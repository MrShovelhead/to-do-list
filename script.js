const button = document.getElementById("tilfoej-knap"); // Henter knappen fra index.html
const inputfield = document.getElementById("opgave") // Henter input feltet fra index.html

function addOpgaveToList(){ 
    let inputText = inputfield.value // Henter indholdet af input feltet (teksten brugeren har skrevet)

    if (inputText.trim() !== ""){
        let ul = document.getElementById("opgave-liste") // Henter ul fra index.html
        let li = document.createElement("li") // opretter et nyt html element li
        li.appendChild(document.createTextNode(inputText)) // jeg tilføjer inputText til li elementet
        ul.appendChild(li) // jeg tilføjer li element til ul elementet
        inputfield.value = "" // tømmer input feltet
        inputfield.focus()
    }
}

button.addEventListener("click",addOpgaveToList);