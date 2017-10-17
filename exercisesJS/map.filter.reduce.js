// var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

// names.forEach(function(name){
//     console.log(name)
// })


// Array.prototype.map = function(func) {
//     var results = [];
//     for (var i = 0; i < this.length; i++){
//         results.push(func(this[i]));
//     }

//     return results;
// };

// var arr = [1, 2, 3]
// var arr2 = arr.map(function(num){
//     return num + 1
// })

// console.log(arr2)

// //Create an array `arr3` using `map` that has all elements of `arr` doubled. I.e. `arr3 === [2, 4, 6]`
// // function double(num){
// //     var double = num * 2
// //     return double
// // }
// // var arr3 = arr1.map(double)


// //Create an array `arr3` using `map` that has all elements of `arr` doubled. I.e. `arr3 === [2, 4, 6]`
// //the below is annonymous 
// var arr3 = arr.map(function(num){
//     return num * 2
// })
// console.log(arr3)

// var arr2 = []
// arr.forEach(function(num){
//     arr2.push(num * 2)

// })


// Array.prototype.map = function(func) {
//     var results = [];
//     // for (var i = 0; i < this.length; i++){
//     //     results.push(func(this[i]));
//     // }
//     this.forEach(function(elem){
//         results.push(func(elem))
//     })

//     return results;
// };
// var arr1 = [1, 2, 3]
// var arr3 = arr1.map(function(num){
//     return num * 2
// })
// console.log(arr)

// var arr1 = ['cat', 'dog']
// var arr3 = arr1.map(function(ele){
//     return ele + ele
// })
// console.log(arr3)

// /////EXERCISES/////////////////
// //Q1
// var original = [1, 2, 3];

// //Use .map() to build a new array where every element of original is incremented by 10.

// var arrNew = original.map(function(num){
//     return num +10
// })
// console.log(arrNew)
   

// // // //q2/////////
// var original = [1, 2, 'buckle', 'my', 'shoe'];

// // // Use .map() to build a new array where every non-string element of original is converted to an empty string.

// var arrNew = original.map(function(elem){
//     if(typeof elem !== 'string'){
//         return ''
//     }
//     return elem

// })

// console.log(arrNew)

// //q3/////////
// var original = [1, 2, 3, 4, 5, 6];
// var even = original.filter(function(original){
//     return original % 2 === 0
// })
// console.log(even)


// // //q4

// var original = [true, false, [], '', 0, NaN, 'kittens', 500];
// var truthy = original.filter(function(original){
//     return original
// })
// console.log(truthy)


// //q 5 //////

// var arr = [1, 2, 6, 7, 100];
// //Use .reduce() to return the sum of every element in arr and assign it to a variable sumOfArr.
// var sumOfArr = arr.reduce(function(acc,value){
//     return acc += value; 
// })
// console.log(sumOfArr)

//q6

// var arr = [1, 2, 'popsicle', 6, 7, 'axe body spray', 100];
// // Use .filter() to build a new array containing only the number-type 
// // elements of arr and then use .reduce() to return the sum of every element of that and assign it to a variable sumOfArr.
// var numberElem = arr.filter(function(arr){
//     return (typeof arr === 'number')
//     })
//     var sumOfArr = numberElem.reduce(function(acc,value){
//         return acc += value; 
//     })
//     console.log(sumOfArr)
//     console.log(numberElem)


// //q7 ///////////
// var arr = [1, 2, 6, 7, 100];
// var sumOfArr = arr.map(function(num){ return num * 2}).reduce(function(acc,value){return acc += value; } );
// console.log( sumOfArr );
// // 232
// //Use .map() to build a new array which doubles every element of arr and then use .reduce() to return the sum of 
// //every element of that and assign it to sumOfArr.

// //q8//////
// var arr = [1, 2, 500, 6, 3, 26];

// //Use .reduce() to find the largest number in arr.

// var largest = 0
// arr.reduce(function(acc, value){
//     if (largest < value){
//     largest = value
// }
// }); 
// console.log(largest)

// //q9
// // Write a function elementDivisibleBy with parameters divisor and arr. Use .filter() to return a new array of every element of arr 
// // that can be evenly divided by divisor.

// var newArr = []
// function elementDivisibleBy(divisor, arr){
//     return arr.filter(function(arr){
    
//         return arr % divisor === 0
//     })
// }
// console.log(elementDivisibleBy(2, [1, 2, 3, 4]))
// // [2, 4]

//q10////////////////
// Write a function joinByReduce with arguments str and arr. Use .reduce() to return a string consisting of every element of arr separated by str.  
// (There will be an extra occurrence of str at the end of your return value - this is okay.)


function joinByReduce(str, arr){
    var result = arr.reduce(function(newStr, curr){
        return newStr += str + curr; 
    })
    return result
}

console.log( joinByReduce( '-', [2, 4, 'sportsball', 'sewing machine'] ));
// "2-4-sportsball-sewing machine-"
console.log( joinByReduce( '+', [1, 2, 3] ));
// "1+2+3+";










// //q11
// // Write a function countZeroes, which takes an array of numbers as its argument and returns the amount of 
// // zeroes that occur in it. Use reduce.

// var counter = 0
// function countZeroes(arr){
//     arr.reduce(function(acc, value){
//         if(value === 0){
//             counter += 1
//         }
//     })
//     return counter
// }
// console.log(countZeroes([1, 2, 0, 12, 0, 3, 0]))
// // // => 3