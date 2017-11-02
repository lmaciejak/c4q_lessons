// document.addEventListener("click",function(event){
//     var isTopLeft = event.clientX < window.innerWidth / 2 && event.clientY < window.innerHeight /2;
//     var isTopRight = event.clientX > window.innerWidth / 2 && event.clientY < window.innerHeight / 2; 
//     var isBottomLeft = event.clientX < window.innerWidth /2 && event.clientY > window.innerHeight / 2; 
//     var isBottomRight = event.clientX > window.innerWidth / 2 && event.clientY > window.innerHeight / 2; 
    

//     if (isTopLeft && !document.getElementById("topLeft").style.backgroundColor) { 
//         document.getElementById("topLeft").style.backgroundColor = "black"
//     } else if ((isTopLeft && document.getElementById("topLeft").style.backgroundColor) { 
//         document.getElementById("topLeft").style.backgroundColor = "white"
//     } 
    
//     else if (isTopRight) { 
//         document.getElementById("topRight").style.backgroundColor = "black"
//     } else if (isBottomLeft) { 
//         document.getElementById("bottomLeft").style.backgroundColor = "black"
//     } else { 
//         document.getElementById("bottomRight").style.backgroundColor = "black"
//     }
// })

document.addEventListener("click",function(event){
    // var elem = event.target
    // var color = elem.style.backgroundColor

    console.log(event)
    
    // var bgColor = elem.backgroundColor

    
    // if(elem.backgroundColor) {
    //     if(elem.backgroundColor === 'white'){
    //         elem.backgroundColor = 'black'
    //     } else {
    //         elem.backgroundColor = 'white'
    //     }
    // } else {
    //     elem.backgroundColor = 'black'
    // }





    //var color = elem.backgroundColor

    
    var elem = event.target.style

    if(!elem.backgroundColor){
        elem.backgroundColor = 'black'
    } else if (elem.backgroundColor === 'black'){
        elem.backgroundColor = 'white'
    } else {
        elem.backgroundColor = 'black'
    }    

    // elem.backgroundColor
    // ? elem.backgroundColor ="white" 
    // : elem.backgroundColor = "black";
    
})