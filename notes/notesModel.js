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
  return db('notes')
    .insert(note)
    .then(newNote => newNote);
}

function update(changes, id) {
  return db('notes')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('notes')
    .where({ id })
    .del();
}
