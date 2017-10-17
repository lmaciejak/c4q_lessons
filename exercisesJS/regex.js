// var text = 'I may not have been sure about what really did interest me, but I was absolutely sure about what didn\'t.';

// var pattern = /may/;

// console.log(pattern.exec(text));

// console.log(/h..e/.exec('The text does not have exwhyzee'))

// // EXERCISES /////////////////////////////////////////////////////////////////
// //Q1
// // Find the first three letter word in the text below:

// var text = 'I looked up at the mass of signs and stars in the night sky and laid myself open for the first time to the benign indifference of the world.'

// var pattern = / [a-zA-Z][a-z][a-z] /;

// text.match(pattern); 
// //pattern.exec(text) //these 2 are the same 


// //var pattern = / [a-z]?[a-z][a-z] /; question mark means either 2 letter word for sure or 3 letter word 

// // var pattern = / [a-z]{5}[ .,;]/;


// [A-Z]? === [A-Z]{0,1}
//[A-Z]* === [A-Z]{0, }
//[A-Z]+ === [A-Z]{1, }

//find last few characters
//var pattern = /\w+\.$/;
// \. is an actual dot without \ the dot means any character 
//the below means word boundary 
//var pattern  = /\b\w{3}\b/; 

//var text ='Luna\'s fun.'


// // know how many words are in a string 
// var aWord = /\b\w+\b/g;

// 'Make the thing do the thing. There is no try, just the done.'.match(aWord).length;
// // -> 13

//q2/////////////
//Find ALL the three letter words in the text below:
// var text = 'I looked up at the mass of signs and stars in the night sky and laid myself open for the first time to the benign indifference of the world.'
// var pattern = /\b\w{3}\b/g;
// //or while m is truthy
// var m; 
// while (m = pattern.exec(text)) {
//     console.log(m);
// }

// text.match(pattern)

// //q3
// //find first capital letter

// var text = 'txtng: the Gr8 Db8'
// var pattern = /[A-Z]/;


// //q4///////////////

// // Find the first number in the text below:

// var text = 'There are 300,000,000 Americans, give or take.'

// var pattern = /[0-9,]+/;
// console.log(pattern.exec(text))


// //q5 //////////
// // Find the first capitalized word in the text below:

// var text = 'txting: the Great Debate'
// var pattern = /[A-Z][a-z]*/;
// console.log(pattern.exec(text))


//q6 
// // Match on hexadecimal numbers:

var text = "This is an example of a hexadecimal number: af00cce1. So is this: AF11. A dad is hex but a mom isn't."
var aHex = /\b[0-9a-f]+\b/gi;
console.log(text.match(aHex))

// // var pattern = /\b[a-fA-F0-9]{1,}\b/g;
// var pattern = /\b[a-fA-F0-9]{1,}\b/g;


// //q 7 
// //Find the first word in the text:
// var text = 'This is an example.';
// var pattern = /\b\w+\b/; 
// console.log(pattern.exec(text))

// //q8
// Find the last word in the text:
// Note that does not include the full stop. Also should work on sentences without the full stop:
var text = 'This is also an example..';
var pattern = /\w+\W*$/; 
// var pattern = /\b\w+\W*\b$/;
// console.log(pattern.exec(text))

// /\d+\D*$/; gives us last number 
// //var text = 'This is an example...';
// var text = "Won\'t find 55. This is 100,000 example..."
// var pattern = /[0-9,]+[^0-9]*$/; //gives us 100,000 example...
// console.log(text.match(pattern))

// var text = "Won\'t find 55. This is 100,000 example..."
// var pattern = /([0-9,]+)[^0-9]*$/; //put parenthesis around part interested in and get last number 
// console.log(text.match(pattern)[1])



// //q9
// // For the following strings, write an expression that matches and captures both the full date, as well as the year of the date.

// var dates = ['01/01/2000', '12/31/1999', '02/29/2017'];

// var pattern = /\d{1,2}\/\d{1,2}\/\d{2,4}/;
// for (var i = 0; i < dates.length; i++) {
//     var date = dates[i];
    
// console.log(date.match(pattern))
// }

// //q9 so shows nnested loops? 
// var dates = ['Somebody was born on 01/01/2000, I think.', '12/31/1999', '02/29/2017'];

// var pattern = new RegExp('((\\d{1,2})/(\\d{1,2}))/(\\d{2,4})');

// for (var i = 0; i < dates.length; i++) {
//     var date = dates[i];

//     var dateMatch = date.match(pattern);
//     console.log(dateMatch)
//     var date = new Date(dateMatch[4], dateMatch[3] - 1, dateMatch[2]);
//     date.setMonth(date.getMonth() + 6);

//     console.log(date)
// }

// //q10 
// // Find and print all tags in this simple html:

// var html = '<html><head>'+
//            '<title>Simple</title>'+
//            '</head><body>'+
//            'Nothing to see here'+
//            '</body></html>';

// // var notAnHtmlTag = /<.+>/; //+ means greedy 
// var anHtmlTag = /<.+?>/; 

// // '<em>Hello World</em>'.match(notAnHtmlTag)
// // // '<em>Hello World</em>'.match(anHtmlTag)




// var html = '<html><head>'+
// '<title>Simple</title>'+
// '</head><body>'+
// 'Nothing to see here'+
// '</body></html>';



// pattern = /<.+?>/g
// console.log(html.match(pattern))


// //can use the 
// var anHtmlTag = /<.+?>/g;

// var html = '<html><head>'+
// '<title>Simple</title>'+
// '</head><body>'+
// 'Nothing to see here'+
// '</body></html>';

// console.log(html.split(anHtmlTag).join(','))
