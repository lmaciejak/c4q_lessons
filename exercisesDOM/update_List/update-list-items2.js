let id = window.prompt("Enter an ID")
let string = window.prompt("Enter a string")
 

if (document.getElementById(id) === null ) {
    document.getElementById("one").innerText = string;
} else { 
    let text =window.prompt("Enter text")
    document.getElementById(id).innerText = text;
}



