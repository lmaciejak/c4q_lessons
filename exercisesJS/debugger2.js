function flatten(arrOfArrs){
    var flat = arrOfArrs.reduce(function(acc, curr){
        return acc.concat(curr)
    }, [])
    return flat;
}


var flat = flatten([[1,2,3], [4,5,7], [8,9,10]])
console.log(flat)