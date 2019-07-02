const db = require('../database/dbConfig.js');

module.exports = {
  find,
  findById,
  insert,
  remove,
  update
};

function find() {
  return db('lessons');
}

function findById(id) {
  return db('lessons')
    .where({ id })
    .first();
}

function insert() {
  // Finish
}

function remove() {
  // Finish
}

function update() {
  // Finish
}
