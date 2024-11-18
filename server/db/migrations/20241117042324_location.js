export async function up(knex) {
  return knex.schema.createTable('locations', (table) => {
    table.increments('id').primary()
    table.string('location_name')
  })
}

export async function down(knex) {
  return knex.schema.dropTableIfExists('locations')
}
