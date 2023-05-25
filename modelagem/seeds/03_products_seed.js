const { faker } = require('@faker-js/faker')

exports.seed = async function (knex) {
  const products = []
  for (let i = 0; i < 5; i++) {
    products.push({
      name: faker.commerce.productName(),
      descricao: faker.lorem.sentence(),
      qtd_minima: faker.number.int({ max: 10 }),
    })
  }

  await knex('products').insert(products)
}
