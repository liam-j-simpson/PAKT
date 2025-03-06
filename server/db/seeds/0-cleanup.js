export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('user').del()
  await knex('activity').del()
  await knex('gear').del()
}
