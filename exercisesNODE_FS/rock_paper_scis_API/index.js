// const express = require('express') // import express
// const app = express() // create an express server
// const port = 8000; // we will use this later

// app.get('/', (req, res) => {
//   res.send('Play with rock, paper, or scissors')
// }) // routes the '/' URL path to produce a response of 'Hello World!'

// app.get('/rock', (req, res) => {
//     var choice = Math.floor((Math.random()) *3)
//     var optionsRock = [{"ai": "rock", "result": "tie"}, 
//                     {"ai": "paper", "result": "lose"}, 
//                     {"ai": "scissors", "result": "win"}
//                 ]
//     res.send(`{ "ai": "${optionsRock[choice].ai}",
//     "result": "${optionsRock[choice].result}" }`)
//   }) 

//   app.get('/paper', (req, res) => {
//     var choice = Math.floor((Math.random()) *3)
//     var optionsPaper = [{"ai": "rock", "result": "win"}, 
//                     {"ai": "paper", "result": "tie"}, 
//                     {"ai": "scissors", "result": "lose"}]
//     res.send(`{ "ai": "${optionsPaper[choice].ai}", 
//     "result": "${optionsPaper[choice].result}" }`)
//   }) 

//   app.get('/scissors', (req, res) => {
//     var choice = Math.floor((Math.random()) *3)
//     var optionsScissors = [{"ai": "rock", "result": "lose"}, 
//                     {"ai": "paper", "result": "win"}, 
//                     {"ai": "scissors", "result": "tie"}]
//     res.send(`{"ai": "${optionsScissors[choice].ai}", 
//     "result": "${optionsScissors[choice].result}" }`)
//   }) 

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// }) 



//peter's 
const express = require('express') // import express
//const morgan = require('morgan')
const port = 8000; // we will use this later
const app = express() // create an express server

//app.use(morgan('dev'))

const storage = {}  // { "username": { "wins": 0, "losses": 0, "ties": 0 }}

const rps = ['rock', 'paper', 'scissors']
const loss = ['paperscissors', 'rockpaper', 'scissorsrock']

const aiChoice = () => rps[Math.floor(Math.random() * 3)]

const rpsResult = (user, ai) => {
    const userAi = user + ai
    if (user === ai) {
        return 'tie'
    } else if (loss.includes(userAi)) {
        return 'lose'
    } else {
        return 'win'
    }
}

app.get('/:userChoice', (req, res) => {
    if (!rps.includes(req.params.userChoice)) {
        res.status(404)
        res.send('Please use one of rock, paper or scissors')
    }
    let ai = aiChoice()
    let result = rpsResult(req.params.userChoice, ai)
    let response = {
        user: req.params.userChoice,
        ai: ai,
        result: result
    }
    res.send(JSON.stringify(response))
})

const userStat = (user) => storage[user] || { wins: 0, losses: 0, ties: 0 }

const updateStat = (user, stats, result) => {
    if (result === 'tie') {
        stats.ties += 1
    } else if (result === 'win') {
        stats.wins += 1
    } else {
        stats.losses += 1
    }
    storage[user] = stats
    return stats
}

app.get('/:userChoice/:user', (req, res) => {
    if (!rps.includes(req.params.userChoice)) {
        res.status(404)
        res.send('Please use one of rock, paper or scissors')
    }
    let ai = aiChoice()
    let result = rpsResult(req.params.userChoice, ai)

    let stats = userStat(req.params.user)
    updateStat(req.params.user, stats, result)

    let response = {
        user: req.params.userChoice,
        ai: ai,
        result: result,
        stats: stats
    }
    res.send(JSON.stringify(response))
})

app.listen(port, () => {
  console.log(`RPS app listening on port ${port}`)
}) // asks our server to listen for requests on port 8000, logging to the console to confirm that things are working