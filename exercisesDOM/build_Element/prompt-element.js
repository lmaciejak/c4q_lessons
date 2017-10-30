

function changeDiv() {
    let divText = document.getElementById("fancy");
    let newText = window.prompt("enter entire HTML elenment");
    divText.innerHTML = newText + " ";
}


setInterval(changeDiv, 500)