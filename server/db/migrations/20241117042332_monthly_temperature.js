export async function up(knex) {
  return knex.schema.createTable('monthly_temperature', (table) => {
    table.increments('id')
    table.integer('location_id')
    table.string('month')
    table.integer('average_temp')
  })
}

export async function down(knex) {
  return knex.schema.dropTableIfExists('monthly_temperature')
}
