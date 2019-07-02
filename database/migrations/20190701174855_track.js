exports.up = function(knex, Promise) {
  return knex.schema.createTable('track', table => {
    table.increments('id');
    table.string('trackName', 256).notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('track');
};
