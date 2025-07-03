const button = document.getElementById("tilfoej-knap"); // Henter knappen fra index.html
const inputfield = document.getElementById("opgave") // Henter input feltet fra index.html
const ul = document.getElementById("opgave-liste") // Henter ul fra index.html

function addOpgaveToList(){ 
    let inputText = inputfield.value // Henter indholdet af input feltet (teksten brugeren har skrevet)

    if (inputText.trim() !== ""){
        //let ul = document.getElementById("opgave-liste") // Henter ul fra index.html
        let li = document.createElement("li") // opretter et nyt html element li
        li.appendChild(document.createTextNode(inputText)) // jeg tilføjer inputText til li elementet
        
        const deleteButton = document.createElement('button') //opretter ny knap
        deleteButton.textContent = 'Slet Opgave' //navngiver knappen
        deleteButton.addEventListener("click", function (){ // Den anonyme funktion udskyder kaldet til funktionen deleteOpgave, indtil der bliver trykket på knappen
            deleteOpgave(li)
        })

        const doneButton = document.createElement('button')
        doneButton.textContent = 'Jobs Done'
        doneButton.addEventListener("click",function(){
            doneOpgave(li)
        })

        li.appendChild(deleteButton) //tilføjer knappen til li
        li.appendChild(doneButton)
        ul.appendChild(li) // jeg tilføjer li element til ul elementet
        inputfield.value = "" // tømmer input feltet
        inputfield.focus()
    }
}
inputfield.addEventListener("keydown", function(event){ //anomym funktion som bruger et event som paramenter
    if (event.key === "Enter"){
        event.preventDefault(); 
        addOpgaveToList();
    }
})

function deleteOpgave(listItem){
    ul.removeChild(listItem);
}

function doneOpgave(listItem){
    listItem.classList.toggle('job-done')
}
button.addEventListener("click",addOpgaveToList);