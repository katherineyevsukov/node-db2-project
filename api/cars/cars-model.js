const db = require('./../../data/db-config')

const getAll = () => {
  return db('cars')
  .select('id', 'vin', 'make', 'model', 'mileage', 'title', 'transmission')
}

const getById = (id) => {
  
  return db('cars')
    .select('id', 'vin', 'make', 'model', 'mileage', 'title', 'transmission')
    .where('id', id)
    .first()
  
}

const create = () => {
  // DO YOUR MAGIC
}

module.exports = { getAll, getById, create }
