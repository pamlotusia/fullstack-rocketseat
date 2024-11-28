exports.up = knex =>
  knex.schema.createTable('movie_notes', table => {
    table.increments('id')
    table.text('title')
    table.text('description')
    table.integer('rating')

    //foreign key
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')

    table.timestamp('created_at').default(knex.fn.now())
    table.timestamp('updated_at').default(knex.fn.now())
  })
  .then(() =>
    knex.raw(
      'ALTER TABLE movie_notes ADD CONSTRAINT check_rating CHECK (rating >= 0 AND rating <= 5)'
    )
  )

exports.down = knex => knex.schema.dropTable('movie_notes')
