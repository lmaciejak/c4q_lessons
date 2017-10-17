// // touch.js
// var fs = require('fs');

// fs.writeFile('/tmp/fs.tmp', 'ABCDEF', function(err) {
//   if (err) throw err;
// });


// // apendfile.js
// var fs = require('fs');

// fs.appendFile('/tmp/fs.tmp', 'one more line', function(err) {
//   if (err) throw err;
// });


// Load the fs (filesystem) module
// var fs = require('fs');

// // Read the contents of the file into memory.
// fs.readFile('/tmp/fs.js', function (err, logData) {

//   // If an error occurred, throwing it will
//   // display the exception and end our app.
//   if (err) throw err;

//   // logData is a Buffer, convert to string.
//   var text = logData.toString();
// });



////Exercises//////////////////////////////////////////
//q 1
// var fs = require('fs');

// fs.readFile('dirlist.txt', function (err, file) {
//   if (err) throw err;
//   var text = file.toString();

//   //to process array write for loop

// var array = text.split('\n')
//   for (var index = 0; index < array.length; index++) {
//       var row = array[index];

//       var columns = row.split(/ +/)
//       var filename = columns[8]

//       if(filename === undefined) {
//           continue;  //means go back to loop
//       }
//       console.log(filename);
//   }
// });


//q2
function getSecondsToDismissal(){
    var today = new Date()
    var dismissal = new Date()
        dismissal.setHours(18, 0, 0)
    console.log((dismissal - today)/1000)
}


setInterval(getSecondsToDismissal, 1000)

