var allPara = document.querySelectorAll('p') 

for (var i=0; i < allPara.length; i++) { 
    if (i % 2 === 0) {
    allPara[i].classList.add('bgGreen')
    } else { 
        allPara[i].classList.add('bgYellow')
    }
}