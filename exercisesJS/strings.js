/*
var txt = 'Hello Monday'; 
 for (var i = 0; i < txt.length; i++) {
     console.log(txt[i]); 
 }
 */


/*
 var firstName = 'Peter'; 
 var lastName = 'Lada'; 

 //function fullName (firstName, lastName) {
 //    return firstName + ' ' + lastName; 
 //}

 var fullName = firstName; 
 fullName += ' '; 
 fullName += lastName; 

 console.log(fullName); 
*/

/*
var str = ' '; 
var num = 10

for (var i = 1; i <= num; i++) {
    str += i 
    if (i > num) {
     str += ', '
    }str += i; 
}
console.log(str) 
*/

//Let's write a table like we did in the last lesson:


// var str = ' '; 
// var num = 5; 

// for (var i = 1; i <= num; i++) {
//     if (i <= num) { 
//         str += i + ', '
//         console.log (i + (str.slice(0, -2)));
//     }
// }


// below prints 
// 1  1
// 3  1, 2, 3
// 5  1, 2, 3, 4, 5
// 7  1, 2, 3, 4, 5, 6, 7


// var list;
// var num = 7

// function joinList(n) {
//     str = ''
//     for (var j = 1; j <= n; j++) {
//         if (j > 1) {
//             str += ', '
//         }
//         str += j;
//     }   
//     return str; 
// }

// for (var i = 1; i <= num; i += 2) {
//     list = joinList(i);
//     console.log(i + ' ' + list);
// }


// 1  1, BLAST OFF
// 4  4, 3, 2, 1, BLAST OFF
// // 7  7, 6, 5, 4, 3, 2, 1, BLAST OFF

// var list;
// var num = 7

// function joinList(n) {
//     str = ''
//     for (var j = i; j > 0; j--) {
//         if (j < 1) {
//             str += j
//         }
//         str += j + ', '
//     }   
//     return str; 
// }

// for (var i = 1; i <= num; i += 3) {
//     list = joinList(i);
//     console.log(i + ' ' + list + 'BLASTOFF');
// }

// another way to do the above below
// var list;
// var num = 7

// function joinList(n) {
//     str = ''
//     for (var j = n; j >= 1; j--) {
//         if (j > 0) {
//             str += ', '
//         }
//         str += j;
//     }   
//     return str + " " + "Blast Off"
// }

// for (var i = 1; i <= num; i += 3) {
//     list = joinList(i);
//     console.log(i + ' ' + list); 

// var name = "Andrew"
// if (name.length % 2 === 1) {
//     console.log(name[Math.ceil(name.length/2)]); 
// } else {
//     console.log(name.substring(
//     name.length / 2 - 1, 
//     name.length / 2 + 1
//     ))
// }

// var name = 'peter' //name = 'PETER'
//...
// Peter


// var name = 'peter'
// var newName = name.toLowerCase()
// var upperName = name[0].toUpperCase() + name.slice(1)
// console.log (upperName)

//or do this way 

// var name = "Peter" ;
// console.log(name[0].toUpperCase() + name.substring(1, name.length).toLowerCase())

// //Create a function called capitalLast that takes a single argument, a string, and 
// //returns a copy of the string with the last letter capitalized. For example:

// //below does not work 
// var name = 'PETER';
// name = name.replace(name[0], name[0].toUpperCase())
// console.log(name);

// console.log('TESTING'.slice(4)); 

// console.log('TESTING'.split('T'));

// var name = 'andre'
// //name [0] = name [0].toUpperCase()
// name += ' the king'
// console.log(name) 

//can add to strings but can't remove 

// var name = 'alice'
// var capitalized = name[0].toUpperCase() + name.slice(1)
// console.log(capitalized)

// if don't know how many times going to run it do while loops

// function nameCase(name) {
//     var theRest = name.toLowerCase()
//     var space = theRest.indexOf(' '); 
//     var result = ' '; 
//     while (space !== -1) {
//         var part1 = theRest.slice(0, space + 1); //"Barack " 
//         theRest = theRest.slice(space + 1); 
//         result += part1[0].toUpperCase() + part1.slice(1) 
//         space = theRest.indexOf(' '); 
//     }
//     if (theRest) {
//         result += theRest[0].toUpperCase() + theRest.slice(1);
//     }
//     return result; 
//}

//     if (space !== -1) { 
//       return n [0].toUpperCase() 
//          + n.slice(1,space + 1)
//          + n[space + 1].toUpperCase()
//          + n.slice(space+2)
// } 
//     else { 
//         return n[0].toUpperCase()
//          + n.slice(1)
// }
// }

