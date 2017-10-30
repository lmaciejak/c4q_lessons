var string = prompt("Write something"); 
console.log(string)

var repeated = string.repeat(3); 
for (var i = 0; i < 3; i++) { 
    repeated += string + '\n'; 
}

window.alert(repeated)

// let input = window.prompt("Enter text")

// window.alert(input + input + input)

