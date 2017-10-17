// function decimalToBinary(decimalNum){
//     var binaryNum = "";
//     while (decimalNum !== 0){
//       var binaryDigit = decimalNum % 2;
//       binaryNum = binaryDigit + binaryNum;
//       decimalNum = Math.floor(decimalNum / 2)
//     }
//     return binaryNum;
//   }

//   console.log(decimalToBinary(10))



//chessboard 

// function chessboard(length) {
//     var line = ' '
//     var reverseLine = ' '
//     var board = ' '

//     for(var i = 0; i <= length; i++) {
//         if(i%2 === 0) {
//             reverseline += ' '
//             line += '#'
//         }else {
//             line += '#'
//             reverseLine += ' '
//         }
//     }
//     for(var i = 0; i <= length; i++) {
//         if(i%2 === 0) {
//             board += reverseline + '/n'
//         }
//         else{
//             board += line + '/n'
//         }
//     }
//     return board
// }
// console.log(chessboard(8))


// function boardTwoLoops(length){
//     var line = ''
//     var reverseLine = ''
//     var board = ''
    
//     for (var i = 0; i <= length; i++){
//       if (i % 2 === 0){
//         line += ' '
//         reverseLine += '#'
//       } else {
//         line += '#'
//         reverseLine += ' '
//       }
//     }
    
//     for (var i = 0; i <= length; i++){
//       if (i % 2 === 0){
//         board += reverseLine + '\n'
//       } else {
//         board += line  + '\n'
//       } 
//     }
//     return board
//   }
//   console.log(boardTwoLoops(8))

//
// Write a function named and with parameters x and y. 
// Your function should return true if x and y are both true, 
// and otherwise return false.

// Invoke your function with the arguments true and true.

// Invoke your function with the arguments 'happy string' 
// and [ ] (empty array).


// practice questions 
// q1
// function and(x,y) {
//     if(x && y){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(and(true,true))
// console.log(and('happy string',[]))

//_________________________q2______________________________________

// function named addOnlyNumbers with parameters foo and bar. 
// If foo and bar are both of type "number", return the result 
// of foo plus bar. If foo and bar are not both numbers, return NaN.

// Invoke your function with arguments 5 and Math.PI.

// Invoke your function with arguments 'fidget spinner' and 22.


// function addOnlyNumbers(foo,bar) {
//     if(typeof(foo) === "number" && typeof(bar) === "number") {
//         return foo + bar 
//     }
//     else if (typeof(foo) !== "number" && typeof(bar) !== "number") {
//         return NaN
//     }
// }
// addOnlyNumbers(5,Math.PI)
// addOnlyNumbers('fidget spinner', 22)


//_________________________q3______________________________________
// Write a function isAllNum with parameter arr. If every element of arr 
// is of type number, return true. Otherwise, return false.

// Invoke your function with the argument [1, 2, 3, 4, 5].

// Invoke your function with the argument [1, 2, 'mountain dew'].

// function isAllNum(arr) {
// var counter = 0
//     for(var i = 0; i <= arr.length-1; i++) {
//         if(typeof(arr[i]) === 'number') {
//             counter++
//         }
//         else {
//             counter += 0
//         }
//     }
//         if(counter === arr.length) {
//             return true

//     }
//         else {
//             return false
//         }
// }

// console.log(isAllNum([1, 2, 3, 4, 'hello']))



//______________________q4____________________________

// Write a function forceAllNum with parameter arr.  Convert every 
// element of arr that is of type number to the value 0 and return arr.

// function forceAllNum(arr) {
//     for(var i = 0; i <= arr.length-1; i++) {
//         if (typeof(arr[i]) === 'number') {
//             arr[i] = 0
//         }

//         }
//     } 
//     return arr
// }
// console.log(forceAllNum([1, 2, 'mountain dew']))


//______________________q5____________________________

// Write a function makeVowelsHyphens with parameter s. If s is not 
// a string, return undefined. If s is a string, convert every vowel 
// (a, e, i, o, u) into a hyphen (-) and return that string.

// function makeVowelsHyphens(s) {
//     var strNew = ' '

//     if(typeof(s) !== 'string') {
//         return undefined
//     }
//     else {
//         for(var i= 0; i <= s.length-1; i++) {
//             if (s[i] === 'a' 
//             || s[i] === 'e'
//             || s[i] === 'i'
//             || s[i] === 'o'
//             || s[i] === 'u') {
//                 strNew += '-'
//             }
//             else {
//                 strNew += s[i]
//             }
             
