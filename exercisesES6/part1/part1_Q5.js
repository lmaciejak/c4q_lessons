let sum = 0; 
const sumAll = (num) => sum += num 

const forEachEl = (arr, func) => { 
   console.log(arr.map(elem => func(elem)))
}
forEachEl([1,2,3,11],sumAll)