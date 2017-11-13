// //intro exercise
// const makeStory = name => { 
//     let story = `"Remember, go straight to Grandma's house," ${name}'s mother cautioned. 
//"Don\'t dawdle along the way and please don\'t talk to strangers!  The woods are dangerous."
//     "Don't worry, mommy, said ${name}, I\'ll be careful"`
//     return story
// }
// console.log(makeStory('Luiza'))



// // Q1 - another way 
// const logAll = (arr) => { 
//     arr.forEach(num => console.log(num))
//  }
 
//  logAll([1, 2, 3])


// // Q1
// const logAll = (arr) => { 
//     arr.forEach(function(num){
//     console.log(num)
//    }) 
// }

// logAll([1, 2, 3])


// // Q2
// const greaterThan10 = (arr) => { 
//    return arr.filter(num => num > 10)
// }

// console.log(greaterThan10([2, 4, 10, 11, 13, 15]))

// //Q3
// const filterEvens = (arr) => { 
//     return arr.filter(num => num % 2 === 0)
// }
// console.log(filterEvens([0, 10, 13, 15, 16]))

// //Q4
// const forEachSum = (arr) => { 
//     let sum = 0
//     arr.forEach(num => sum += num)
//     return sum 
// }
// console.log(forEachSum([1, 3, 4]))

// //Q5 
// let sum = 0; 
// const sumAll = (num) => sum += num 


// const forEachEl = (arr, func) => { 
//     return arr.map(elem => func(elem))
// }

// console.log(forEachEl([1,2,3,11],sumAll))



// const flattened = [[0, 1], [2, 3], [4, 5]].reduce((a, b) => a.concat(b), []);
// // flattened is [0, 1, 2, 3, 4, 5]


// const forEachEl = [1,2,3,11].reduce((a,b) => a += b)
// console.log(forEachEl)

// let sum = 0
// const forEachEl = (arr) => { 
//     arr.forEach(function(num){ 
//         sum += num
//     })
//     return sum 
// }
// console.log(forEachEl([1,2,3,11]))


// let sum = 0
// const forEachEl = (arr) => { 
//     arr.forEach(num => sum += num)
//     console.log(sum)
// }

// forEachEl([1,2,3,11])


// //q6 

// const triple = (arr) => { 
//     return arr.map(elem => elem * 3)
// }
// console.log(triple([1,2,3])) 




// //q7 
// const stringsToNums = (arr) => {
//     return arr.map(elem => Number(elem))
// } 
// console.log(stringsToNums(['1','2','3'])) 


// //q8 
// const firstCharToUpper = (str) => { 
//     let newArr = str.split(' ')
//      return newArr.map(elem => elem[0].toUpperCase() + elem.slice(1)).join(' ')
// }
// console.log(firstCharToUpper('hello there how are you'))

// //q9
// const double = (num) => num * 2

// const map = (arr, func) => { 
//     return arr.map(elem => func(elem))
// }
// console.log(map([1,2,3], double))

// //q10 
// const sum = (arr) => { 
//     return arr.reduce((acc,curr) => acc += curr)
// }
// console.log(sum([1,2,3]))


// //q11
// const reduceMin = (arr) => { 
//     return arr.reduce((acc,curr) =>  curr > acc ? acc : curr)
// }         

// console.log(reduceMin([4,2,3,10,1]))

// const reduceMin = (arr) => { 
//     return arr.reduce((acc,curr) =>  { 
//         if (curr > acc) {
//             return acc
//         } else {
//             return curr
//         }
//      }
//     ) 
// }      

// console.log(reduceMin([4,2,3,10,1]))




// //q12
// const countOddsAndEvens = (arr) => { 
//      return arr.reduce((acc, curr, index) => (curr % 2 !== 0) ? acc + 1 : (acc))
//      }

    //  let even = arr.reduce((acc,curr) => {curr % 2 === 0 ? acc++ :acc}, 0)
     // console.log(odd)
     


const countOddsAndEvens = (arr) => { 
    let even = arr.reduce(function(total,x){return x % 2 ===0 ? total+1 : total}, 0)
    let odd =  arr.reduce(function(total,x){return x % 2 !== 0 ? total+1 : total}, 0)
    return {even, odd}
}

console.log(countOddsAndEvens([1,2,3,4,5,6]))
console.log(countOddsAndEvens([1,2,3,4,5,6,3,3]))


//console.log(arr.indexOf('mouse'))

// for (let i = 0; i < 10; i++){ 
//     console.log(i)
// }
//console.log(i)

const dog = { 
    name: 'pluto', 
    bark: function(){
    console.log(this.name + ' says woof')
}
}
dog.bark(); 

const animals = [ 
    'cat', 
    'dog'
]; 

function getLengths (arr) {
return arr.map(elem => elem.length); 
}

console.log(getLengths(animals))