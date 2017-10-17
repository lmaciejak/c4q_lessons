/*var func = function (num) {
    return  num * 3 
}
console.log(func(10)) */

/*var times3 = function (num) {
    return num * 3
}

function times3 (num) { 
    return num * 3 
} */

//var myNumber

/*function times3 (num) {
   var myNumber = num * 3
    return 'hello' 
}

console.log(times3(10))
console.log(myNumber) */


/*
var myNumber = 2

function incGlobalNum() {
    myNumber += 1
}

incGlobalNum()
console.log(myNumber)
incGlobalNum()
console.log(myNumber)
*/

/*
var num = 2
function incNum() {
   // var localNum = 2
    num += 10
   // console.log(localNum)
   return num
}
console.log(incNum())
console.log(incNum())
console.log(num)
*/


/*
var number = 2
function incNum() {
    var num = 2
    num += 10
   return num
}
console.log(incNum())
console.log(incNum())
console.log(number)
*/

/*
function add(num1, num2){
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
    return('numbers only please')
}
    return num1 + num2
  }
  console.log(add(2, 'giraffe')) */

  //Write a function that takes a number as argument 
  //and returns the number to the power of 2

  /*function toThird(num1) {
      return num1 * num1 * num1
  }
  console.log(toThird(4))
  */
/*
  function power (num) {
      return Math.pow(num,10)
  }
  console.log(power(2))
  */
/*
function add1 (num) {
    return num + 1

}
function add2 (num) {
    return add1(num) + 1
}
function add3 (num) {
    return add2(num) + 1 
}

console.log(add3 (3))
*/
/*
//q1
function largest(num1,num2) {
    if (num1 > num2){ 
        return num1
    }
    else {
        return num2
    }
}
console.log(largest(2,7))

//q2
function getDogAge(num1) {
    return num1 * 7 
}
console.log(getDogAge(6))

//q3
function calcCircumference(radius) {
    return Math.PI * radius * 2
}
function calcArea(radius) {
    return Math.PI * radius * radius
}
var circleProps = function(radius) {
    return ("The circumference is: " + calcCircumferance(radius) + "." + "\nThe area is: " + calcArea(radius) + ".")
}
console.log(circleProps(1));

//q4
function celsiusToFahrenheit(tempCel) {
    return (tempCel * (9/5)) - 32 
}
function fahrenheitToCelsius(tempFah) {
    return (tempFah + 32) * (5/9)
}
function convertTemperature (temp,string) {
    if (string = "C") {
        return celsiusToFahrenheit()
    }
    else if (letter === 'f') {
        return fahrenheitToCelsius(num)
    }
}

//q5

function square(num) {
    return num * num 
}
function half(num) { 
    return (num/2)
}
function percentOf(num1,num2) {
    return (num1/num2) * 100
}
function areaOfCircle(rad) {
    return Math.PI * square(radius)
}
function doStuff(num) {
    var squared = square(num)
    var halved = half(squared)
    var area = areaOfCircle(halved)
    return areaOfCircle(squared,area)
}
*/

/*
var color = 'blue' 

function hello2 () {
    var color = 'red'
    color = 'black'
    return color
}
console.log(hello2)
console.log(color)
}
*/

//3 - this doesn't work 
/*
function celciusToFahrenheit(num){
    return (num * 1.8) + 32
}
function fahrenheitToCelcius(num){
    return (num - 32) /1.8
}
function convertTemperature(num, str){
 if(str === 'F'){
 return celciusToFahrenheit(num)
}else if (str === 'C'){
 return fahrenheitToCelcius(num)
}
}
console.log(convertTemperature(30,"C"))
*/

//3 with hoisting 
/*
function temperatureConverter(number,str){
    var number = Number(number)
    var str = str.toUpperCase()
    
    if (str === "C"){
    return(tempToCelcius(number))
    } else if(str === "F"){
    return(farenheightTemp(number))
    }else{
    return('please enter c or f')
    }
function farenheightTemp(number){
    var farenheightTemp = (number * 1.8) + 32
    return (farenheightTemp +'˚F' )
    }
function tempToCelcius (number){
    var celciusTemp = (number - 32) / 1.8
    return (celciusTemp + '˚ C')
    }
    }
    
    console.log(temperatureConverter(43, "f"))
    */

    //how to round
    console.log(Math.round (1/3 * 10000)/10000)

