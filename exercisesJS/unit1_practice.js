// // Write a function firstString that takes as argument an array: arr. The function returns the first string in the array. 
// // If there are no strings in the array, the function returns undefined.

// function firstString(arr){
//     for(var i = 0; i < arr.length; i++){
//         if(typeof(arr[i]) === 'string'){
//             return arr[i]
//         } 
//     }
//    return undefined
// }

// console.log(firstString([1, 5, 2, 6]))
// // returns undefined

// console.log(firstString([3, 7, 'banana', 'kierkegaard']))
// // returns 'banana'


// function useCallback(callback){
//     return callback(2, 1)
//  }

//  function add(num1, num2){
//     return num1 + num2
//  }

//  console.log(useCallback(add))

//  var arr = [4, 6, 8, 10, 12]
//  // getting [6, 8, 10]. arr will still be the same.
//  var sliceOfArr = arr.slice(1, 4)
//  console.log(sliceOfArr)



// Create a function logArrTypes that uses the forEach (Links to an external site.)Links to an external site. method to log each array 
// element followed by its type. For example:

//q60 
// var mixedArr = [1, 'cat', true]
// function logArrTypes(arr){
//     arr.forEach(function(element){
//         console.log(element + " is a " + typeof element)
//     });
// }
// logArrTypes(mixedArr)


// var mixedArr = [1, 'cat', true]
// function logArrTypes(arr){
//     arr.forEach(function(element){
//         console.log(element + " is a " + typeof element)
//     }); 
// }
// logArrTypes(mixedArr)


// var films = [
//     {
//         "id": 70111470,
//         "title": "Die Hard",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": 4.0,
//     },
//     {
//         "id": 654356453,
//         "title": "Bad Boys",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": 5.0
//     },
//     {
//         "id": 65432445,
//         "title": "The Chamber",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": 4.0,
//         "bookmark": []
//     },
//     {
//         "id": 675465,
//         "title": "Fracture",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": 5.0,
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     }
// ]

// var idAndTitlePairs = films.map(function (film) {
//     return { id: film.id, title: film.title };
// });
// // console.log(idAndTitlePairs)


// var bestFilmIds = films
//     .filter(function (film) {
//         return film.rating === 5.0;
//     })
//     .map(function (film) {
//         return film.id;
//     });
// // console.log(bestFilmIds)


// Create a function map that takes as input an array arr and a function func. We expect func to take a single value as input and 
// return a single value as output. For example, it may take a number and return the number incremented by 1.

// map will create a new array. It will call func repeatedly, passing one-by-one each element of arr as argument. It will insert  
// each of the output values from func into the new array. Finally, map will return the new array.

// map will not modify the array that is passed to it as an argument.

// var arr = [1, 2, 3]
// var addArr = arr.map(function(num) { return num + 1 })
// console.log(addArr)
// // will log: [2, 3, 4]



// Write a function `isPalindrome` that receives a string and returns true if the string is a palindrome and false if it is not a palindrome. 

// function isPalindrome(str){
//     for(var i = 0; i <= Math.ceil(str.length/2); i++){
//         if(str[i] === str[str.length - 1 -i]){
//             return true
//         }
//     return false
//     }    
// }
// console.log(isPalindrome("racecar")) // returns true
// console.log(isPalindrome("tattarrattat")) // returns true
// console.log(isPalindrome("dog"))


//q 37 
// Write your own `mySubString` function that receives three arguments, a string and two numbers: where to start building the substring and how many characters to include.

// mySubString("hello world", 5, 4) // returns " wor"
// mySubString("hello world", 3, 8) // returns "lo world"
// mySubString("hello world", 2, 6) // returns "llo wo"

// HTML Editor Keyboard Shortcuts

//review map
// // Use .map() to build a new array where every element of original is incremented by 10.
// var original = [1, 2, 3];
// var newArr = original.map(function(elem){
//     return elem + 10
// }); 

// console.log(newArr)


// //q2
// var original = [1, 2, 'buckle', 'my', 'shoe'];

// // Use .map() to build a new array where every non-string element of original is converted to an empty string.
// var arrNew = original.map(function(elem){
//     if(typeof elem !== 'string'){
//         return ''
//     }
//     return elem 
// }); 
// console.log(arrNew)

// //q3
// var original = [1, 2, 3, 4, 5, 6];

// //Use .filter() to build a new array containing only the evenly numbered elements of original.

// var newArr = original.filter(function(elem){
//     return elem % 2 ===0
// }); 
// console.log(newArr)


// var original = [true, false, [], '', 0, NaN, 'kittens', 500];

