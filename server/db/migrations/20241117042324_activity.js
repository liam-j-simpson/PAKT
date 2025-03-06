export async function up(knex) {
  return knex.schema.createTable('activity', (table) => {
    table.increments('id').primary()
    table.string('name')
    table
      .integer('user_id')
      .references('id')
      .inTable('user')
      .onDelete('CASCADE')
  })
}

export async function down(knex) {
  return knex.schema.dropTableIfExists('activity')
}
