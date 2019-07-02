const db = require('../database/dbConfig.js');

module.exports = {
  find,
  findById,
  insert,
  remove,
  update
};

function find() {
  return db('cohorts');
}

function findById(id) {
  // Finish
}

function insert(cohort) {
  // Finish
}

function update(changes, id) {
  // Finish
}

function remove(id) {
  // Finish
}
