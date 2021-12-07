const Car = require('./cars-model')

const checkCarId = async (req, res, next) => {
  try {
    const car = await Car.getById(req.params.id);
    !car ? next({status: 404, message: `car with id ${req.params.id} not found`}) :
    req.carFromDb = car
    next()
  } catch (err) {
    next(err);
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = { checkCarId }
