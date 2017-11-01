document.addEventListener("DOMContentLoaded", function (event) {
    let text = "";

    function echo() {
        document.addEventListener("keypress", function (event) {
            let keyNew = event.key;
            let h1el = document.querySelector("h1");

            if (keyNew.match(/[!?.]/)) {
                text += keyNew;
                h1el.innerText = text;
                h1el.style.textDecoration = "none";
            } else if (keyNew.match(/[A-Z]/)) {
                text += keyNew;
                h1el.innerText = text;
                h1el.style.textDecoration = "underline";
            } else {
                text += keyNew;
                h1el.innerText = text;
            }
        });
    }
    echo();

})






// document.addEventListener('keypress', function (event) {
//     var elem = document.querySelector("h1");
//     elem.innerText = elem.innerText + event.key;
//     var character = event.key;

//     if (character === "."
//         || character === "?"
//         || character === "!") {
//         elem.classList.remove("textdecor")
//     } else if (event.charCode <= 90 && event.charCode >= 65) {
//         elem.classList.add("textdecor")
//     } else {
//         elem.classList.remove("textdecor")
//     }

// })





// document.addEventListener("keypress",function(event){
// document.querySelector('h1').innerText = event.key

// var h1 = document.querySelector('h1')


// if (character === "."
//     || character === "?"
//     || character === "!") { 
//         elem.classList.remove
//     }






// (event.key == event.key.toUpperCase()) {
//     h1.classList.add('decoration');
// }
// } else if (event.) { 
//     h1.classList.remove('decoration');
// } 
//     })




// switch (event.key) { 
    //     case "!": 
    //     h1.classList.add('decoration');
    //     break; 
    
    // }