const db = require("./../../data/db-config");

const getAll = () => {
  return db("cars").select(
    "id",
    "vin",
    "make",
    "model",
    "mileage",
    "title",
    "transmission"
  );
};

const getById = (id) => {
  return db("cars")
    .select("id", "vin", "make", "model", "mileage", "title", "transmission")
    .where("id", id)
    .first();
};

const create = async (car) => {
  const [id] = await db("cars").insert(car);

  return getById(id);
};

const getByVin = (vin) => {
  return db("cars").select("id").where("vin", vin).first();
};

module.exports = { getAll, getById, create, getByVin };
