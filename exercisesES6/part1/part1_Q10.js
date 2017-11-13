const sum = (arr) => { 
    return arr.reduce((acc,curr) => acc += curr)
}
console.log(sum([1,2,3]))