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

function findByNoteId(notesID) {
  return db('notes').where({ notesID });
}

function findByUserId(userID) {
  return db('notes');
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
