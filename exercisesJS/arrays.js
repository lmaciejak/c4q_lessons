// var arr= ["a", 1, "b", 5, "c"]

// arr3.push('BOO!')
// arr3.push('YAY!')
// arr3.pop()

// var arr2 = arr.splice(2)

// console.log(arr); 

// for (var index = 0; index < arr.length; index++) {
//     var element = arr[index]; 
//     console.log(element); 
// } 


// var arr= ["a", 1, "b", 5, "c"]
// var str = arr.join(', ')

// var arr2 = str. split(' '); 

// var sum = arr2[1] /2; //will turn array into a number 

// console.log(arr2[1]+1)

//on a string if have a plus means concatenate the string, if perform function converts


//exercises arrays 

//q 1
//Write a function named `arrLength` that takes in an array as an argument. 
//The function should return the length of that array. 


// var arr= ["a", 1, "b", 5, "c"]
// function arrLength (arr) { 
//    return arr.length
// }

// console.log(arrLength(arr))


//q 2
//`longestArr` that takes in two arrays as arguments.

// var arr1= ["a", 1, "b", 5, "c"]
// var arr2= ["a", 1, "b", 5, "c"]
// function longestArr (arr1, arr2) {
//     if (arr1.length > arr2.length) {
//         return arr1
//     } else if (arr2.length > arr1.length) {
//         return arr2
//     }else {
//         return null
//     }
// }
// console.log(longestArr(arr1,arr2))

//q3

//function `middleElement` that takes an array as an 
//argument and returns the middle element of that array

// var arr2= ["a", 1, "b", 5, "c"]
// function middleElement (arr) {
//     if(arr.length % 2 === 0) { 
//         return "Oops, there's no middle..."
//     }else { 
//         return arr[((arr.length-1)/2)]
//     }
// }
// console.log(middleElement(arr2))

//q4
//function `sumArray` that takes as argument an array 
//of numbers and returns the sum of all these numbers.


// var arr2= [1, 1, 3, 5, 6]
// function sumArray (arr) {
//     var sum = 0
//     for(var i = 0; i < arr.length; i++) {
//     sum += arr[i] 
//     }
//     return sum
// }

// console.log(sumArray(arr2))


//q5
//Write a function range that takes two numbers as arguments: min and max. 
//The function will return and array with all the numbers, inclusive, between min and max.

// function range (min, max) {
//     var arrayIncl = []
//     for(var i = 0; i <= max; i++) { 
//         arrayIncl.push(min + i)
//     }
//    return arrayIncl
// } 
// console.log(range(2,6))

//q6 

//function rangeWithStep that 
//takes three numbers as arguments: min, max and step.

// function rangeWithStep(min, max, step) {
//     var arr = []
//     if (step) {
//         for (var i = min; i <= max; i += step) {
//             arr.push(i)
//         }
//     } else {
//         for (var i = min; i <= max; i++) {
//             arr.push(i)
//         }
//     }
//     return arr
// }

// console.log(rangeWithStep(4, 10, 2))

//q7 
//function named `doubleTrouble`

// var arr2= [1, 2, 3]
// function doubleTrouble (arr) { 
//     var newArray = []
//     for(var i = 0; i < arr.length; i++) {
//         newArray.push((arr[i])*2)
//     }
//  return newArray
// }
// console.log(doubleTrouble(arr2))


//ARRAYS LESSON 2


// var arr2= [1, 1, 3, 5, 6]
// function sumArray (arr) {
//     var sum = 0
//     for(var i = 0; i < arr.length; i++) {
//     sum += arr[i] 
//     }
//     return sum
// }

// console.log(sumArray(arr2))

// var arr1 = [1,2,3,4]
// var arr2 = [1,2,3,4]
// //not equal the 2 arrays 
// console.log(arr1 === arr2); 


// var arr1 = [1,2,3,4]
// var arr2 = arr1
// arr1.push(5)
// //not equal the 2 arrays 
// console.log(arr1,arr2); 


