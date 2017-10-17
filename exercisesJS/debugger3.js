// function flatten(arrOfArrs){
//     var flat = arrOfArrs.reduce(function(acc, curr){
//         return acc.concat(curr)
//     }, [])
//     return flat;
// }


// var flat = flatten([[1,2,3], [4,5,7], [8,9,10]])
// console.log(flat)



function stringsToNumbers(arrOfStr) { 
    var arrNew = arrOfStr.map(function(elem) { 
    return Number(elem)
    }); 
    var arrOfNum = arrNew.filter(function(elem) { 
    return (typeof elem === 'number') 
    }); 
    return arrOfNum
   } 


   var arr = ["2", "4", "rabbit", "cat", "6"] 
   console.log(stringsToNumbers(arr))