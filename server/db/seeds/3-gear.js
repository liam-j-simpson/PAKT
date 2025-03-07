export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('gear').insert([
    {
      id: 1,
      name: 'Sleeping Bag',
      max_temp: 18,
      min_temp: 2,
      activity_id: 1,
    },
    {
      id: 2,
      name: 'Bike',
      max_temp: null,
      min_temp: null,
      activity_id: 2,
    },
  ])
}
