var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function clear () {
process.stdout.write('\u001B[2J\u001B[0;0f')
}


rl.on('line', function(input) {
   clear()
    var inputArr = input.split(' ')
    var counterAdd = 0
    var counterMin = inputArr[1]
    var counterMul = 1
    var counterDiv = 0
    //var toNum = Number(inputArr[i])
        for (var i = 1; i < inputArr.length; i++) {
                 if (inputArr[0] === '+') {
                    counterAdd += Number(inputArr[i])
                } else if (inputArr[0] === '-') {
                    counterMin = counterMin - inputArr[i]
                } else if (inputArr[0] === '*') {
                    counterMul *= inputArr[i]
                } else if (inputArr[0] === '/') {
                    counterDiv /= inputArr[i]
                } else if (isNaN[toNum[i]]) {
                    //  console.log("Enter a valid input.")
                }else {
                    var result = "Invalid input."
                }
            }                     console.log(counterAdd)
    //    console.log(result)
    })
   console.log("Input an Operation (+,-,*,/) and numbers separated by spaces.")
    

console.log(Number(('9 7 8').split(' ')))