function colorQuad () { 

let quad = window.prompt("Choose a quadrant: #topLeft, #topRight, #bottomLeft, #bottomRight")
let colorNew = window.prompt("Choose a color")

document.querySelector(quad).style.backgroundColor = colorNew

}

setInterval(colorQuad, 1000)