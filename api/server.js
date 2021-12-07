const express = require("express")

const server = express()

const carsRouter = require('./cars/cars-router')

server.use(express.json())

server.use('/api/cars', carsRouter)

server.get('/', (req, res, next) => {
    res.send('server is up and running')
})

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: process.env.NODE_ENV === 'PROD' ? 'sorry, there was an error!' : err.message,
        stack: err.stack
    })
})

module.exports = server
