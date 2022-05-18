// required dependencies
const express = require('express')
const res = require('express/lib/response')
const budget = require('./models/budget')

// init express
const app = express()

const port = 3000

//ROUTES

// index
app.get('/budgets', (req, res) => {
    res.send('working')
})

// show
app.get('/budgets/:index', (req, res) => {
    res.send('Are you working?')
})

// new
app.get('/budgets/new', (req, res) => {
    res.send('new page')
})

// create w/ POST
app.post('/budgets', (req, res) => {
    res.send('good post?')
})

// ROUTES


// app is listening
app.listen(port, () => {
    console.log('listening on port', port)
})

