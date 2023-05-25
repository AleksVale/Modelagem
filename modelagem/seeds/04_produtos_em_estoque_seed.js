const { faker } = require('@faker-js/faker/locale/pt_BR')

exports.seed = async function (knex) {
  const products = await knex('products').select('id')
  const produtosEmEstoque = []
  for (let i = 0; i < 4; i++) {
    let product = { id: 24 }
    if (i < products.length) {
      product = products[i]
    } else {
      product = products[i - products.length]
    }
    produtosEmEstoque.push({
      produto_id: product.id,
      quantidade: faker.number.int({ max: 100 }),
      lote: faker.string.alphanumeric({ length: 6, alphaNumeric: true }),
    })
  }

  await knex('produtos_em_estoque').insert(produtosEmEstoque)
}
