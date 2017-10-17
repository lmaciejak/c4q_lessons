//q1

// Create two functions: double and square. double should take a 
// number and return the number times two. square should take a number 
// and return the number squared. Create a third function doubleSquare 
// that uses both of the functions to return a number that is first 
// doubled and then squared.


// function double(num) {
//     return num * 2
// }

// function square(num) {
//     return num * num 
// }

// function doubleSquare(num){
//     return square(double(num))
// }

// console.log(doubleSquare(2))



//q2 ____________________________________________________
// Create a function classyGreeting that takes as input the strings 
// firstName  and lastName , and returns a string with a greeting 
// using the two. Create a second function yell  that takes as input
//  as string and returns the string in all capitalized letters. 
//  Create a third function yellGreeting  that will take the firstName  
//  and lastName  as inputs and yell a greeting using the two.

// function classyGreeting(firstName, lastName){
//     return "Hello, " + firstName + " " + lastName
// }

// function yell(str) {
//     return str.toUpperCase()
// }

// function yellGreeting(firstName, lastName){
//     return yell(classyGreeting(firstName, lastName))
// }
// console.log(yellGreeting("luiza", "maciejak"))

//q3 _____________________________________________________


// The concat array method is used to merge two (or more) arrays. 
// Write a removeDupesfunction that takes an array as an argument and 
// returns a copy without 
// any duplicate elements. Then, write a function concatAndRemoveDupes  
// that combines two arrays and removes any duplicates.

// Hint: Use the array method includes (Links to an external site.)
// Links to an external site. to check if an element is in an array.

// function removeDupesfunction(arr){
//     var arrSansDupes = []
//     for(var i = 0; i <= arr.length-1; i++){
//         if(arrSansDupes.includes(arr[i])) {

//         }
//         else{
//             arrSansDupes.push(arr[i])
//         }
//     }
//     return arrSansDupes
// }

// function concatAndRemoveDupes(arr1, arr2){
//     var arrConcat = []
//     arrConcat = arr1.concat(arr2)
//     return removeDupesfunction(arrConcat)
// }

// console.log(removeDupesfunction([1,1,2,1,2,3,3]))
// console.log(concatAndRemoveDupes([1,2,2,3],[4,5,3,5]))


// q4________________________________________
// Given a list of grades, we can get the median grade by sorting 
// the list and taking the middle element, or the average of the 
// two middle elements. Create the functions sort and middleElement, 
// and then use them to create the functions median.

// var grades = [91, 85, 100, 92, 88,10]

// console.log(median(grades)) // Should log 88

// function sort(list) {
//     return list.sort(function(a, b){return a-b});
// }

// function middleElement(list){
//     var middle = 0
//     var middleEve1= 0
//     var middleEve2 = 0
//     if(list.length % 2 === 1) {
//         middle = list[Math.floor(list.length/2)]
//         return middle
//     }
//     else{
//         middleEve1 = list[((list/2)-1)] 
//         middleEve2 = list[(list/2)]
//         return (middleEve1 + middleEve2)/2
//     }
// }
// function median(list){
//     return middleElement(sort(list))
// }
// console.log(median([91, 85, 100, 92, 88]))



//not correct below
// function firstString (arr) {
    
//     var stringValue = ' '
    
//           for (var i = 0; i <= arr.length-1; i++) {
    
//                if( typeof(arr[i]) !== 'string') { 
    
//                    return undefined 
    
//                   } 
    
//                 else if (stringValue === ' ') {
    
//                   stringValue += arr[i] 
    
//                   }
    
//             }
    
//           return stringValue 
    
//     }
//     console.log(([3, 7, 'banana', 'kierkegaard']))


    // function firstString (arr ) {
    //    for ( i = 0 ; i < arr.length ; i ++ ){
    //      if (typeof arr[i] === 'string' ) {
    //           return arr[i]
    //         }    
    //    }
    //         return undefined
    //    }



// CALLBACKS *******
//functions themselves are an expression ****
//can call a function like this 



// var add = function(num1, num2) {
//     return num1 + num2;
// }



// function callIt(arg1, arg2, callback){
//     return callback(arg1, arg2)
//   }
  
//   console.log(callIt(2, 4, add))



//   var forEachElement = function(arr, initialValue, callback){
//      var t = initialValue
//     for (var i = 0; i < arr.length; i++) {
//          t = callback(arr[i], t)
//       }
//       return t
//   }

//   var add= function(a,b) {
//       return a + b; 
//   }

//   var mul = function(a,b) {
//       return a*b
//   }
//   console.log(forEachElement([5,3,5],1, mul))

// callbacks have no hoisting??
// console.log is a function so it can be passed to the funciton 


