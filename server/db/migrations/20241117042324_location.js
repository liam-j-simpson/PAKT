export async function up(knex) {
  return knex.schema.createTable('location', (table) => {
    table.increments('id').primary()
    table.string('location_name')
  })
}

export async function down(knex) {
  return knex.schema.dropTableIfExists('location')
}
