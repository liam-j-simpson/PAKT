export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('average_temp').del()
  await knex('locations').del()
}
    