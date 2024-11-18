export async function up(knex) {
  return knex.schema.createTable('average_temp', (table) => {
    table.increments('id').primary()
    table.integer('location_id').references('locations.id')
    table.string('month')
    table.integer('average_temp')
  })
}

export async function down(knex) {
  return knex.schema.dropTableIfExists('average_temp')
}
