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
  return db('notes')
    .where({ id })
    .first();
}

function findByUserId(userID) {
  return db('notes').where({ userID });
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
