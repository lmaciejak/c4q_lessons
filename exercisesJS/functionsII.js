// function sumOfRange(min, max){
//     var sum = 0;
  
//     for (var count = min; count <= max; count++){
//       sum += count;
//       console.log('count: ', count)
//       console.log('sum ', sum)
//     }
//     return sum; 
//   }
  
//   console.log(sumOfRange(1, 5))

  function range (min,max) {
      var arr = []; 
      for (var i = min; i <= max; i++) {
          arr.push(i)
      }
      return arr; 
  }

  function sumArr(arr) {
      var sum = 0; 
      for (var i = 0; i < arr.length; i++) { 
          sum += arr[i]; 
      }
      return sum; 
  }

  function sumOfRange (min, max) {
    //   var arr = range(min, max)
    //   var sum = sumArr(arr)
      return sumArr(range(min,max))

  }
  console.log(sumOfRange(1,5)); 

  //as an argument to a function can put call to another function 



// can't use plus sign below ________________________________
// add1(n) => n + 1
// add1(add1(n)) 
//always look from innermost function 

function add1(num){
    return num +1; 
}
function add2(num){
    return add1(add1(num))
}
console.log(add2(2))

function add3(num){

}
//can do below to skip the add3 function 
function add4(num) {
    return add2(add2(num))
}
console.log(add4(2))