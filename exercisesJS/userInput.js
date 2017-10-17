// USER INPUT 10.3.17//


// function add(num1, num2){
//     return num1 + num2
// }

// function square(num){
//     return num * num
// }

// var num1 = add(2, 3)
// var num2 = square(num1)
// console.log(num2)


// // this is same as below 
// // var sayHello = function(){
// //     console.log('hello')
// // }


// function sayHello(){
//     console.log('hello')
// }
// setInterval(sayHello, 0)
// console.log('Hi')
// //we get hi first no matter what the interval is 
// //whatever is asynchronous will get put into a queue and get executed after everything else is
// //finish synchronous code first 
// //setInterval and setTimeOut will wait until the end 

// function sayHello(){
//     console.log('hello')
// }
// function sayHello2(){
//     while(true){

//     }
// }
// setInterval(sayHello, 100)
// setInterval(sayHello2, 200)



// readline 
// require loads external javascript files (somewhere in node library, don't get right away)
// readline is a module 



// var readline = require('readline')

// //this is what you use to put readline in terminal
// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })

//   function parseInput(input) {
//       console.log('your input was: ' + input)
//   }
//   rl.on('line',parseInput)

//   //event is something that happens 
//   //line is whenever user inputs some stuff and presses enter - then that event is triggered 


//   //this is different way of wiriting below
//   //anonymous funciton 
//   //only do the below anonymous function is only need to use it once 
//   //anonymous functions will cause error unless you define and invoke it right away 
//   //have to wrap it with parentheseses and nothing will happen

//     rl.on('line', function(input) {
//         var maybeNumber = Number(input)
//         //if (isNaN(input)){  ---this should not work 
//         if (maybeNumber === NaN){
//             console.log("that's not a number")
//         } else {
//             console.log('your input was: ' + maybeNumber)
//         }
//     console.log('input a number')
//  })

//  //user input in javascript is 99% of time a string even if you typed a number 
//  //number function used to convert strings to numbers 
// //typeof NaN is 'number' but represents not a number 
// //if try to convert something random to a number, instead of getting undefined will get NaN
// //isNaN() global function to check if something is number 
// // NaN === NaN is equal to false, it is a junk value 



// //  importing the readline module
// var readline = require('readline')

// // We will be able to use `rl`
// // Only After creating the readline interface
// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// // Clears the terminal screen
// function clear () {
//   process.stdout.write('\u001B[2J\u001B[0;0f')
// }


// exercise 1

// var hold = []
// function holdJoined(arr) {
//     return arr.join('\n')
// }

// rl.on('line', function(input) {
// clear()
// hold.push(input)
// console.log(holdJoined(hold))
// })
// console.log('Type anything')

// exercise 2///////////////////////////////////////////////////////////////////
// // Write a program that reads the user input one line at a time. After each input 
// // the program will log the sum of all numbers that the user had input. If the input is 
// // not a number the program will ignore it.

// var sum = 0 
// rl.on('line', function(input) {
//     clear()
//     if(isNaN(input)){

//     }
//     else{
//     sum += Number(input)
//     }
//     console.log(sum)

//     })
//     console.log('Type anything')
    

// exercise 3

// var sum = 0 
// rl.on('line', function(input) {
//     clear()
//     if(isNaN(input)){

//     }
//     else{
//     for(var i = 0; i <= input.length; i++){

//     }
//     sum += Number(input)
//     }
//     console.log(sum)

//     })
//     console.log('Type anything')


// split by spaces then convert to number 



// var inputStr = ''
// var splitStrToArr = inputStr.split(" ")
// var numbers = 0

// rl.on('line', function(input) {
//     clear()
//     inputStr += input + ' '
//     for(var i = 0; i <= input.length; i++){
//         if(isNaN(Number(input[i]))) {

//         }
//         else if(Number(input[i])) {
//            numbers += Number(input[i])
//         }

//     }
//     console.log(numbers)
   
//     })
//     console.log('Type anything')

// //// exerc 3 that works 
//     var inputStr = ''
//     var numbers = 0
    
//     rl.on('line', function(input) {
//         clear()
//         inputStr += input + ' '
//         var splitStrToArr = inputStr.split(" ")
//         for(var i = 0; i < splitStrToArr.length; i++){
//             if(isNaN(Number(splitStrToArr[i]))) {
    
//             }
//             else if(Number(splitStrToArr[i])) {
//                numbers += Number(splitStrToArr[i])
//             }
//         }
//         console.log(numbers)
//         console.log(splitStrToArr)
       
//         })
//         console.log('Type anything')


        
// //in class solution to # 3
//         var readline = require('readline')
        
//         var rl = readline.createInterface({
//           input: process.stdin,
//           output: process.stdout
//         })
        
//         function clear () {
//           process.stdout.write('\u001B[2J\u001B[0;0f')
//         }
        
//         function sumStringArr(arr){
//           var sum = 0;
//           for (var i = 0; i < arr.length; i++){
//             var num = Number(arr[i])
            
//             if (!isNaN(num)){
//               sum += num;
//             }
//           }
//           return sum;
//         }
        
//         rl.on('line', function(input){
//             var inputArr = input.split(' ')
//             var sum = sumStringArr(inputArr)
//             console.log(sum)
//         })








// /////////////////////////NODE JS INPUT2 - EXERCISES ////////////////////////////////////////
// // Write a counter program that reads the user input one line at a time. The count would be 
// // initially zero. The app will start by displaying the count and prompting the user for input. 
// // valid input strings are: 'inc', 'dec', 'res'. The user input may be in uppercase, lowercase,
// //  or any combination of the two. On input of 'inc' and 'dec', the counter will be incremented 
// //  / decremented by 1. On input of 'res'  the counter will be reset. Following each of these, 
// //  the new count will be displayed, followed by a relevant message (e.g. 'the counter has been 
// //  incremented') followed by a prompt to the user for more input.