//         }
//     }
//     s = strNew
//     return s
// }
// makeVowelsHyphens('tuesday is my favorite day')
// makeVowelsHyphens({ isString: false, isObject: true })


//other way to do this

// function makeVowelsHyphens(s) {
//     var v = 'aeiouAEIOU';
//     if (typeof s === 'string') {
//         var stringArray = s.split('')
//         for (var i = 0; i < stringArray.length; i++) {
//             if (v.indexOf(stringArray[i]) !== -1) {
//                 stringArray[i] = '-';
//             }
//         }
//     return stringArray.join("");
//     }
//     return undefined
// }
// makeVowelsHyphens('tuesday is my favorite day');
// makeVowelsHyphens({ isString: false, isObject: true })


//other way
function makeVowelsHyphens(s){
	if (typeof s !== 'string'){
	return undefined
		}
var newWord = ''
var vowels = 'aeiou'
	for (var i = 0; i < s.length; i++){
		if (vowels.includes(s[i])){
			newWord += '-'
		}else{
			newWord += s[i]
		}
	}
return newWord
}

//______________________q6____________________________

// Write a function hasPropertyTacos with one parameter, 
// loljk. If loljk is an object with a defined property "tacos", 
// return true. Otherwise, return false.

// function hasPropertyTacos(loljk) {
//     if(typeof(loljk) === 'object' && loljk.hasOwnProperty('tacos')) {
//         return true
//     }
//     else{ 
//         return false
//     }
// }
// hasPropertyTacos({ name: 'Cody', tacos: 'so many tacos' })
// hasPropertyTacos('i am not even an object')

//______________________q7____________________________

// Write a function hasPropertyGeneric with two parameters, bigO and 
// littleP. If bigO is an object with a defined property littleP, 
// return true. Otherwise, return false.

// function hasPropertyGeneric(bigO, littleP) {
//     if(typeof(bigO) === 'object') {
//         for(var key in bigO) {
//              if(key===littleP) {
//              return true
//              }
//         }
//         return false
    
//     }
//     else {
//         return false
// }
// }

// hasPropertyGeneric({ name: 'cody', tacos: 3 },'tacos')
// hasPropertyGeneric({ name: 'cody', tacos: 3 }, 'sandwiches')


//______________________q8____________________________
// Write a function convertVowelsGeneric with parameters 
// str and sub. If str or sub is not a string, return undefined. 
// If str and sub are strings, replace every vowel (a, e, i, o, u) in 
// str with sub return that string.

// function convertVowelsGeneric(str,sub) {
//     var newStr = ''
//     if(typeof(str) === 'string' && typeof(sub) === 'string'){
//         for(var i=0; i <= str.length; i++) {
//             if (str[i] === 'a' 
//             || str[i] === 'e'
//             || str[i] === 'i'
//             || str[i] === 'o'
//             || str[i] === 'u') {
            
//                 newStr += sub
//             }
//             else {
//                 newStr += str[i]
//             }
//         }
//         return newStr
//     }
//     else {
//         return undefined 
//     }
// }
// convertVowelsGeneric('tuesday is my favorite day')
// convertVowelsGeneric('tuesday is my favorite day','cat')

// var todoArr = [
//     {
//         description: 'buy groceries',
//         completed: false
//     },
//     {
//         description: 'walk the dog',
//         completed: true
//     },
//     {
//         description: 'study for assessment',
//         completed: true
//     }
//     ];
// todoArr.description = 'study today'
// console.log(todoArr)
// console.log(todoArr['description'])
// console.log(todoArr[3])
// //delete todoArr[3].description


// var apples = [
//         {quantity:56, name:'Gala',price: 0.50, weight:0.33},
//         {quantity: 99, name:'Granny Smith', price: 0.50, weight:0.33},
//         {quantity: 1, name:'Pink Delicious',price: 0.50, weight:0.33}
//     ]; 
// apples[3] = {quantity: 4}

// console.log(apples)


var applesObject =  {quantity:56, name:'Gala',price: 0.50, weight:0.33}
applesObject.color = 'black'


for(var key in applesObject) {
    delete applesObject.price
}
console.log(applesObject)