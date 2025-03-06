export async function up(knex) {
  return knex.schema.createTable('gear', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('max_temp')
    table.integer('min_temp')
    table
      .integer('activity_id')
      .references('id')
      .inTable('activity')
      .onDelete('CASCADE')
  })
}

export async function down(knex) {
  return knex.schema.dropTableIfExists('gear')
}
