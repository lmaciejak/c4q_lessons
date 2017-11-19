var figlet = require('figlet');
const chalk = require('chalk');

// figlet('Hello World!!', function(err, data) {
//    if (err) {
//        console.log('Something went wrong...');
//        console.dir(err);
//        return;
//    }
//    console.log(chalk.blue.bgCyan(data))
// });

// //ex 1
// const helloBlue = figlet('Hello World', function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(chalk.blue(data))
//  });

// //  //ex 2
//  const helloRed = figlet("Hello World", function(err, data) {
//      console.log(chalk.red(data))
//  })

//ex 3
//  const stringToColor = (str, color) => { 
//      console.log(chalk[color](str))
//      console.log(chalk.blue.bold.underline(str))
//  }

//  stringToColor('this is a test', 'red')

// //ex 4 edit this one 
// const evenBlueOddsYellow = (str) => {
//     var finalStr = ''
//     var newArr = str.split(' ').map((elem,index) => {
//         if (index % 2 === 0) {
//             finalStr += chalk.blue(elem) + ' '
//         } else {
//             finalStr += chalk.yellow(elem) + ' '
//         }

//     }
//     return finalStr
// }
//  console.log(evenBlueOddsYellow('hi how are you'))

//  const evenBlueOddsYellow = (str) => {
//     var finalStr = ''
//     var newArr = str.split(' ')
//     for (var i = 0; i < newArr.length; i++) {
//         if (i % 2 === 0) {
//             finalStr += chalk.blue(newArr[i]) + ' '
//         } else {
//             finalStr += chalk.yellow(newArr[i]) + ' '
//         }
//     }
//     return finalStr
// }
//  console.log(evenBlueOddsYellow('hi how are you'))
// //ex 5 
// const angryText = (str) => { 
//      console.log(chalk.red.bold.underline(str))
//  }
//  angryText('hello')

// //ex 6 
// const backgroundCyan = (str) => { 
//     console.log(chalk.white.bgCyan(str))
// }
// backgroundCyan('hello')

//ex 7 
// const boldFirstUnderlineLast = (str) => {
//     var finalStr = ''
//     var newArr = str.split(' ')
//     for (var i = 0; i < newArr.length; i++) {
//         if (i === 0) {
//             finalStr += chalk.bold(newArr[i]) +' '
//         } else if (i === (newArr.length - 1)) {
//             finalStr += chalk.underline(newArr[i])+ ' '
//        } else {
//             finalStr += newArr[i] +' '
//        }
//     }
//     return finalStr
// }
// console.log(boldFirstUnderlineLast('hi how are you sir'))


// function boldFirstUnderlineLast(string){
//     var split = string.split(' ') 
//     if (split[1] === undefined){
//         console.log(chalk.bold(string))
//     }
//     else {
//         console.log(chalk.bold(split[0]) + ' ' + chalk.underline(split[1]))
//     }
// }
// boldFirstUnderlineLast('mcdonalds homie')


const commandLineChalk = (str) => { 
    console.log(chalk[process.argv[3]](chalk[process.argv[4]](chalk[process.argv[5]](process.argv[2]))))

    // console.log(chalk.blue(chalk.bgRed(chalk.underline("hello world"))))

}
commandLineChalk()