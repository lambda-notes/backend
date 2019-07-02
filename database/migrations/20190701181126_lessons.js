exports.up = function(knex, Promise) {
  return knex.schema.createTable('lessons', table => {
    table.increments('id');
    table.string('lesson', 500);
    table
      .integer('lessonsTrackID')
      .unsigned()
      .reference('id')
      .inTable('track')
      .notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('lessons');
};
