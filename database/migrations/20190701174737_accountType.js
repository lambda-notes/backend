exports.up = function(knex, Promise) {
  return knex.schema.createTable('accountType', table => {
    table.increments('id');
    table.string('accountType', 256).notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('accountType');
};
