//Write a function that takes a decimal number as argument and returns a string 
//with the binary representation of the number. 

// decimalToBinary(5) // => "101"
// decimalToBinary(8) // => "1000"


// //my sol for #3
// function decimalToBinary(num) {
// var arrBinary = []
// var num = 5
//     for(var i = 0; i <= Math.ceil(Math.log2(num)); i += (2^i)) {
//         arrBinary.push(i)
//     }
//     //if(arrBinary[])
//     return arrBinary
// }

// console.log(decimalToBinary(5))





// function decimalToBinary(num) {
//     var arrBinary = []
//     var num = 5
//         for(var i = Math.ceil(Math.log2(num)); i>=0; i += (i-1)^2) {
//             arrBinary.unshift(i)
//         }
//        // if(arrBinary[])
//     return arrBinary
//     }
    
//     console.log(decimalToBinary(5))

    
    


// //q3 the one below works and quits at right place 
// // function decimalToBinary (num){
// //     var placeValue = 1
// //     var binary = ''
// //     for (var i = 0; placeValue <= num; i++){
// //         var digit = Math.floor(num % (2 * placeValue) / placeValue)
// //         binary = digit + binary
// //         placeValue = placeValue * 2
// //     }
// //     return binary 
// // }
// // console.log(decimalToBinary(24))  

//q3 best solution don't need math. ceil
// function numToBin(num){
//     var number = num
//     var result = []
//     while (number >= 1 ){
//         result.unshift(number%2)
//         number = Math.floor(number/2)
//     }
//     return result.join('')
//   }
//   console.log(numToBin(13))

  //other numtohex
  //0 will not return need conditional
//   var hexDigits = '0123456789ABCDEF'
//   function numToHex(num){
//       if (num===0) {
//           return '0'; 
//       }
//     var number = num
//     var result = []
//     while (number >= 1 ){
//         result.unshift(hexDigits[number%16])
//         number = Math.floor(number/16)
//     }
//     return result.join('')
//   }
//   console.log(numToHex(0))



//   var hexDigits = '0123456789ABCDEF'

//   function numToBase(num, base){
//       if (num===0) {
//           return '0'; 
//       }
//     var number = num
//     var result = []
//     while (number >= 1 ){
//         result.unshift(hexDigits[number % base])
//         number = Math.floor(number/base)
//     }
//     return result.join('')
//   }
//   console.log(numToBase(64,8))


// //q3 best solution don't need math. ceil
function decToBin(num){
    var number = num
    var result = []
    while (number >= 1 ){
        result.unshift(number%2)
        number = Math.floor(number/2)
    }
    return result.join('')
  }
  console.log(decToBin(13))



// q4
//function that takes as argument a string with the binary representation 
//of a number, and returns the decimal representation of the number (as a number).
// function binToDec(num){ 
//     var number = num

//     while (number >= 1 ){
//         result.unshift(number%2)
//         number = Math.floor(number*2)
//     }
//     return num
//   }
//   console.log(numToBin('101'))


//   function binaryToDecimal(str) {
//     var on = 0
//     var off = 0
//     var n = 0
//     for (var i = str.length - 1; i >= 0; i--) {
//         if (str[i] === '1'){
//             on += 1 * Math.pow(2, n++)
//         }else if (str[i] === '0'){
//             off += 0 * Math.pow(2, n++)
//         }
//     }
//     var sum = on + off
//     return sum
// }

// console.log(binaryToDecimal("0110"))



//this solution works for exercise #4

// function binaryToDecimal(str) {
//     var decimal = 0
//     var power = (str.length-1)

//     for(var i = 0; i <= str.length-1; i++) {
//         if(str[i] === '1') {
//              decimal += (Math.pow(2,power)) 
//         }
        
//         power--
//     }
//     return decimal
// }

// console.log(binaryToDecimal("101010"))


function withoutLastTwo (arr) {
    arr.splice(arr.length - 2, 2)
    return arr
    }

    console.log(withoutLastTwo(['dog', 'cat', 'bat', 'octopus']));