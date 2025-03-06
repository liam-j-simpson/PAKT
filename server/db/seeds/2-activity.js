export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('activity').insert([
    {
      id: 1,
      name: 'Hiking',
      user_id: 1,
    },
    {
      id: 2,
      name: 'Biking',
      user_id: 2,
    },
  ])
}
