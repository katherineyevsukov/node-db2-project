// DO YOUR MAGIC
const router = require('express').Router()
const Car = require('./cars-model')

router.get('/', async (req, res, next) => {
    try{
        const cars = await Car.getAll()
        res.status(200).json(cars)
    } catch(err){
        next(err)
    }
})

module.exports = router
