exports.seed = function(knex){
    return knex('cars').truncate()
    .then(function () {
        return knex('cars').insert([
            {vin: 1234567, make: 'Bat', model: 'Mobile', mileage: 9}
        ])
    })
}
