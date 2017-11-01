document.addEventListener("DOMContentLoaded",function(event){
    document.addEventListener("click",function(event){
         var x = event.clientX
         var width = window.innerWidth
         var a = (width - x) / width;
         console.log(a);
         if(a < 0.5) { 
             document.querySelector('body').style.backgroundColor = 'mediumaquamarine'
         } else { 
            document.querySelector('body').style.backgroundColor = 'peachpuff'
         }
    })
 })