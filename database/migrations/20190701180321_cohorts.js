exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohorts', table => {
    table.increments('id');
    table.string('cohortName', 256);
    table
      .integer('cohortTrackID')
      .unsigned()
      .references('id')
      .inTable('track')
      .notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cohorts');
};
