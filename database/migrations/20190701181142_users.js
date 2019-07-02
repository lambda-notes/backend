exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('id');
    table.string('firstName', 256);
    table.string('lastName', 256);
    table
      .integer('accountType')
      .unsigned()
      .references('id')
      .inTable('accountType')
      .notNullable();
    table.string('githubId', 256).notNullable();
    table.string('token', 256).notNullable();
    table.string('email', 256).notNullable();
    table
      .integer('cohortID')
      .unsigned()
      .references('id')
      .inTable('cohorts')
      .notNullable();
    table
      .integer('trackID')
      .unsigned()
      .references('id')
      .inTable('track')
      .notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
