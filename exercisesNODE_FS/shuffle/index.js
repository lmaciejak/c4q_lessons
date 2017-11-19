// const express = require('express')
// const app = express()
// const port = 8000;

let names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
let cards = 

for (var s = 0; s < suits.length; s++) {
    for (var n = 0; n < names.length; n++) {
        cards += {names[n], suits[s]};
    }
}

console.log(cards)

    // app.get('/draw/:number?', (req, res) => {
    //     let num = req.params.number
    //     let shuffledCards = []
    //     if (num <= 10) {
    //         for (var i = 1; i <= 10; i++) {
    //             shuffledCards.push(cards[Math.random() * 52])
    //         }
    //     }
    //     res.send(shuffledCards)
    // })

    // app.listen(port, () => {
    //     console.log(`Example app listening on port ${port}`)
    // }) 