// //Use .filter() to build a new array containing only the truthy elements of original.
// var newArr = original.filter(function(elem){
//     return elem
// });
// console.log(newArr)

// //q 5
// var arr = [1, 2, 6, 7, 100];
// //Use .reduce() to return the sum of every element in arr and assign it to a variable sumOfArr.

// var sumOfArr = arr.reduce(function(acc,curr){
//     return acc + curr 
// }); 
// console.log(sumOfArr)

//q 6
// var arr = [1, 2, 'popsicle', 6, 7, 'axe body spray', 100];
// // Use .filter() to build a new array containing only the number-type elements of arr and then use .reduce() to return the 
// // sum of every element of that and assign it to a variable sumOfArr.

// var newArr = arr.filter(function(elem){
//     return typeof elem === 'number'
// });

// var sumOfArr = newArr.reduce(function(acc, elem){
//     return acc + elem
// })
// console.log(newArr)
// console.log(sumOfArr)

//q7
// var arr = [1, 2, 6, 7, 100];
// // Use .map() to build a new array which doubles every element of arr and then use .reduce() to return the sum 
// // of every element of that and assign it to sumOfArr.

// var newArr = arr.map(function(elem){
//     return elem * 2
// }); 

// var sumOfArr= newArr.reduce(function(acc, curr){
//     return acc + curr
// }); 
// console.log(newArr)
// console.log(sumOfArr)

// //q8 
// var arr = [1, 2, 500, 6, 3, 26];

// // Use .reduce() to find the largest number in arr.

// var largest = arr.reduce(function(acc, curr){
//     if(acc < curr) {
//          acc = curr
//     }
//     return acc 
// }); 
// console.log(largest)

// //q 9
// // Write a function elementDivisibleBy with parameters divisor and arr. Use .filter() to return a new array of 
// // every element of arr that can be evenly divided by divisor.

// var newArr = []
// function elementDivisibleBy(divisor, arr){
//     var result = arr.filter(function(arr){
//         return arr % divisor === 0
//     })
//     return result
// }

// console.log(elementDivisibleBy(2, [1, 2, 3, 4]));
// // [2, 4]
// console.log(elementDivisibleBy(5, [5, 25, 4, 8, 100]));
// // [5, 25, 100]


//q10
// Write a function joinByReduce with arguments str and arr. Use .reduce() to return a string consisting of every element of arr separated 
// by str.  (There will be an extra occurrence of str at the end of your return value - this is okay.)

// function joinByReduce(str, arr){ 
//     var result = arr.reduce(function(newStr, arr){
//         return newStr += str + arr
//     })
//     return result
// }

// console.log( joinByReduce( '-', [2, 4, 'sportsball', 'sewing machine'] ));
// "2-4-sportsball-sewing machine-"



//q11
// Write a function countZeroes, which takes an array of numbers as its argument and returns the amount of zeroes 
// that occur in it. Use reduce.


// function countZeroes(arr){ 
//     var counter = 0
//     var result = arr.reduce(function(acc, curr){
//         if(curr === 0) { 
//             counter++
//         }
//     }); 
//     return counter
// }

// console.log(countZeroes([1, 2, 0, 12, 0, 3, 0]))
// // => 3

// recipe = {
// name: "Mole",
// servings: 2,
// ingredients: ["cinnamon","cumin","cocoa"]
// }

// function prettyLog(recipe){
//     for (var prop in recipe) { 
//       if (prop === 'ingredients') {
//         console.log('ingredients:' + recipe['ingredients'].join(' > '))
//       } else {
//         console.log(recipe[prop])
//       }
//     }
//   }
//   prettyLog(recipe)


// var recipe = {
//     name: 'Mole',
//     servings: 2,
//     ingredients: ['cinnamon', 'cumin', 'cocoa']
// };

// // function listOfFavRec(object) {
// //     for (var key in object) {
// //         if (Array.isArray(object[key]) === true) {
// //             console.log(key + object[key].join(","));
// //         } else {
// //             console.log(key + ": " + object[key]);
// //         }
// //     }

// function logRecipe(recipe){
//     for (var key in recipe) { 
//       if (key === 'ingredients') {
//         console.log('ingredients:') 
//         for (var i = 0; i < recipe['ingredients'].length; i++) { 
//           console.log(recipe['ingredients'][i])
//         }
//       } else {
//         console.log(key + ": " + recipe[key])
//       }
//     }
//   }
//   logRecipe(recipe)


