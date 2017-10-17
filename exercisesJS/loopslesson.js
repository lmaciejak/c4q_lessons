//while loop, one below is infinite
/*
var num = 1
while (num <= 10) {
  console.log('the number is: ' + num)
  num += 2  
}

for (var num = 1; num <= 10; num += 1) {
    console.log('the number is: ' + num)
  }
*/
/*
for (var num = 1; num <= 10; num += 1) {
    console.log('the number is: ' + num)
}
console.log(num)
*/
/*
for (var i = 0; i <= 10; i += 1){
    if (i % 2 === 0){
      console.log(i + ' is even')
    } else {
      console.log(i + ' is odd')
    }
  }
*/
//find cube numbers 
/*  ******* review 
var sum = 0
  for (var i = 1; i <= 10; i += 1){
    sum += i + (i-1) // i * 2 - 1
    console.log(sum)
  }
*/

//COUNTDOWN CLOCK
  
/*for (var i = 10; i > 0; i -= 1){
      console.log(i)
  } 
      console.log('BLAST OFF')
    */

//EXERCISES
//1. Write a function that takes a number as an 
//argument and logs all the numbers, descending, between the number and 1.
/*
function logAllNum (num) {
    for (var i = num; i >= 1; i -= 1){
    console.log(i) 
    }
}
logAllNum(10)
   */ 
 
//2 
/*
function allEven(num) {
    for(var i = 0; i <= num; i+=2) {
        console.log(i)
    }
}
allEven(54)
*/

// 3 Write a a function that takes a number as 
//an argument, and prints all the odd numbers between 1 and the number.

/*
function printsOdd(num) {
    for(var i = 1; i <= num; i+= 2) {
        console.log(i)
    }
}
printsOdd(54)
*/

// 4 Write a function that takes a number num as an argument and logs 
//that many multiples of 9. 
//For example, when given 5 as the argument, the function will log:
//9
//18
//27
//36
//45

/*
function multiples(num) {
    for(var i = 9; i <= (num * 5); i += 9) {
        console.log(i)
    }
}
multiples(5)
*/

// 5 
//Use the assignGrade function (given below). 
//Write a function that logs each number from 60 - 100 along with 
//its corresponding letter score. 
//E.g. For each number from 81 to 90, log B, like so:

/*
function assignGrade(score) {
    if (score > 90) {
        return 'A'
    } else if (score > 80) {
        return 'B'
    } else if (score > 70) {
        return 'C'
    } else if (score > 65) {
        return 'D'
    } else {
        return 'F'
    }
}

function logs(score) {
    for(var i = 60; i <= 100; i += 1) {
        console.log(i + " " + (assignGrade(i)))
    }
}
logs()
*/

//6 
/*
function fizzOrBuz() {
    for(var i = 1; i <= 100; i++) {
        if(i % 5 === 0) {
            console.log("Buzz")
        }
        if(i % 3 === 0) {
            console.log("Fizz")
        }
        console.log(i)   
    } 
}

fizzOrBuz()
*/
//7
/*
function fizzAndBuzz(num) {
    for(var i = 1; i <= 100; i += 1){ 
       if (i % 3 === 0 && i % 5 === 0) {
        console.log ("FizzBuzz")
    }
       else if (i % 3 === 0) {
        console.log ("Fizz")
    }
       else if (i % 5 === 0) {
        console.log ("Buzz")
    }
       else {
        console.log (i)
       }
}
}
fizzAndBuzz()
*/

//8 
/*
function bottleSong(num) {
    for(var i = 99; i >= 2; i -= 1) {
        if (i > 2) {
            console.log( 
                i + " bottles of beer on the wall, " +
                
                i + " bottles of beer. Take one down, pass it around, " +
                
                (i-1) + " bottles of beer on the wall.")

        } else if (i === 2) {
            console.log(
                "2 bottles of beer on the wall, 2 bottles of beer. " +
                "Take one down, pass it around,1 bottle of beer on the wall. ")        
        }
}
}
bottleSong()

console.log ("1 bottle of beer on the wall, 1 bottle of beer. Take one down, pass it around,"
+ "No more bottle of beer on the wall.")
*/

/*
function assignGrade() {
    for (var i = 60; i <= 100; i++) {
        if (i > 90) {
            console.log(i +'-A')
        } else if (i > 80) {
            console.log(i +'-B')
        } else if (i > 70) {
            console.log(i + '-C')
        } else if (i > 65) {
            console.log(i+ '-D')
        } else {
            console.log(i + '-F')
        }
    }
}

assignGrade()

*/
//make chess board 

// # # #
//  # # #
// # # #
//  # # #
// # # #
//  # # #

/*
function makeBoard(num) {
    var board = ' '; 
    for (var row = 0; row < num; row ++) {
        for (var column = 0; column < num; column++) {
            if ( (column + row) % 2 === 0) {
                board += '#'
            } else {
                board += ' ';
            }
        }
        board += '\n'; 
    }
    return board; 
}

console.log(makeBoard(8)); 
*/
/*
var counter = 0
function sumFibs(num) {
    return num;
  }
  function fib () {
    for (i = 1; i <= num; i)
  }
  if (num % 2 !== 0) {
    
  }
  //F(n) = F(n-1) + F(n-2)
  sumFibs(4);
*/
  var counter = 0
  function fib() {
     for(var i = 0; i <= 0; i+= counter){
      counter = (i-1) + (1-2);
    }
  }
  console.log(fib(10))

  //Given a positive integer num, return the sum of all odd 
  //Fibonacci numbers that are less than or equal to num.
  
  //The first two numbers in the Fibonacci sequence are 1 and 1. 
 // Every additional number in the sequence is the sum of the 
 // two previous numbers. The first six numbers of the Fibonacci 
  //sequence are 1, 1, 2, 3, 5 and 8.
  
  var posInt = 7; 
  function fib (num) {
      for (i = 1 ; i <= num; i += )
  }

  fibn []