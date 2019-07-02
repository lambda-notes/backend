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
  // Finish
}

function update(changes, id) {
  // Finish
}

function remove(id) {
  // Finish
}
