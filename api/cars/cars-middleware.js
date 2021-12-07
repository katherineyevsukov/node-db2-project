const Car = require("./cars-model");

const checkCarId = async (req, res, next) => {
  try {
    const car = await Car.getById(req.params.id);
    !car
      ? next({ status: 404, message: `car with id ${req.params.id} not found` })
      : (req.carFromDb = car);
    next();
  } catch (err) {
    next(err);
  }
};

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
};

const checkVinNumberValid = (req, res, next) => {
  const { vin } = req.body;
  if (
    vin.length !== 17 ||
    vin.toUpperCase().includes("O") ||
    vin.toUpperCase().includes("I") ||
    vin.toUpperCase().includes("Q")
  ) {
    next({ status: 400, message: `vin ${vin} is invalid` });
  } else {
    next();
  }
};

const checkVinNumberUnique = async (req, res, next) => {
  try{
    const id = await Car.getByVin(req.body.vin)
    console.log(id)
    !id ? next() : next({status: 400, message: `vin ${req.body.vin} already exists`})
  }catch(err){
    next(err)
  }
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid,
};
