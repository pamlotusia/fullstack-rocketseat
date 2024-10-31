
exports.up = knex => knex.schema.createTable("tags", table => {
  table.increments("id");
  table.text("name").notNullable()
  table.integer("user_id").references("id").inTable("users")
  table.integer("notes_id").references("id").inTable("notes").onDelete("CASCADE")

  table.timestamp("created_at").default(knex.fn.now())
  table.timestamp("updated_at").default(knex.fn.now())
}) 


exports.down = knex => knex.schema.dropTable("tags") 
