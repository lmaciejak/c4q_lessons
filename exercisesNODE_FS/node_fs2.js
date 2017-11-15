const fs = require('fs'); 

// fs.writeFile('message.txt','Hello Node.js', (err) => { 
//     if (err) { throw err; }
//     console.log('The file has been saved!')
// })

// fs.readFile('files/message.txt', 'utf8', function(err, data){     ///callback always looks the same 
//     if (err) { throw err}
//     console.log(`error: ${err}`)
//     console.log(`data: ${data}`)
// })

// 

//   fs.watch('add.js', (eventType, filename) => {
//     console.log(eventType + ' in ' + filename);
//   })

  fs.writeFile('lyrics-1.txt',`Yuh, ooh, brr, brr
  Gucci gang, ooh (that's it right there, Gnealz)`, (err) => { 
      if (err) { throw err; }
      console.log('The file has been saved!')

      fs.writeFile('lyrics-2.txt',`Gucci gang, Gucci gang, Gucci gang, Gucci gang (Gucci gang)
      Gucci gang, Gucci gang, Gucci gang (Gucci gang)`, (err) => { 
          if (err) { throw err; }
          console.log('The file has been saved!') 
      })

     fs.readFile('lyrics-1.txt', 'utf8', function(err, data){ 
        if (err) { throw err}
        //console.log(`error: ${err}`)
        console.log(`${data}`)
        lyrics1 = data

        fs.readFile('lyrics-2.txt', 'utf8', function(err, data){ 
            if (err) { throw err}
            //console.log(`error: ${err}`)
            console.log(`${data}`)
            lyrics2 = data

            fs.writeFile('lyrics-3.txt',lyrics1 + lyrics2, (err) => { 
                if (err) { throw err; }
                console.log('The file has been saved!') 
                })
        })
    })
    
  })
    var lyrics1; 
    var lyrics2; 
       

//     fs.writeFile('lyrics-3.txt',lyrics1 + lyrics2, (err) => { 
//         if (err) { throw err; }
//         console.log('The file has been saved!') 
//     })
//   })


const fileNames = ['lyrics-1.txt','lyrics-2.txt', 'lyrics-3.txt' ] 
let allData = ''

for (let i = 0; i < fileNames.length; i++){ 
    fs.readFile(fileNames[i], 'utf-8', (err, data) => { 
        if (err) { throw err } 
        allData += data; 
        console.log(`read file ${fileNames[i]}`)
        console.log()
    })
}
 
  

