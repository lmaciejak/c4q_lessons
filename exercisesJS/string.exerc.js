
// function capitalLast (str) {

//     var lastCap = str1.slice(-1).toUpperCase 
//     var withoutLast = str1.slice(0,str.length-1)

// return withoutLast + lastCap

// }

// console.log(capitalLast('kate'))


//q2
// function verbing (str) { 
    
//     if (str.length < 3) {
//         return str
//     }
    
//     else if (str.slice(-3) === 'ing') {
    
//     return str + 'ly'
    
//     } else {
    
//     return str + 'ing'
    
//     } 
//     }
    
//     console.log(verbing ("therefore"))
    
// // q2 another way 
// function verbing(str) {
//     var newStr = str
//     if (newStr.length >= 3 && newStr.substring(newStr.length - 3) === 'ing') {
//         newStr += "ly"
//     } else if (newStr.length >= 3) {
//         newStr += "ing"
//     }
//     return newStr
// }
    
// console.log(verbing('AM'))

// //q3

// function getInitString (str) {
    
//     return str.slice(0, -1) 
    
//     } 
    
//     console.log(getInitString('mariella')) 

//q5

// function capitalLast (str) {

//     var lastCap = str.slice(-1).toUpperCase()
//     var withoutLast = str.slice(0,-1)

// return withoutLast + lastCap

// }

// console.log(capitalLast('kate'))

function mixUp (str1, str2) { 
    
    return (str2.slice(0,2)) + str1.slice(2) + " " + str1.slice(0,2) + str2.slice(2) 
    
    } 

   console.log( mixUp('danny', 'rabbit'))