// var st21 = 'ABC'
// var str2 = 'ABC'
// console.log(str1 === str2)
//arrays are mutable so their references get compared unlike strings which are immutable 


// function deepEquals(arr1,arr2) {
//          if (arr1.length !== arr2.length) { 
//              return false; 
//          }
//     for (var i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false; 
//         }
//     }
//     return true; 
// }

// console.log(deepEquals([1,2,3,4], [1,2,3,4])); 
// console.log(deepEquals([1,2,3,5], [1,2,3,4])); 
// console.log(deepEquals([1,2,3], [1,2,3,4])); 
// console.log(deepEquals([1,2,3,4], [1,2,3])); 
// console.log(deepEquals([6],[3+3])); 


// var arr = [1,2,3]; 
// arr.push([4,5,6]); 

// console.log(arr[3][2])
//this is a 2-dimensional array 


// var arr = [1,2,3]; 
// var arr2 = arr.concat([4,5,6]); 

// console.log(arr2)
// //through concat have both arrays together in new variable

// //unshift puts stuff in the beginning 



// var arr = [1,2,3]; 
// arr.splice(3, 0, 4, 5,6)

// console.log(arr)
//splice is not our friend 

// var arr1 = [1,2,3]
// var arr2 = [4,5,6]

// function arrayInsert (a1, a2, where) {
//     for (var i = 0; i < a2.length; i++) {
//         a1.splice(where, 0, a2[a2.length-1-i])
//     }
// }
// arrayInsert(arr1, arr2, arr1.length)

// console.log(arr1)



// //or do where + i
// var arr1 = [1,2,3]
// var arr2 = [4,5,6]

// function arrayInsert (a1, a2, where) {
//     for (var i = 0; i < a2.length; i++) {
//         a1.splice(where + i, 0, a2[i])
//     }
// }
// arrayInsert(arr1, arr2, 0)

// console.log(arr1)


// var arr1 = [1,2,3]
// var arr2 = [4,5,6]

// function arrayInsert (a1, a2, where) {
//     for (var i = 0; i < a2.length; i++) {
//         a1.splice(where + i, 0, a2[i])
//     }
// }
// arrayInsert(arr1, arr2, 0)



// //unshift below does not work 
// var a1 = [1,2,3]
// var a2 = [4,5,6]
// a1.unshift(a2)

// console.log([a1]


//EXERCISES ARRAYS B

//q1
//function named `addTwoElements` that takes in three arguments: 
//an array, and two values to add to that array. The function should 
//add those two values to the end of the array.

// function addTwoElements (arr,val1,val2) { 
//     arr.push(val1,val2)
//     return arr
// } 

// console.log(addTwoElements([1,2,3], 4, 5))


//q2 function `withoutLastTwo` that takes an array 
//as an argument and returns a copy of the array without the last two elements.

// function withoutLastTwo (arr) {
//     arr.splice(arr.length - 2, 2)
//     return arr
// }

// console.log(withoutLastTwo(['dog', 'cat', 'bat', 'octopus', 'elephant'])); 

//q3 
//function `everyThird` that takes an array as an argument and returns a new array 
//that contains every third element of the original array.

// function everyThird(arr) {
// var arrNew = []
//     for(var i=2;i < arr.length; i += 3) {
//         arrNew.push(arr[i])
//     }
//     return arrNew
// }
// console.log(everyThird([1,2,3,4,5,6,7,8,9,10,11,12])); 

//q4
//Write a function that takes an array as an argument, and 
//returns a copy of the array with the last element at the front.

// function lastToFront(arr) {
// var arrNew = []
//     arrNew.push(arr[arr.length-1])
//     arrNew.push(arr.splice(0,arr.length-1))
//     return arrNew
// }
// console.log(lastToFront([1, 2, 3, 4]))







function lastToFront(arr) {
    var numAtEnd = 0
        numAtEnd += (arr[arr.length-1])
        arr.unshift(numAtEnd)
        arr.pop()
        return arr
    }
    console.log(lastToFront([1, 2, 3, 4]))
    





    