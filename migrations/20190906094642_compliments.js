exports.up = function (knex) {
  return knex.schema.createTable('compliments', table => {
    table.increments('id')
    table.string('compliment')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('compliments')
}
