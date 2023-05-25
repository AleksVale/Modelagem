/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('pedidos', function (table) {
    table.increments('id').primary()
    table.string('nome').notNullable()
    table.date('data_compra').nullable()
    table.string('fornecedor').nullable()
    table.timestamps(true, true)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('pedidos')
}
