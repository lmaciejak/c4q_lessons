var express = require('express')
var bodyParser = require('body-parser')
const port = 3000;
const fs = require('fs')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
let numberFile = "number.json"

const writeFile = (filename, data, res) => {
    fs.writeFile(filename, data, (err) => {
        if (err) {
            return res.send(err)
        }
        res.send('number updated')
    })
}

app.post('/number', (req, res) => {
    if (!req.body.number) {
        return res.send('please specify a number');
    }



    fs.readFile(numberFile, 'utf8', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                const arr = [req.body]
                const jsonArr = JSON.stringify(arr)
                return writeFile(numberFile, jsonArr, res)
            } else {
                return res.send(err)
            }
        }
        const arr = JSON.parse(data)
        arr.push(req.body)
        const jsonArr = JSON.stringify(arr)
        return writeFile(numberFile, jsonArr, res)
    })
})

app.get('/number', (req, res) => {
    if (!'number.json') {
        res.send(`there is no number`)
    } else {
        fs.readFile(numberFile, 'utf8', (err, data) => {
            const arr = [req.body]
            const jsonArr = JSON.stringify(arr)
            const parsedArr = JSON.parse(data)
            console.log(parsedArr)
            const allNum = (parsedArr) => parsedArr.map((elem)=>{
                return elem.number
            })
            res.send(`the number is ${allNum(parsedArr)}`)
        })
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})
