// document.addEventListener("click",function(event){

    // btn = document.querySelector("button")
    // btn.style.display = "block"
    // btn.addEventListener("click", function(){
    //     img = document.createElement("img")
    //     img.style.width = "50px"
    //     img.src = "http://www.pngmart.com/files/3/Bubbles-PNG-HD.png"
    //     document.body.appendChild(img)
    // });


    document.addEventListener("DOMContentLoaded", function(event) {
        let button = document.querySelector("button");
    
        button.addEventListener("click", function(event) {
            let bubble = document.createElement("img");
            bubble.src = "http://www.pngmart.com/files/3/Bubbles-PNG-HD.png";
            bubble.style.height = Math.round(Math.random() * 50 + 10).toString() + "px";
            bubble.style.top = Math.round(Math.random() * 95 ).toString() + "%";
            bubble.style.left = Math.round(Math.random() * 99 ).toString() + "%";
            bubble.style.position = "fixed";
    
            document.body.appendChild(bubble);
        })
    })