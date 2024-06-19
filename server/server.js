// Imports the Express module from node_modules
const express = require('express')

const router = require('./routes/routes')

//Creates an instance of Express application
const app = express()

app.use('/', router)
app.listen('8000', err => {
    if (err) {
        console.log(err)
    }
        console.log('Server started at PORT : 8000')
})