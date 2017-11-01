let form = document.querySelector('#myForm');

form.addEventListener('submit', function(event){
    event.preventDefault(); 
    var input = document.getElementById('userInput').value  
    document.getElementById('reversed').innerText = input.split('').reverse().join('')

})