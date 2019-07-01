const db = require('../database/dbConfig.js');

module.exports = {
  findAllNotes,
  findByNoteId,
  findByUserId,
  insert,
  remove,
  update
};

function findAllNotes() {
  return db('notes');
}

function findByNoteId(id) {
  // Finish
}

function findByUserId(id) {
  // Finish
}

function insert(note) {
  // Finish
}

function update(updatedNote) {
  // Finish
}

function remove(id) {
  // Finish
}
