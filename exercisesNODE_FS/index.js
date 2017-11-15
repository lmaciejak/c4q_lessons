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
 const stringToColor = (str, color) => figlet(str, function(err, data){ 
     console.log(chalk.color(data))
 })



 stringToColor('this is a test', 'red')