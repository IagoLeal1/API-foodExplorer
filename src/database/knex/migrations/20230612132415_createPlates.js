exports.up = knex => knex.schema.createTable("plates", table => {
  table.increments("id").notNullable();
  table.text("avatar").notNullable();
  table.text("title").notNullable();
  table.text("category").notNullable();
  table.integer("price").notNullable();
  table.text("description").notNullable();

  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
});

exports.down =  knex => knex.schema.dropTable("plates");