// console.log(nameCase('  BARack hussein ObamA')); 


//if no space get index of -1


// function nameCase(name) {
//     var theRest = name.toLowerCase().trim();
//     var space = theRest.indexOf(' ');
//     var result = '';
//     while (space !== -1) {
//         var part1 = theRest.slice(0, space + 1); // "Barack "
//         theRest = theRest.slice(space + 1);
//         result += part1[0].toUpperCase() + part1.slice(1);
//         space = theRest.indexOf(' ');
//     }
//     result += theRest[0].toUpperCase() + theRest.slice(1);
//     return result;
// }




//shorter way to do capitalization question below
/*  function nameCase(name) {
      var result = name[0].toUpperCase();
      for (var i = 1; i < name.length; i++) {
          if (name[i - 1] === " ") {
              result += name[i].toUpperCase();
          } else {
              result += name[i].toLowerCase();
          }
      }
      return result;
  }
  */


//    q1 exercise 
// function XO (str) {
//     var sum = " "
//     for (var i = 0; i <= str.length; i++) {
//          if ( str[i]  === 'x') { 
//              sum ++}
//          if (str[i] === 'o') { 
//              sum -- 
//     } 
// }   
//     if (sum === 0) {
//         return true
//     }
//    else {
//         return false
//     }
// }
// console.log(XO("xooogjdxxkf"))




// var sum = 0;

// function XO(str) {
// for (var i = 0; i < str.length; i++) {
//   if (str[i].toLowerCase() == 'x') sum++;
//   if (str[i].toLowerCase() == 'o') sum--;
//  }
// return sum === 0;
// }
// console.log(XO('xooogjdxxkf'))



//q2 

// function countVowels (str) {
//     var counter = ' '
//     for (var i = 0; i <= str.length; i++) {
//         if (str[i] === 'a' 
//          || str[i] === 'e' 
//          || str[i] === 'i' 
//          || str[i] === 'o' 
//          || str[i] === 'u') {
//          counter ++
//      } 
//     }
//     return counter
// }
// console.log(countVowels("returnoo"))

//q3 

// function isPalindrome (word) {
//     for (var i = 0; i < ((word.length-1)/2); i++) { 
//         if (word[i] !== word[(word.length-1) - i]) {
//              return false
//         }
//     }
//              return true
// }
// console.log(isPalindrome("tabrat"))

//no need to do math.ceil here 
// other way to do q3
// consoole.assert(isPalindrome("racecar"), "racecar is a palindrome"); 
// console.assert(isPalindrome("ABBA"), "ABBA is a palindrome"); 
//console.assert(isPalindrome("eye"))
//console.assert(!isPalindrome("going"), "going is not a palindrome");
//q 4
// function mySubString(str, num1, num2) {
//     return str.substring(num1, num2)
// }
// console.log(mySubString("giraffe", 0, 2))

// q5
// function myIncludes(string, letter) {
//     for (var i = 0; i <= string.length; i++) {
//         if (string[i] === letter) {
//             return true
//         }
//     }
//     return false
// }
// console.log(myIncludes("buddy", "z"))


//q6 
// line = ' '
// function triangle(num) {
//     for(var i = 1; i <= num; i++) {
//         line += '#' 
//         console.log(line)
//     }
// }
// console.log(triangle(5))

//q1  correct
// function XO(str) {
//     var counter = 0
//     for (var i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() === 'x') {
//             counter++
//         }
//         if (str[i].toLowerCase() === 'o') {
//             counter--
//         }
//     }  
//     return (counter === 0)
// }

// console.log(XO("xoooomxx"))



//q1 from 
// function XO(str) {
//     var sum = 0;
//     for (var i = 0; i < str.length; i++) {
//       if (str[i].toLowerCase() == 'x') sum++;
//       if (str[i].toLowerCase() == 'o') sum--;
//     }
//     return sum == 0;
//   }
//   console.log(XO("xooxx"))

// q7
//function that creates a string that 
//represents a board. The function will take a number length 
//as an argument. It will alternate between spaces  - ' ', and  '#' 
//characters to represent each position in the board. It will use 
//the newline character - '\n' to separate the lines. 

function board (length) {
    var line = ' '
    var reverseLine = ' '
    var board = ' '
    for(var i = 1; i <= length; i++) { 
        if(i % 2 === 0) {
            line += " "
            reverseLine += "#"
        } else {
            line += '#'
            reverseLine += " "
        }
    }
    for(var i = 1; i <= length; i++) {
        
    }
}