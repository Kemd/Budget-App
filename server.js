// required dependencies
const express = require('express')
// const res = require('express/lib/response')
const budgets = require('./models/budget')

// init express
const app = express()

const port = 3000

// MIDDLEWARE
app.use(express.urlencoded({ extended: false }))

//ROUTES

// index
app.get('/budgets', (req, res) => {
    res.render('index.ejs', { budgets })
})

// show
app.get('/budgets/:index', (req, res) => {
    res.render('show.ejs', {
        budget: budgets[req.params.index]
    })
})

// new
app.get('/budgets/new', (req, res) => {
    res.render('new.ejs')
})

// create w/ POST
app.post('/budgets', (req, res) => {
    budgets.push(req.body)
    console.log(req.body)
    res.redirect('budgets')
})

// ROUTES


// app is listening
app.listen(port, () => {
    console.log('listening on port', port)
})

