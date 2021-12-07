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

router.get('/:id', async (req, res, next) => {
    try{
        const car = await Car.getById(req.params.id)
        res.status(200).json(car)
        } catch(err){
            next(err)
        }
})

module.exports = router
