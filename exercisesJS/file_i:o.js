// const fs = require('fs')

// fs.unlink('/tmp/hello', function(err) {
//   if (err) {
//     return console.log(err)
//   }
//   console.log('successfully deleted /tmp/hello')
// })


// the sync api
const fs = require('fs')

try {
  fs.unlinkSync('/tmp/hello')
} catch (ex) {      //catch only runs if there's an error 
  console.log(ex)
}

console.log('successfully deleted /tmp/hello');