// /q1



// var counter = 0
    
//     rl.on('line', function(input) {
//         clear()

//         if (input.toLowerCase() === 'res') { 
//             counter = 0
//             console.log("count: " + counter)
//             console.log("The counter has been reset" + '\n' + 'Please enter more input')
//         } else if (input.toLowerCase() === 'dec') {
//             counter--
//             console.log("count: " + counter)
//             console.log("The counter has been decremented" + '\n' + 'Please enter more input')
//         } else if (input.toLowerCase() === 'inc') { 
//             counter++
//             console.log("count: " + counter)
//             console.log("The counter has been incremented" + '\n' + 'Please enter more input')
//         } 
//     })
//     console.log("count: " + counter)
//     console.log("Please enter input")


// q1 ///another way to do q1 with switch statements///////////////////

// // importing the readline module
// var readline = require('readline')

// // We will be able to use rl
// // Only After creating the readline interface
// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })


// Clears the terminal screen
// function clear() {
//     process.stdout.write('\u001B[2J\u001B[0;0f')
// }

// clear();
// var counter = 0;
// function increment(str) {
//     switch (str.toLowerCase()) {
//         case "inc":
//             counter++;
//             break;
//         case "dec":
//             counter--;
//             break;
//         case "res":
//             counter = 0;
//             break;
//         default:
//             console.log("Command invalid")
//             break;
//     }
// }


// rl.on('line', function (input) {
//     clear();
//     increment(input)
//     console.log(counter);
// })
   


// q2
// // Write a program that reads the user input one line at a time. It would expect the user 
// // input to start with one of four mathematical symbols: + - * / followed by two numbers,
// //  separated by spaces. For example: + 4 2 . The program will perform the desired mathematical 
// //  operation (addition, subtraction, multiplication or division) and log the result. The program
// //  will display an explanatory message if:

// // 1. the operation is invalid.

// // 2. The operation is not followed by the expected two numbers (with spaces)

// // For example, if the user enters: * 2 3 the program will log 6.

// rl.on('line', function(input) {
//     clear()
    
//     if (input[0] === '+') {
//     console.log(Number(input[2]) + Number(input[4]))
//     } else if (input[0] === '-') {
//     console.log(input[2] - input[4])
//     } else if (input[0] === '*') {
//     console.log(input[2] * input[4])
//     } else if (input[0] === '/') {
//     console.log(input[2] / input[4])
//     } else {
//     console.log("the operation is invalid or not followed by the expected two numbers")
//     }
//     })
//     console.log("Please enter input")


// be careful using eval 

// q 3////////////////////////////////////////////////////////////////////////// 

// var readline = require('readline')

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// function clear () {
//   process.stdout.write('\u001B[2J\u001B[0;0f')
// }

//     rl.on('line', function(input) {
//         clear()
//         var counterDiv = 0 
//         var counterPlus = 0
//         var counterMinus = 0
//         var counterMul = 1 

//     for(var i = 2; i < input.length; i += 2) {
//         if (input[0] === '+') { 
//             counterPlus += Number(input[i])
//         } else if (input[0] === '-') {
//                  if( i === 2) {
//                 counterMinus += Number(input[i])
//                 } else if(i > 3) {
//                     counterMinus = counterMinus - Number(input[i])
//                 }
//         } else if (input[0] === '*') { 
//             counterMul = counterMul * Number(input[i])
//         } else if (input[0] === '/') { 
//                  if( i === 2) {
//                  counterDiv += Number(input[i])
//                  } else if(i > 3) {
//                 counterDiv = counterDiv / Number(input[i])
//                 }
//         } else {
//             console.log("the operation is invalid or not followed by the expected two numbers")
//         } 
//     }    
//     console.log('addition value: ' + counterPlus)
//     console.log('minus value: ' + counterMinus)
//     console.log('multiplication value: ' + counterMul)
//     console.log('division value: ' + counterDiv)
//     })
//     console.log("Please enter input")
   


//     // best way to do 3 
//     var readline = require('readline');
    
//     var rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     })
    
//     function accum(numbers, callback) {
//         var result = numbers[0]
//         for (var i = 1; i < numbers.length; i++) {
//             result = callback(result, numbers[i])
//         }
//         return result
//     }
    
//     var operations = {
//         '+': function (a, b) { return a + b },
//         '-': function (a, b) { return a - b },
//         '/': function (a, b) { return a / b },
//         '*': function (a, b) { return a * b },
//         '**': function (a, b) { return Math.pow(a, b) },
//     }
    
//     rl.on('line', function (input) {
//         var inputArr = input.split(' ')
//         console.log('Input array is: ' + inputArr)
//         var opr = inputArr[0]
    
//         if (!operations[opr]) {
//             console.log('Valid expression must be: "operator num1 num2 num3..."' +
//                 '\nValid operators are "+ - * /"');
//         } else {
//             for (var i = 1; i < inputArr.length; i++) {
//                 if (isNaN(inputArr[i])) {
//                     console.log('Valid expression must be: "operator num1 num2 num3..."' +
//                         '\nValid operators are "+ - * /"');
//                     return;
//                 } else {
//                     inputArr[i] = Number(inputArr[i])
//                 }
    
//             }
    
//             var numbers = inputArr.slice(1)
//             console.log(accum(numbers, operations[opr]))
//         }
//     })