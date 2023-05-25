/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('produtos_em_estoque', function (table) {
    table.increments('id').primary()
    table.integer('produto_id').unsigned().notNullable()
    table.foreign('produto_id').references('id').inTable('products')
    table.integer('quantidade').nullable()
    table.string('lote').nullable()
    table.timestamps(true, true)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('produtos_em_estoque')
}
