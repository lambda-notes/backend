exports.up = function(knex, Promise) {
  return knex.schema.createTable('videos', table => {
    table.increments('id');
    table.text('videoName');
    table.string('videoURL', 1000);
    table
      .integer('lessonID')
      .unsigned()
      .references('id')
      .inTable('lessons')
      .notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('videos');
};
