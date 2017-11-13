const reduceMin = (arr) => { 
    return arr.reduce((acc,curr) =>  curr > acc ? acc : curr)
}         
