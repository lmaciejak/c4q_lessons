const countOddsAndEvens = (arr) => { 
    let even = arr.reduce(function(total,x){return x % 2 ===0 ? total+1 : total}, 0)
    let odd =  arr.reduce(function(total,x){return x % 2 !== 0 ? total+1 : total}, 0)
    return {even, odd}
}
