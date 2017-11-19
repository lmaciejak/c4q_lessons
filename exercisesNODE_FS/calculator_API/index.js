// const express = require('express') // import express
// const app = express() // create an express server
// const port = 8000; // we will use this later

// app.get('/:operator/:num1/:num2', (req, res) => {
//     let num1 = parseInt(req.params.num1)
//     let num2 = parseInt(req.params.num2)
//     let operator; 
//     if (req.params.operator === 'add') { 
//         if(isNaN(num1) || isNaN(num2)) { 
//             res.send('numbers only')
//         } else { 
//             res.send(`{num1: ${num1}, num2: ${num2}, result: ${num1 + num2} }`)
//         }
//     } else if (req.params.operator === 'sub') { 
//         if(isNaN(num1) || isNaN(num2)) { 
//             res.send('numbers only')
//         } else { 
//             res.send(`{num1: ${num1}, num2: ${num2}, result: ${num1 - num2} }`)
//         }
//     } else if (req.params.operator === 'mul') { 
//         if(isNaN(num1) || isNaN(num2)) { 
//             res.send('numbers only')
//         } else { 
//             res.send(`{num1: ${num1}, num2: ${num2}, result: ${num1 * num2} }`)
//         }
//     } else if (req.params.operator === 'div') { 
//         if(isNaN(num1) || isNaN(num2)) { 
//             res.send('numbers only')
//         } else { 
//             res.send(`{num1: ${num1}, num2: ${num2}, result: ${num1 / num2} }`)
//         }
//     } else { 
//         res.send('the operator is not supported')
//     }
// })

// app.get('*', (req, res) => { 
//     res.send('This is a calculator API utilizing 4 different routes')
// }) 

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// }) 





// const express = require('express') // import express
// const app = express() // create an express server
// const port = 8000; // we will use this later

// app.get('/add/:num1/:num2', (req, res) => {
//     let num1 = parseInt(req.params.num1)
//     let num2 = parseInt(req.params.num2)
//     if(isNaN(num1) || isNaN(num2)) { 
//         res.send('numbers only')
//     } else { 
//         res.send(`{num1: ${num1}, num2: ${num2}, result: ${num1 + num2} }`)
//     }
// })

// app.get('/sub/:num1/:num2', (req, res) => {
//     let num1 = parseInt(req.params.num1)
//     let num2 = parseInt(req.params.num2)
//     if(isNaN(num1) || isNaN(num2)) { 
//         res.send('numbers only')
//     } else {
//         res.send(`{num1: ${num1}, num2: ${num2}, result: ${num1 - num2} }`)
//     }
// }) 

// app.get('/mul/:num1/:num2', (req, res) => {
//     let num1 = parseInt(req.params.num1)
//     let num2 = parseInt(req.params.num2)
//     if(isNaN(num1) || isNaN(num2)) { 
//         res.send('numbers only')
//     } else { 
//         res.send(`{num1: ${num1}, num2: ${num2}, result: ${num1 * num2} }`)
//     }
// })

// app.get('/div/:num1/:num2', (req, res) => {
//     let num1 = parseInt(req.params.num1)
//     let num2 = parseInt(req.params.num2)
//     if(isNaN(num1) || isNaN(num2)) { 
//         res.send('numbers only')
//     } else { 
//         res.send(`{num1: ${num1}, num2: ${num2}, result: ${num1 / num2} }`)
//     }
// }) 

// app.get('*', (req, res) => { 
//     res.send('This is a calculator API utilizing 4 different routes')
// }) 

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// }) 


//peter's code 

const express = require('express') // import express
const app = express() // create an express server
const port = 8000; // we will use this later
const serveStatic = require('serve-static')

app.use(serveStatic('files'))

app.get('/:op/:num1/:num2', (req, res) => { 
    if(!['add', 'sub','mul','div'].includes(req.params.op)) { 
        res.status(404)
        res.send('please use add, sub, mul or divide ')
    }
    const num1 = Number(req.params.num1)
    const num2 = Number(req.params.num2)
    res.send({ 
        number1: num1, 
        number2: num2, 
        result: {
            add: () => num1 + num2,
            sub: () => num1 - num2,
            mul: () => num1 * num2,
            div: () => num1 / num2,
        }[req.params.op]()                      // ????????????????
    })
    })

app.post('/home.html', (req, res) => { 
    res.send(`Hi, ${req.body.name}`)
})

app.listen(port, () => {
    console.log(`RPS app listening on port ${port}`)
  }) 