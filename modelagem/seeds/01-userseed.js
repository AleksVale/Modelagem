const { faker } = require('@faker-js/faker')

exports.seed = async function (knex) {
  const users = []
  for (let i = 0; i < 5; i++) {
    users.push({
      name: faker.person.firstName(),
      user_name: faker.internet.userName(),
      password: faker.person.gender(),
      cargo_id: 1,
    })
  }

  await knex('users').insert(users)
}
