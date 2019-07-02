const db = require('../database/dbConfig.js');

module.exports = {
  find,
  findByLessonID,
  findByID,
  insert,
  remove,
  update
};

function find() {
  return db('videos');
}

function findByLessonID(id) {
  return db('videos').where({ lessonID: id });
}

function findByID(id) {
  return db('videos')
    .where({ id })
    .first();
}

function insert(video) {
  // Finish
}

function update(changes, id) {
  // Finish
}

function remove(id) {
  // Finish
}