// function sayHello() {
//     console.log('hello')
// }
// setInterval(sayHello, 1000)


// setInterval(function(){
//     console.log('hello')
// }, 1000)

// setInterval(function(){
//     console.log('hello kitty')
// }, 1000)

// console.log(2+2)


// new example

// setInterval(function(){
//     console.log('hello#1')
// }, 1000)

// setInterval(console.log, 500)

// var adding = function(a, b) {
//     return a+b
// }

// console.log(adding(4564545,4535436534))



//next example 
//almost everything is asynchronous, cursor blinking is ex
//everything responsive is going to be asynchronous 

// var spinner = '/-\\|'
// var i = 0

// setInterval(function(){
//     console.log('\033[H' + spinner[i]) //hexa would be \x1f
//     i = (i+1) % spinner.length
// }, 100)

//1f is the command that tells terminal you will give it a command
//tells temrinal I'm giving you a command 
//this means something similar to clear screen 
// \0 means i'm putting octo number which is character code that goes in
//oct is 3+3*8 -- this is character 27 
// \033 - will cause it to go to home position 
//another way to write line 237 is \x1B (11+16 is 27) 
// \x1B[2J\x1B[H' + spinner[i])


// var spinner = '/-\\|'
// var i = 0

// setInterval(function(){
//     console.log('\033[H' + spinner[i]) //hexa would be \x1f
//     i = (i+1) % spinner.length
// }, 500)



//12345678O - aiden hotspot


//Create a function logEachElem that takes an array as an argument, 
//and uses the forEachElem method (below) to log each element of the 
//array.


// function logEachElem(elem){
//     console.log(elem)
// }
// function forEachElem(arr, callback){
//    for (var i = 0; i < arr.length; i++) {
//       callback(arr[i])
//    }
// }

// forEachElem([1,2,3],logEachElem)


//q2
// Create a function logArrTypes that uses the forEachElem method to log
//  each array element followed by its type. For example:

// function logArrTypes(elem){
//     console.log(elem + " is a " +typeof(elem))
// }

// function forEachElem(arr, callback){
//     for (var i = 0; i < arr.length; i++) {
//        callback(arr[i])

//     }
// }
// forEachElem([1,2,3],logArrTypes)
// forEachElem([1, 'cat', true], logArrTypes)


//q3 __________________________
// Use setInterval (Links to an external site.)Links to an external site. to 
// display every second the number of seconds that have passed since the 
// program was started. When executed with node, the output of the program
//  should look like this:

// var seconds = 0
// setInterval(function(){ 
//    console.log(seconds++); }, 1000);

//q4
//   Write a function shouldIBuyThis that takes as input a number balance and a callback 
//   (one of the above functions), and  returns either "Sure! I've got 
//   the money!" or "Nope! Gotta keep my savings up!"

// function conservativeSpender(balance)  {
//     return balance > 100
//   }
  
//   function liberalSpender(balance) {
//     return balance > 10
//   }
  
//   function horribleSaver (balance) {
//     return balance > 0
//   }
 
// function shouldIBuyThis(balance, callback){
//     if(callback(balance)){
//         console.log("Sure, I'll buy it")
//     } 
//     else {
//         console.log("Nope! Gotta keep my savings up!")
//     }
// }

// function smarterShouldIBuyThis(balance, price, callback){
//     if(callback(balance - price)){
//         console.log("Sure! I've got the money!")
//     }
//     else{
//         console.log("Nope! Gotta keep my savings up!")
//     }
// }
// smarterShouldIBuyThis(45, 54, horribleSaver)


//documentation 
/**
 * @function add
 * @param {number} num1
 * @param {number} num2
 * @return {number} {the sum of num1 and num2}
 */
function add(num1, num2){
    return num1 + num2
}

/**
 * @function map
 * @param {Any[]} arr {an array}
 * @param {function} func
 * @return {Any[]} {a new array, made by taking every element of 
 *                  arr and passing it as an argument to func}
 */
function map(arr, func) {
    var newArr = []; 
    for (var i = 0; i < arr.length; i++) {
       
       var newElement = func(arr[i])
       newArr.push(newElement)
       // or newArr.push(func(arr[i]))
    }
    return newArr
}
//new array
//for loop
//for each elemen call add 4 function
//push new value into new array 
//return new array 


function add4(num){
    return num + 4
}

map([1,2,3], add4)
//[5,6,7]



//midday checkin 
function getInput() {
    return 'meow'
 }
 
 function logStuff(stuff){
   console.log(stuff)
 }
 
 function doSomething(callback) {
   var input = getInput()
   callback(input)
 }
 
 doSomething(logStuff)
 