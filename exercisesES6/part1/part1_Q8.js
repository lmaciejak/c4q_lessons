const firstCharToUpper = (str) => { 
    let newArr = str.split(' ')
     return newArr.map(elem => elem[0].toUpperCase() + elem.slice(1)).join(' ')
}