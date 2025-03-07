export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('user').insert([
    {
      id: 1,
      name: 'Sam',
      email: 'example@example.com',
    },
    {
      id: 2,
      name: 'Peter',
      email: 'example@example.com',
    },
  ])
}
