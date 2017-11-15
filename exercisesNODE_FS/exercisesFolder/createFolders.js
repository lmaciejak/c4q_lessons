const fs = require('fs'); 
let name = 'folder'

// for(var i = 1; i<=100; i++){
// fs.mkdir(name +[i] , () => {
//     console.log('Created another new repo!')
//   });
// }

for(var i = 1; i<=100; i++){
  fs.rmdir(name + [i], (err, data) => {
    if(err) console.log('Error!', err);
    console.log('Deleted another new repo!')
  });
}

const renameOneHundo = () => { 
    let num = 100
    for (var i =0; i <= num; i++) { 
        renameFolder(i)
    }
}