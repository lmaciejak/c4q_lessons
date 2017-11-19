const express = require('express') // import express
const morgan = require('morgan')
const port = 8000; // we will use this later
const app = express() // create an express server
app.use(morgan('dev'))


app.get('/', (req, res) => {
  res.send('Hello World!')
}) // routes the '/' URL path to produce a response of 'Hello World!'

app.get('/page2', (req, res) => {
    res.send('Hello World 2!')
  }) // routes the '/' URL path to produce a response of 'Hello World!'

  app.get('/page3', (req, res) => {
    res.send('Hello World 3!')
  }) // routes the '/' URL path to produce a response of 'Hello World!'

  app.get('/users/:name/:class', (req, res) => {
    res.send(`Hello ${req.params.name} ${req.params.class}`)
  })
  

  app.get('*', (req, res) => {
    res.redirect('/')
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) // asks our server to listen for requests on port 8000, logging to the console to confirm that things are working