//   var films = [
//     {
//         "id": 70111470,
//         "title": "Die Hard",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": 4.0,
//     },
//     {
//         "id": 654356453,
//         "title": "Bad Boys",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": 5.0
//     },
//     {
//         "id": 65432445,
//         "title": "The Chamber",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": 4.0,
//         "bookmark": []
//     }
// ]
// console.log(Object.keys(films[0]))
// console.log(Object.values(films[0]))


//in array cannot access all object properties without loop


var films = [
    {
      name: 'Psycho',
      director: 'Alfred Hitchcock',
      released: 1960
    },
    {
      name: 'Citizen Kane',
      director: 'Orson Welles',
      released: 1941
    },
    {
      name: 'The Usual Suspects',
      director: 'Bryan Singer',
      released: 1995
    }
  ]

  console.log('name: ' + films[0].name);
  console.log('name: ' + films[1].name)
 
//   console.log(films[0])




// function doubleTrouble (arr) { 
    
//     var newArr = []
    
//             for (var i = 0; i < arr.length; i++) { 
    
//                    newArr.push(arr[i] * 2) 
    
//             } 
    
//       return newArr 
    
//     } 

//     function doubleTrouble (arr) { 
//         var newArr = []
        
//             arr.map(function(elem) { 
        
//                   newArr.push(elem * 2) 
        
//            }) 
        
//         return newArr 
        
//         } 
    
//     console.log(doubleTrouble([1, 2, 3]))
//     console.log(doubleTrouble([10, 8, 5]))


// function lastToFirst(arr) {
    
//        var newArr = []
       
    
//              newArr.push(arr.pop())
   
    
//           arr.map(function(elem) {
    
//                   newArr.push(elem) 
    
//            }); 
    
//        return newArr
    
//     } 

// console.log(lastToFirst([1, 2, 3, 4])); 

// function prettyLog (name, servings, ingredients) { 
    
//            var recipe =  { 
    
//                    name:name, 
    
//                    servings:servings, 
    
//                    ingredients:ingredients.join(' > ') 
    
//                   } 
//                 return recipe
//         } 
// console.log(prettyLog('Mole', 2, ['cinnamon', 'cumin', 'cocoa']))



// function conservativeSpender(balance)  {
//     return balance > 100
//   }
  
//   function liberalSpender(balance) {
//     return balance > 10
//   }
  
//   function horribleSaver (balance) {
//     return balance > 0
//   }
   
// function smarterShouldIBuyThis(balance, price, callback) { 
    
//           if (callback(balance - price)) { 
    
//              return "Sure! I've got the money!"
    
//            } else { 
    
//             return "Nope! Gotta keep my savings up!"
    
//             } 
    
//     } 
    
//     console.log(smarterShouldIBuyThis(45, 50, horribleSaver))
//     // will log "Nope! Gotta keep my savings up!"


// function map (arr) { 
    
//     var newArr = []
    
//          arr.map(function(elem) { 
    
//               newArr.push(func(elem))
    
//             })
    
//           return newArr
    
//     } 
    
    
    
//     function func (val) { 
    
//        return val + 1
    
//     }
   
//     console.log(map([1, 2, 3]))
//     // will log: [2, 3, 4]




// function oddCaps(str) {


//     if (typeof str !== 'string') {

//         return undefined
//     }

//     else {
//         var newStr = ' '

//         for (var i = 0; i < str.length; i++) {

//             if (i % 2 === 1) {

//                 newStr += str[i].toUpperCase()

//             }

//             else {

//                 newStr += str[i]

//             }

//         }
//         return newStr

//     } 

// }

    
//   console.log(oddCaps('giraffe'))
    


// function fizzAndBuzz () { 
    
//         for(var i = 1; i <= 100; i++) { 
    
//             if (i % 3 === 0 && i % 5 ===0 ) { 
    
//                console.log('FizzBuzz') 
    
//             } 
    
//             else if (i % 3 ===0 ) { 
    
//               console.log('Fizz') 
    
//             } 
    
//             else if ( i%5 ===0 ) { 
    
//             console.log('Buzz') 
    
//            } 
    
//           else { 
    
//            console.log (i)
    
//          }

//         }
//     }
//   fizzAndBuzz()
    
    
//console.log([ [1, 2, 3], [4, 5], [6] ].join(','))


// function flatten (arr) { 
    
//     var newArr = []

//    // var newStr = arr.concat()
//     console.log(newStr)
//     //arr.join(',')
    
//         newStr.reduce(function(acc, curr) { 
    
//          newArr.push(curr)
    
//         })
    
//     return newArr
//     }

//    console.log(flatten ([ [1, 2, 3], [4, 5], [6] ]))




// function onlyUnique (arr) { 
    
