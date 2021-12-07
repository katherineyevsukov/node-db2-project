// DO YOUR MAGIC
const router = require("express").Router();
const Car = require("./cars-model");
const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique } = require('./cars-middleware')

router.get("/", async (req, res, next) => {
  try {
    const cars = await Car.getAll();
    res.status(200).json(cars);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", checkCarId, (req, res, next) => {
  res.status(200).json(req.carFromDb)
});

router.post("/", checkVinNumberValid, checkVinNumberUnique, (req, res, next) => {
    res.send('test')
})

module.exports = router;
