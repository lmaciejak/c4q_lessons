function swapList(){
    let firstID = prompt("Choose which list you will like to swap [one,two,three,four]")  
    let secondID = prompt("Choose which list you will like to swap with [one,two,three,four]") 
       
        let firstElement = document.getElementById(firstId)
        let secondElement = document.getElementById(secondId)

        let temp = firstElement.innerText; 
        firstElement.innerText = secondElement.innerText; 
        secondElement.innerText = temp; 
        
    //    document.getElementById(firstElement).innerText = y
    //    document.getElementById(secondElement).innerText = x
    
}
swapList()
