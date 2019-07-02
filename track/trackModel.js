const db = require('../database/dbConfig.js');

module.exports = {
  find,
  findById,
  insert,
  remove,
  update
};

function find() {
  return db('track');
}

function findById(id) {
  return db('track')
    .where({ id })
    .first();
}

function insert(track) {
  return db('track')
    .insert(track)
    .then(ids => ids);
}

function update(changes, id) {
  return db('track')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('track')
    .where({ id })
    .del();
}
