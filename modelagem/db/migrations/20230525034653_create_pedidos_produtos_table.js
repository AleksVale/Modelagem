/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('pedidos_produtos', function (table) {
    table.increments('id').primary()
    table.integer('produto_id').unsigned().notNullable()
    table.foreign('produto_id').references('id').inTable('products')
    table.integer('pedido_id').unsigned().notNullable()
    table.foreign('pedido_id').references('id').inTable('pedidos')
    table.string('lote').nullable()
    table.integer('quantidade').nullable()
    table.timestamps(true, true)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('pedidos_produtos')
}