//     var testArr = []
    
//        arr.map(function(elem) { 
    
//           if (testArr.includes(elem)) { 
    
//           } 
    
//          else{ 
    
//           testArr.push(elem)
    
//           } 
    
//         }); return testArr
    
//      }

//      console.log(onlyUnique([1, 2, 3, 1, 4, 3]))


// function flatten (arr) { 
    
//         var newArr = arr.reduce(function(acc, curr) { 
    
//            return acc.concat(curr)
//         })
    
//     return newArr
    
//     } 
    
//     console.log(flatten([ [1, 2, 3], [4, 5], [6] ]))






    //  function getLast(str) { 
        
    //          return str.slice(str.length-1)
        
    //     }

    //     console.log(getLast('jimmy'))



    // function getAverageAge (arr) { 
    //     var agesArr = []
    //     for (var i = 0; i < arr.length; i++) {
    //     agesArr.push(arr[i].age)
    // }
    //     var average = agesArr.reduce(function(acc, curr) { 
    //         return Math.ceil((acc+curr) / agesArr.length)
    //     })
    //     return average 
    // } 

    // var list1 = [
    //     { firstName: 'Maria', lastName: 'Y.',  age: 30, language: 'JavaScript' },
    //     { firstName: 'Victoria', lastName: 'T.',  age: 35, language: 'Python' },
    //   ];
    //   console.log(getAverageAge(list1)) // => 33
      


     //q43 
     //arr.filter(function(x,i) {return i% 3 === 2}) //starting with 2

    //  //q54 
    //  var recipe = { 
    //      ingredients: ['cinnamon','cumin','cocoa']
    //  }

    //  function prettyLog(o) {
    //      console.log('name:', o.name); 
    //      c
    //  }
     
     
     
    //  function prettyLog (name, servings, ingredients) {
    //     var recipe = {
    //     name:name,
    //     servings:servings,
    //     ingredients:ingredients.join(' > ')
    //     }
    //     return recipe
    //     }



    //q2
// Write a function everyElem that re-implements the built-in array method every. The function will take as arguments 
// an array and a test function that, when called with an array element as argument, returns true or false. Your function will 
// return true if all elements of the array pass the test function. Hint: you can solve this using the array filter method.

// function isEven(num) {
//     return num % 2 === 0
//   }


// function everyElem (arr, testFunc) { 
    
//        var newArr =  arr.filter(function(i, elem) { 
    
//               return testFunc(arr[i]) === true
//             })
//            if (newArr.length === arr.length) { 
//                return true 
//            }  return false
//         }

//      console.log(everyElem([2, 4, 6], isEven))

// function everyElem (arr, testFunc) { 
    
//        var newArr =  arr.filter(function(elem) { 
    
//               return testFunc(elem) 
//             })
//            if (newArr.length > 0) { 
//                return true 
//            }  return false
//         }

//      console.log(everyElem([5], isEven))


// function onlyUnique (arr) { 
    
//     var testArr = []
    
//        arr.map(function(elem) { 
    
//           if (testArr.includes(elem)) { 
    
//           } 
    
//          else{ 
    
//           testArr.push(elem)
    
//           } 
    
//         }); return testArr
    
//      }
    
//     console.log(onlyUnique([1, 2, 3, 1, 4, 3]))



// function getLast(str) { 
//     return str.slice(-1)
//  }

//  console.log(getLast('jimmy'))
//  // => y

//  var x = ["foo", "bar", "hansel", "gretel", 0, 1, "pikachu"];
//  console.log(x.slice(1,4));

//  function replaceWithDog(str) {
//     return str.replace(/"animals"/g, "dogs")
// }

// function replaceWithCat(str) {
//     return str.replace(/"animals"/g, "cats")
// }

// console.log()


// function flatten (arr) {
//     var newArr = arr.reduce(function(acc, curr) {
//     return acc.concat(curr)
//     })
//     return newArr
//     }
//     console.log(flatten([ [1, 2, 3], [4, 5], [6] ]))


//     var copyWithoutLast = 'jimmy'.slice(0, - 1)
//     console.log(copyWithoutLast)


function isEven(num) {
    return num % 2 === 0
  }

  function everyElem2(arr, callback) {
    var newArr = arr.filter(callback)
    return arr.length === newArr.length
}
console.log(everyElem2([2, 4, 6], isEven)); // → true
console.log(everyElem2([2, 3, 4, 6], isEven)); // -> false

function lastToFirst(arr) { 
    var last = arr.pop()
    arr.unshift(last) 
    return arr 
  }

  console.log(lastToFirst([1, 2, 3, 4])); 