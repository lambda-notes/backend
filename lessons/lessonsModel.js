const db = require('../database/dbConfig.js');

module.exports = {
  find,
  findById,
  insert,
  update,
  remove
};

function find() {
  return db('lessons');
}

function findById(id) {
  return db('lessons')
    .where({ id })
    .first();
}

function insert(lesson) {
  return db('lessons')
    .insert(lesson)
    .then(lessonID => lessonID);
}

function update(changes, id) {
  return db('lessons')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('lessons')
    .where({ id })
    .del();
}
