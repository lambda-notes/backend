exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', table => {
    table.increments('id');
    table.string('noteTitle', 256);
    table.text('note');
    table
      .integer('notesLessonID')
      .unsigned()
      .references('id')
      .inTable('lessons')
      .notNullable();
    table
      .integer('userID')
      .unsigned()
      .references('id')
      .inTable('users')
      .notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('notes');
};
