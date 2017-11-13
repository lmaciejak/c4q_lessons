let sum = 0; 
const sumAll = (num) => sum += num 

const forEachEl = (arr, func) => { 
    return arr.map(elem => func(elem))
}

console.log(forEachEl([1,2,3,11],sumAll))